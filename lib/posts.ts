import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export type PostFrontmatter = {
  title: string
  description: string
  date: string
  tags : string[]
}

export async function loadPost(slug : string) {
    const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`
  return fs.readFileSync(
    path.join(process.cwd(), 'content', filename)
  )
}

export async function getPost(slug : string) {
  const source = await loadPost(slug)

  return compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true
    }
  })
}

export async function getPostsList({tags, newest,page,limit}: {tags : string[], newest : boolean, page : number, limit : number}){
      const files = fs.readdirSync(
        path.join(
            process.cwd(), 'content'
        )
    )

    const postList = await Promise.all(
        files.map(async filename => {
        const { frontmatter } = await getPost(filename)

        return {
            frontmatter: frontmatter,
            slug: filename.replace('.mdx', ''),
            parsedDate: Date.parse(frontmatter.date)
        }
        })
    )

    let sortedPosts = postList

    if(newest){
      sortedPosts = postList.sort((a,b) => (
          new Date(b.parsedDate).getTime() - 
          new Date(a.parsedDate).getTime() 
        )
      )
    }

    if (tags.length > 0){
      sortedPosts = sortedPosts.filter(
        post  => post.frontmatter.tags.some(
          tag => tags.includes(tag)
        )
      )
    }

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    return {
      posts: sortedPosts.slice(startIndex,endIndex),
      pageCount: Math.ceil(sortedPosts.length / limit)
    }

}
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

export async function getPostsList({tags, newest}: {tags : string[], newest : string}){
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

    let sortedList = postList

    const isNewest = newest === "true"


    if(isNewest){
      console.log("I'm here")
      sortedList = postList.sort((a,b) => (
          new Date(b.parsedDate).getTime() - 
          new Date(a.parsedDate).getTime() 
        )
      )
    }

    if (tags.length > 0){
      const filteredPosts = sortedList.filter(
        post  => post.frontmatter.tags.some(
          tag => tags.includes(tag)
        )
      )
      
      return filteredPosts
    }

    return sortedList
}
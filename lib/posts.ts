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

export async function getPostsList({tags}: {tags : string[]}){
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
            slug: filename.replace('.mdx', '')
        }
        })
    )

    if (tags.length > 0){
      const filteredPosts = postList.filter(
        post  => post.frontmatter.tags.some(
          tag => tags.includes(tag)
        )
      )
      
      return filteredPosts
    }

    return postList
}
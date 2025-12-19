import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export type PostFrontmatter = {
  title: string
  description: string
  date: string
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
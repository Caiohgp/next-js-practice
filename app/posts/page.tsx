
import { getPost } from '@/lib/posts'
import fs from 'fs'
import Link from 'next/link'
import path from 'path'

export type PostFrontmatter = {
  title: string
  date: string
}
export default async function BlogPostsPage() {

    const files = fs.readdirSync(
        path.join(
            process.cwd(), 'content'
        )
    )

    const posts = await Promise.all(
        files.map(async filename => {
        const { frontmatter } = await getPost(filename)

        return {
            frontmatter: frontmatter,
            slug: filename.replace('.mdx', '')
        }
        })
    )

    console.log(posts)

    return (
    <>
        <h1>Recent Posts</h1>
        <ul>
            {posts.map( post =>
                <li key={post.slug}> 
                    <Link href={`/posts/${post.slug}`}
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {post.frontmatter.title}</Link>
                    
                    <div className="text-gray-400 text-sm mt-2">{post.frontmatter.date}</div>

                </li>
            )
            }
        </ul>
    </>
    )
}

import { getPostsList } from '@/lib/posts'
import Link from 'next/link'

export type PostFrontmatter = {
  title: string
  date: string
}
export default async function BlogPostsPage({searchParams} : {searchParams: { tag?: string , newest? : string}}) {

    const searchParam = await searchParams
    const tagsSeparated = searchParam.tag?.split(',')

    const posts = await getPostsList({tags:tagsSeparated ?? [], newest:searchParam.newest ?? "false"})

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
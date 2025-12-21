import { getPostsList } from "@/lib/posts"
import Link from "next/link"

export default async function PostPreview(){

    const posts = await getPostsList({
        tags: [], 
        newest: true,
        page:  1,
        limit: 3
    })

    return(
        <ul className='mt-8 space-y-4'>
            {posts.posts.map(post =>
                <li key={post.slug}> 
                    <Link href={`/posts/${post.slug}`}
                        className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        {post.frontmatter.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}

import H1 from '@/components/h1'
import PaginationComponent from '@/components/pagination'
import { getPostsList } from '@/lib/posts'
import Link from 'next/link'

export type PostFrontmatter = {
  title: string
  date: string
}
export default async function BlogPostsPage({searchParams} : 
    {searchParams: { tag?: string , newest? : string ,page : string, limit : string }}) {

    const searchParam = await searchParams
    const tagsSeparated = searchParam.tag?.split(',')

    const posts = await getPostsList(
        {
            tags:tagsSeparated ?? [], 
            newest:searchParam.newest === "true",
            page:Number(searchParam.page) || 1,
            limit:Number(searchParam.limit) || 2

        }
    )


    return (
    <>
        <H1>Recent Posts</H1>
        <div className='mt-8'>
            Display&nbsp;
            {searchParam.newest === "true" && <Link href={`/posts?newest=false`}>Oldest Posts</Link>}
            {(searchParam.newest === "false" || !searchParam.newest) && <Link href={`/posts?newest=true`}>Newest Posts</Link>}
        </div>
        <ul className='mt-8'>
            {posts.posts.map( post =>
                <li key={post.slug}> 
                    <Link href={`/posts/${post.slug}`}
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {post.frontmatter.title}</Link>
                    
                    <div className="text-gray-400 text-sm mt-2">{post.frontmatter.date}</div>

                </li>
            )
            }
        </ul>

        <div className='mt-8'>
            <PaginationComponent pageCount={posts.pageCount}/>
        </div>
    </>
    )
}
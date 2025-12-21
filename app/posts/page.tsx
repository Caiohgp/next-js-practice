import H1 from '@/components/h1'
import PaginationComponent from '@/components/pagination'
import { getPostsList } from '@/lib/posts'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata : Metadata = {
    title:"Posts"
}

export type PostFrontmatter = {
  title: string
  date: string
}

type BlogPostsPageProps = {
  searchParams: Promise<{ 
    tag?: string
    newest?: string
    page?: string
    limit?: string 
  }>
}

export default async function BlogPostsPage({ searchParams }: BlogPostsPageProps) {
    const availableTags = ['#javascript','#typescript','#html','#css','#java','#nextjs']

    const params = await searchParams
    const tagsSeparated = params.tag?.split(',')

    const posts = await getPostsList({
        tags: tagsSeparated ?? [], 
        newest: params.newest === "true",
        page: Number(params.page) || 1,
        limit: Number(params.limit) || 3
    })

    return (
    <>
        <H1>Recent Posts</H1>

        <div className='mt-8'>
            Tags:&nbsp;
            {availableTags.map((tag, index) =>
                <span className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300" key={index}>
                    <Link href={`/posts?tag=${tag.replace('#','')}`}> {tag} </Link>
                </span>
            )}
        </div>

        <div className='mt-8'>
            Display&nbsp;
            {params.newest === "true" && <Link href={`/posts?newest=false`}>Oldest Posts</Link>}
            {(params.newest === "false" || !params.newest) && <Link href={`/posts?newest=true`}>Newest Posts</Link>}
        </div>

        <ul className='mt-8 space-y-4'>
            {posts.posts.map(post =>
                <li key={post.slug}> 
                    <Link href={`/posts/${post.slug}`}
                        className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        {post.frontmatter.title}
                    </Link>
                    <div className="text-gray-400 text-sm mt-2">{post.frontmatter.date}</div>
                </li>
            )}
        </ul>

        <div className='mt-8'>
            <PaginationComponent pageCount={posts.pageCount}/>
        </div>
    </>
    )
}
import { notFound } from "next/navigation"
import { getPost as getPostsUncached } from "@/lib/posts"
import {cache} from 'react'
import Link from "next/link"

type PostsPageProps = {
  params: {
    slug: string
  }
}

const getPost = cache(
  async (slug : string) => await getPostsUncached(slug)
)

export async function generateMetadata(
  { params }: PostsPageProps){

    const post = (await params).slug
  try {
    const { frontmatter } = await getPost(post)

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      tags: frontmatter.tags
    }
  } catch {
    return {}
  }
}

export default async function PostPage({ params }: PostsPageProps) {
  let post
  const slug = (await params).slug

  try {
    post = await getPost(slug)
  }catch {
    notFound()
  }
  
    return (
      <article className="prose dark:prose-invert">
        <div className="mb-8 flex space-x-2">
          {
            post.frontmatter.tags.map((tag, index) =>(
              <Link key={index} href={`/posts?tag=${tag.replace('#','')}`}>
              #{tag}</Link>
            ) )
          }
        </div>
        {post.content}
      </article>
    )
}

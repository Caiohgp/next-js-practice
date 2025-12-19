import { notFound } from "next/navigation"
import { getPost } from "@/lib/posts"

type PostsPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: PostsPageProps){

    const post = (await params).slug
  try {
    const { frontmatter } = await getPost(post)

    return {
      title: frontmatter.title,
      description: frontmatter.description,
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
        {post.content}
      </article>
    )
}

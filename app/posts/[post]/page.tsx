import { notFound } from "next/navigation"

type PostsPageProps = {
  params: {
    post: string
  }
}

export default async function PostPage({ params }: PostsPageProps) {

  const postId = (await params).post

  const response = await fetch(`http://localhost:3001/posts/${postId}`)

  if (!response.ok) notFound()

  const blogPost = await response.json()

  return (
    <>
      <h2 className="text-4xl mb-5">{blogPost.title}</h2>
      <p>{blogPost.text}</p>
      <span>{blogPost.views}</span>
    </>
  )
}
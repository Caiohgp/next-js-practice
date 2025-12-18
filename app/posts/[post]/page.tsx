import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import path from "path"
import fs, { readFileSync } from 'fs'

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

  const file = fs.readFileSync(
    path.join('content',`${postId}.mdx`)
  )

  return (
    <>
      <article className="prose dark:prose-invert">
        <MDXRemote source={file} />
      </article>
      
      <h2 className="text-4xl mb-5">{blogPost.title}</h2>
      <p>{blogPost.text}</p>
      <span>{blogPost.views}</span>
    </>
  )
}
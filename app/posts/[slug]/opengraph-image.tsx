import { ImageResponse } from 'next/og'

export const runtime = 'edge' // required
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

type Props = {
  params: {
    post: string
  }
}

export default async function OpenGraphImage({ params }: Props) {
  const postId = (await params).post

  const response = await fetch(`http://localhost:3001/posts/${postId}`)
  const post = await response.json()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0f172a, #020617)',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: 64, marginBottom: 20 }}>
          {post.title}
        </h1>

        <p style={{ fontSize: 32, opacity: 0.8 }}>
          {post.text}...
        </p>
      </div>
    ),
    size
  )
}
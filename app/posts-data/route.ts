import { getPostsList } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const posts = await getPostsList({
    tags: [],
    newest: true,
    page: Number(searchParams.get('page')) || 1,
    limit: Number(searchParams.get('limit')) || 3
  })

  return NextResponse.json(posts)
}
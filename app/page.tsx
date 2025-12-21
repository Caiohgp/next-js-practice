'use client'

import { useEffect, useState } from "react"
import Cards from "@/components/cards"
import PostListLoading from "@/components/postListLoading"

type Post = {
  frontmatter: any
  slug: string
  parsedDate: number
}

export default function Home() {
  const [numberOfCards, setNumberOfCards] = useState(3)
  const [names, setNames] = useState(['Caio é o papai','Luana é a mamãe','Davi é o neném'])
  const [isVisible, setIsVisible] = useState(true)
  const [textShown, setTextShown] = useState('Hello World')
  const [posts, setPosts] = useState<{ posts: Post[]; pageCount: number } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/posts-data?limit=3')
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const handleClickVisibility = () => {
    setTextShown(textShown === 'Hello World' ? 'Bye World' : 'Hello World')
    setIsVisible(!isVisible)
  }

  const handleClickNumberOfCards = () => {
    setNumberOfCards(numberOfCards + 1)
    setNames([...names, 'Sou um programador melhor do que o papai'])
  }

  
  const postCards = posts?.posts.map((card, index) => (
    <Cards key={index}>{card.frontmatter.title}</Cards>
  ))
  

  const cards = names.map((card, index) => (
    <Cards key={index}>{card}</Cards>
  ))

  return (
    <div className="space-y-5">
      <h1>{textShown}</h1>
      
      <h2>Posts</h2>
      {loading && <PostListLoading/>}

      {isVisible && postCards}

      <hr/>

      <h2>Cards do Davi</h2>

      {isVisible && cards}
      
      <div className="flex space-x-4">
        <button className="border p-2" onClick={handleClickVisibility}>
          {isVisible ? 'Hide' : 'Show'}
        </button>

        <button className="border p-2" onClick={handleClickNumberOfCards}>
          Add Card
        </button>
      </div>      
    </div>
  )
}
import Cards from "@/components/cards"

export default async function ProjectList() {
     const response = await fetch(
        'http://localhost:3001/posts'
        //,{next: { revalidate: 3 }}
    )
    const posts = await response.json()

    return (
        <ul className="grid md:grid-cols-2 gap-3">
        {posts.map((post : any) => (
            
            <li key={post.id} >
                <Cards className="max-h-21 overflow-hidden">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl">
                            Título: {post.title}
                        </div>
                        <div>
                            📖{post.views}
                        </div>

                    </div>
                    <div>
                        <div className="mt-2">
                            Descrição: {post.description}
                        </div>
                    </div>
                </Cards>  
            </li>
        ))}
        </ul>
    )
}
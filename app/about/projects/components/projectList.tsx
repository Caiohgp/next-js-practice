import Cards from "@/components/cards"
import PaginationComponent from "@/components/pagination"


export default async function ProjectList({page} :{page : number}) {
     const response = await fetch(
        'http://localhost:3001/posts'
        ,{next: { revalidate: 3000 }}
    )
    const repos = await response.json()

    const pageCount : number = Math.ceil(repos.length / 10);

    const startIndex = (page - 1) * 10
    const endIndex = page * 10

    const paginatedRepos = repos.slice(startIndex,endIndex)

    return (
        <div>
            <ul className="grid md:grid-cols-2 gap-3">
            {paginatedRepos.map((repo : any) => (
                
                <li key={repo.id} >
                    <Cards className="max-h-21 overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl">
                                Título: {repo.name}
                            </div>
                            <div>
                                📖{repo.views}
                            </div>

                        </div>
                        <div>
                            <div className="mt-2">
                                Descrição: {repo.description}
                            </div>
                        </div>
                    </Cards>  
                </li>
            ))}
            </ul>
            <PaginationComponent pageCount={pageCount}/>
        </div>
    )
}
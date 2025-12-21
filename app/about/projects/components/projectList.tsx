import Cards from "@/components/cards"

export default async function ProjectList() {
     const response = await fetch(
        'https://api.github.com/users/caiohgp/repos'
        //,{next: { revalidate: 3 }}
    )
    const repos = await response.json()

    return (
        <ul className="grid md:grid-cols-2 gap-3">
        {repos.map((repo : any) => (
            
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
    )
}
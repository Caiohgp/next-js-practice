'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function PaginationComponent({pageCount} : {pageCount : number}){
    
    const path = usePathname()
    const params = useSearchParams()

    console.log(params)

    const pages = []
    for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
    }

    return (
    <ul className="flex justify-center space-x-4 font-mono text-lg">
        {pages.map(pageNumber => {
        return (<li key={pageNumber}>
            {pageNumber}
        </li>)
        })}
    </ul>
    )

}
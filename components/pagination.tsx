'use client'

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function PaginationComponent({pageCount} : {pageCount : number}){
    
    const pathname = usePathname()
    const searchParams = useSearchParams()
    
    const currentPage = Number(searchParams.get('page')) || 1

    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const params = new URLSearchParams(searchParams.toString())
    params.set('page',currentPage.toString())

    return (
        <ul className="flex justify-center space-x-4 font-mono text-lg my-2">
            {pages.map(pageNumber => {
                const isActive = pageNumber === currentPage
                const params = new URLSearchParams(searchParams)
                params.set('page', pageNumber.toString())

                return (
                    <li key={pageNumber}>
                        
                        <Link href={`${pathname}?${params.toString()}`}
                            className={`px-3 py-1 rounded transition-colors ${
                                isActive 
                                    ? 'bg-gray-200 text-gray-700 font-bold' 
                                    : 'hover:bg-gray-200 text-gray-700'
                            }`}>
                            {pageNumber}    
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
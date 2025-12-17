'use client'

export default function AboutLayout({children} : any){
    return (
        <div>
            <div>{children}</div>

            <div className="text-3x1 mt-10">Also, check this!</div>
            <div>Recommendation 1</div>
            <div>Recommendation 2</div>
            <div>Recommendation 3</div>
        </div>
    )
}
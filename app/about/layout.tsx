import PostPreview from "@/components/postPreview"

export default async function AboutLayout({children} : {children: React.ReactNode}) {

    return (
        <div>
            <div>{children}</div>

            <div className="mt-10">
                <h3>Also, check my most recent posts</h3>
                <PostPreview/>
            </div>
        </div>
    )
}
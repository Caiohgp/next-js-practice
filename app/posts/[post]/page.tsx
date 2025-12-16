import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

type PostsPageProps = {
    params: {
        post: string;
    };
};

export default async function PostPage({params}: PostsPageProps){

    const postId = await params

    console.log(postId.post)
    const response = await fetch(`http://localhost:3001/posts/${postId.post}`)
    const blogPost = await response.json()

    if(postId.post >= '7')
        notFound()

    return <>
        <h2 className="text-4xl mb-5">{blogPost.title}</h2>
        <p>{blogPost.text}</p>
        {blogPost.views}
    </>;

}
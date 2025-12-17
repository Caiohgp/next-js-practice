import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { title } from "process";

export const dynamic = 'force-dynamic';

type PostsPageProps = {
    params: {
        post: string;
    };
};

export default async function PostPage({params}: PostsPageProps){

    const postId = (await params)

    console.log(postId)
    const response = await fetch(`http://localhost:3001/posts/${postId}`)
    const blogPost = await response.json()

    if(postId.post >= '7')
        notFound()

    return <>
        <h2 className="text-4xl mb-5">{blogPost.title}</h2>
        <p>{blogPost.text}</p>
        {blogPost.views}
    </>;

}
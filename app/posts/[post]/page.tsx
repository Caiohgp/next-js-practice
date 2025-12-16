export const dynamic = 'force-dynamic';

type PostsPageProps = {
    params: {
        post: string;
    };
};

export default async function PostPage({params}: PostsPageProps){

    const response = await fetch('http://localhost:3001/posts/2')
    const blogPost = await response.json()

    return <>
        <h2 className="text-4xl mb-5">{blogPost.title}</h2>
        <p>{blogPost.text}</p>
        {blogPost.views}
    </>;

}
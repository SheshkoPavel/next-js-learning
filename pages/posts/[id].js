import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function Post({ post }) {
    const { query } = useRouter();

    return (
        <MainContainer keywords={`post with id=${query.id} is shown`} title={`Пост ${query.id}`}>
            <div>
                <h1>Post with id: { query.id }</h1>
                <h2>Title: { post.title }</h2>
            </div>
        </MainContainer>
    )
};

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: (post.id).toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}

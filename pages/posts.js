import Link from "next/link";
import MainContainer from "../components/MainContainer";

export default function Post({ posts }) {
    const postsJSX = posts.map(el =>
        <li key={el.id} >
            <Link href={`/posts/${el.id}`}>
                { el.title }
            </Link>
        </li>)

    return (
        <MainContainer keywords={"Posts list"} title={"Список постов"}>
            <div>
                <h1>Posts using getStaticPaths</h1>
            </div>
            <div>
                { postsJSX }
            </div>
        </MainContainer>
    );
  }


export async function getStaticProps(context) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    // Pass post data to the page via props
    return { props: { posts } }
}
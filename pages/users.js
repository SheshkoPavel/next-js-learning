import Link from "next/link";
import NavbarContainer from "../components/NavbarContainer";

const Users = ({users}) => {
    const usersJSX = users.map(el =>
        <li key={el.id} >
            <Link href={`/users/${el.id}`} legacyBehavior>
            <a>{ el.name }</a>
            </Link>
        </li>
        )

    return (
        <NavbarContainer keywords={"users page"} title={"users page"}>
            <h1>Users list</h1>
            <div>
                { usersJSX }
            </div>
        </NavbarContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return {
      props: {users}, // will be passed to the page component as props
    }
  }

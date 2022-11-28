import { useRouter } from "next/router";
import NavbarContainer from "../../components/NavbarContainer";
import styles from "../../styles/User.module.scss";

export default function User({user}) {
    const { query } = useRouter();

    return (
        <NavbarContainer keywords={"user page"} title={user.name}>
            <h1>User with id: { query.id }</h1>
            <h2>Name: { user.name }</h2>
        </NavbarContainer>
    )
};

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
      props: {user}, // will be passed to the page component as props
    }
  }
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/users.module.css"

const Users = ({users}) => {
    const usersJSX = users.map(el =>
        <li className={styles.li} key={el.id} >
            <Link className={styles.link} href={`/users/${el.id}`}>
                { el.name }
            </Link>
        </li>
        );

    return (
        <MainContainer keywords={"Users list"} title={"Список юзеров"}>
            <h1>Users list</h1>
            <div>
                { usersJSX }
            </div>
        </MainContainer>
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

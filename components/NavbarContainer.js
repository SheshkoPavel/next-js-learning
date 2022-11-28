import Head from "next/head";
import A from "./A";

const NavbarContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meata keywords={`next js learning + ${keywords}`}></meata>
                <title>Next.js learning {title}</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Main"/>
                <A href={'/users'} text="Users list"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
            {`
                .navbar {
                    background: lightblue;
                    padding: 15px;

                }
            `}
        </style>
        </>
);
};

export default NavbarContainer;
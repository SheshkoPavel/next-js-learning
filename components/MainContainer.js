import Head from "next/head";
import Navbar from "./Navbar";

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={keywords}></meta>
                <title>{title}</title>
            </Head>
            <Navbar />
            <div>
                {children}
            </div>

            {/* <style jsx> для стилей внутри компонент
            {`
                .navbar {
                    background: lightblue;
                    padding: 15px;

                }
            `}
            </style> */}
        </>
);
};

export default MainContainer;
import Navbar from "./Navbar";

const MainContainer = ({ children, keywords }) => {
    return (
        <>
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
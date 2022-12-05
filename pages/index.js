import Head from "next/head";
import Image from "next/image";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
    <MainContainer keywords={"Main page"}>
        <h1>Main page</h1>
        <div style={{textAlign: "center", borderRadius: '30px'}}>
            <Image style={{borderRadius: '30px'}}
                src="/avat.jpg"
                width={200}
                height={200}
            />
        </div>

    </MainContainer>

    );
};

export default Index;

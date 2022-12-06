import Image from "next/image";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
    <MainContainer keywords={"Main page"} title={"Главная страница"}>
        <h1>Main page</h1>
        <div style={{textAlign: "center", borderRadius: '30px'}}>
            <Image style={{borderRadius: '30px'}}
                src="/avat.jpg"
                width={200}
                height={200}
            />
            <Image
                alt="Next.js logo"
                src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                width={1200}
                height={400}
                style={{
                maxWidth: '100%',
                height: 'auto',
                }}
            />
        </div>

    </MainContainer>

    );
};

export default Index;

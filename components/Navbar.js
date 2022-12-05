import A from "./A";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <A href={'/'} text="Main"/>
                <A href={'/users'} text="Users list"/>
                <A href={'/posts'} text="Posts"/>
            </div>
        </>
);
};

export default Navbar;
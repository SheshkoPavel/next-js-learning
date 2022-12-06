import Link from "next/link";

export default function Error() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color: "red"}}>
                404 PAGE
            </h1>
            <Link href={"/"} style={{textDecoration: "none"}}>
                Got to main page
            </Link>
        </div>
    )
}
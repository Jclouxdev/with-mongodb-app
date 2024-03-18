import Navbar from "./organisms/navbar";
import Footer from "./organisms/footer";


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={"container bg-amber-200"}>{children}</main>
            <Footer />
        </>
    )
}
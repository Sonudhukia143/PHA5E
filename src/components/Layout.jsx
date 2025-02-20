import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../styles/InitialLoader.css";
import { useEffect, useState } from "react";

export default function Layout() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3900)
    }, [])

    return (
        <>   
        {
            loading
            ?
            <div className = "intialloader">
                < h1 className = "animated-text" > PHA5E</h1 >
            </div >
            :
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    }
    </>
    )
}
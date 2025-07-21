import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header/header'
import AddAnimation from '@/components/ui/addAnimation'
import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'

const RootLayout = () => {
    const pathName = useLocation().pathname
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body")
        document.body.className = "";

        if (pathName !== "/home-two" || pathName !== "/home-three") {
            body.classList.add("dark-theme")
        }
        if (pathName === "/home-two") {
            body.classList.remove("dark-theme")
            body.classList.add("light-theme")
        }
        if (pathName === "/home-three") {
            body.classList.remove("dark-theme")
            body.classList.add("dark-theme-2")
        }
    }, [pathName])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowGoTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <ScrollRestoration />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <AddAnimation />
            {showGoTop && (
                <div className="go-top active" onClick={scrollToTop}>
                    <i className="bx bx-up-arrow-alt" />
                </div>
            )}


        </>
    )
}

export default RootLayout
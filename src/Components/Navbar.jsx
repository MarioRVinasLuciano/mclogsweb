import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import mclogo from "../Images/Logos/logo.png"; // Logo de MC

export default function NavBar() {
    const Logo = mclogo;

    const [scrollPosition, setScrollPosition] = useState(0);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (isHomepage) {
            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPosition(position);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isHomepage]);

    const navbarClass = isHomepage
        ? scrollPosition >= 100
            ? "top-0 w-[100%] fixed z-10 h-20 bg-white backdrop-blur-md px-10 sm:px-10 md:px-20 lg:px-40 text-black"
            : "top-0 w-[100%] fixed z-10 h-20 bg-slate/70 px-10 sm:px-10 md:px-20 lg:px-40  lg:text-white text-white" 
        : "top-0 w-[100%] fixed z-10 h-20 bg-gray-50 px-10 sm:px-10 md:px-20 lg:px-40 text-black";

    const hr = isHomepage  ? scrollPosition >= 100
    ? "hidden"
    : "bg-white h-0.2 w-[100%]" 
: "";

    // Hyperlinks that lead to other pages
    const Links = [
        { name: "Nosotros", link: "/nosotros" },
        { name: "Servicios", link: "/servicios" },
        { name: "Agentes", link: "/agentes" },
        { name: "Noticias", link: "/noticias" },
        { name: "Rastreo", link: "/rastreo" },
        { name: "Contacto", link: "/contacto" },
        { name: "Mi Cuenta", link: "https://my.mclogs.com/auth/login" },
    ];

    return (
        <header className={navbarClass}>
            <div className="flex md:flex items-center justify-between h-full">
                <div className="flex h-full w-auto items-center pt-2">
                    <a href="/" className="text-3xl ">
                        <p>MCLogistics</p>
                    </a>
                </div>
                <div className="flex text-2xl cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <span>
                        {
                            open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                           
                          
                        }
                    </span>
                </div>
                <ul
                    className={`lg:z-auto z-[-1] top-20 sm:top-20 md:top-20 md:h-auto md:items-center left-0 w-full lg:w-auto lg:flex lg:items-center lg:pb-0 lg:pl-0 pl-9 lg:static absolute ${open ? "bg-white lg:bg-transparent text-black" : "hidden"}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="flex-none px-4 py-4 items-center rounded-sm">
                            <Link
                                className="hover:text-gray-300 font-Encoded-Sans-Expanded md:text-md lg:text-lg"
                                to={link.link} onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <hr className={hr}></hr>
            </div>
        </header>
    );
}

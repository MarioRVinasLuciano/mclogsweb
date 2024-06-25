import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mclogo from "../Images/Logos/White5.png"; // Logo de MC
import mclogo2 from "../Images/Logos/original.png"; // Logo de MC

export default function NavBar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    const isHomepage = location.pathname === '/';
    const { t, i18n } = useTranslation();
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
            ? "top-0 w-[100%] fixed z-20 h-20 bg-white backdrop-blur-md px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black"
            : `top-0 w-[100%] fixed z-20 h-20 bg-slate/70 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40  ${open ? `bg-white text-black` : "lg:text-white text-white"}`
        : "top-0 w-[100%] fixed z-20 h-20 bg-gray-50 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black";

    const imageClass = isHomepage
        ? scrollPosition >= 100
            ? mclogo2 // Add mclogo2 when menu is open
            : `${open ? mclogo2 : mclogo}`
        : mclogo2; // Always show mclogo2 when not on homepage

    const hr = isHomepage ? scrollPosition >= 100
        ? `${open ? `bg-black h-0.2 w-[100%]` : ""}`
        : "bg-white h-0.2 w-[100%]"
        : ``;

    // Hyperlinks that lead to other pages
    const Links = [
        { name: t("us"), link: "/nosotros" },
        { name: t("services"), link: "/servicios" },
        { name: t("agents"), link: "/agentes" },
        { name: t("news"), link: "/noticias" },
        { name: t("tracking"), link: "/rastreo" },
        { name: t("contacts"), link: "/contacto" },
        { name: t("myaccount"), link: "https://my.mclogs.com/auth/login" },
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setOpen(false);
    };

    return (
        <header className={navbarClass}>
            <div className="flex md:flex items-center justify-between h-full">
                <div className="block flex-none h-full w-auto items-center justify-center pt-2">
                    <a href="/" className="text-3xl ">
                        <img className="pt-2 h-auto w-32" src={imageClass} alt="" />
                    </a>
                </div>
                <div className="flex text-2xl cursor-pointer xl:hidden" onClick={toggleMenu}>
                    <span>
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </span>
                </div>
                <ul
                    className={`xl:flex-none  xl:z-auto z-[-1] top-20 sm:top-20 xl:top-20 xl:h-auto items-center left-0 w-full xl:w-auto xl:flex xl:items-center xl:pb-0 xl:pl-0 py-8 xl:py-0 px-10 sm:px-10 md:px-20 xl:px-0 2xl:px-0 xl:static absolute ${
                        open ? "bg-white xl:bg-transparent text-black " : "hidden"
                    }`}
                >
                    {Links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.link}
                            className={`xl:hover:bg-transparent hover:bg-gray-100 flex xl:py-0 py-4 px-4 items-center rounded-md border-gray-300 cursor-pointer ${
                                activeLink === link.link ? "text-oldgold" : ""
                            }`}
                            onClick={() => handleLinkClick(link.link)}
                        >
                            <li>{link.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <hr className={hr}></hr>
            </div>
        </header>
    );
}

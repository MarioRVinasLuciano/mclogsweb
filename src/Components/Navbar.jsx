import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../Icons/menu.png"; //Icono de menu
import close from "../Icons/close.png"; //Icono de cerrar
import mclogo from "../Images/Logos/logo.png"; //Logo de MC

export default function NavBar() {
    const Logo = mclogo;

    const [scrollPosition, setScrollPosition] = useState(0);
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hyperlinks that lead to other pages
    const Links = [
        { name: "Nosotros", link: "/nosotros" },
        { name: "Servicios", link: "/servicios" },
        { name: "Agentes", link: "/agentes"},
        { name: "Noticias", link: "/noticias"},
        { name: "Rastreo", link: "/rastreo"},
        { name: "Mi Cuenta", link: "https://my.mclogs.com/auth/login"},
    ];

    return (
        <header className={`top-0 w-full sticky z-10 h-20 ${scrollPosition > 600 ? 'bg-white/80 backdrop-blur-md' : 'bg-gray/100 backdrop-blur-md'}`}>
            <div className="md:flex items-center justify-between md:px-10 px-7 h-full">
                <div className="flex md:flex-none h-full w-42 items-center pt-2">
                    <a href="/" className="text-3xl font-pirulen ">
                        <img className="h-16 w-42 pb-2" src={Logo} alt="" />
                    </a>
                </div>
                <div className="text-2xl absolute right-8 top-8 cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <span>
                        <img className="h-5 w-5" src={open ? close : menu} alt="Menu Icon" />
                    </span>
                </div>
                <ul
                    className={`lg:z-auto z-[-1] md:top-24 sm:top-24 md:min-h-fit md:items-center left-0  w-full lg:w-auto lg:flex lg:items-center lg:pb-0 lg:pl-0 pl-9 pb-8 lg:static absolute ${open ? "bg-white  lg:bg-transparent " : "hidden"}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="flex-none mr-6 h-full px-4 py-2 items-center my-7 hover:bg-slate-100 rounded-md">
                            <Link
                                className="hover:text-gray-500 font-quicksand md:text-md lg:text-lg"
                                to={link.link} onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

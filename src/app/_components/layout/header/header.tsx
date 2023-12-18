"use client";
import Image from "next/image";
import { headerMenu } from "./header-menu"
import Link from "next/link"
import { useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/scrollHook';
export default function Header() {



    const [menuOpen, setMenuOpen] = useState(false);
    const menuHover =
        'hover:text-primary py-2 cursor-pointer w-full text-center border-b border-[rgba(255,255,255,.05)]';

    const closeMenus = () => {
        setMenuOpen(false);
    };

    const scrollDirection = useScrollDirection();


    return (

        <div
            // onMouseLeave={() => closeMenus()}
            className={`w-full top-0 z-10 drop-shadow-md`}>

            <header className="items-center w-full md:w-auto z-10 top-0 md:py-4">
                <nav className="items-center justify-center mx-auto hidden md:flex" aria-label="Global">
                    <div className="flex lg:hidden">
                    </div>
                    <div className="flex gap-10 md: xl:">
                        {headerMenu.map((item) => (
                            <a key={item.name} href={item.href} className="primary font-normal leading-6">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block md:hidden w-full  p-4">


                    <button className="float-right pr-8" onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? (
                                <Image alt="Close Menu" height="24" width="24" src="/images/menu-icon-close.png"></Image>
                            ) : (

                                <Image alt="Menu" height="24" width="24" src="/images/menu-icon-open.png"></Image>
                            )
                        }
                    </button>
                </div>

            </header>


            {/* Mobile Container */}
            <div id="mobileMenu" className="inline-block w-full md:hidden mt-2 z-50">
                {menuOpen && (
                    <ul className="group flex flex-col items-center bg-[#154992] text-[#b1b1b1] primary">
                        <li className={menuHover} onClick={closeMenus}>
                            <Link href="/#about-us">About Us</Link>
                        </li>
                        <li className={menuHover} onClick={closeMenus}>
                            <Link href="/#our-services">Our Services</Link>
                        </li>
                        <li className={menuHover} onClick={closeMenus}>
                            <Link href="/#our-work">Our Work</Link>
                        </li>
                        <li className={menuHover} onClick={closeMenus}>
                            <Link href="/#contact-us">Contact Us</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
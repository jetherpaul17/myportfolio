import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // scroll
    const smoothScroll = (e, target) => {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto w-full px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
                />

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-900"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-wrap items-center justify-center gap-15 text-gray-900 font-medium text-sm">
                    <li>
                        <a
                            href="#services"
                            onClick={(e) => smoothScroll(e, "#services")}
                            className="bg-orange-600 text-white px-4 py-1 rounded-md hover:bg-orange-700 transition"
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            href="#home"
                            onClick={(e) => smoothScroll(e, "#home")}
                            className="nav-link hover:text-orange-600"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#experiences"
                            onClick={(e) => smoothScroll(e, "#experiences")}
                            className="nav-link hover:text-orange-600"
                        >
                            Experiences
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            onClick={(e) => smoothScroll(e, "#projects")}
                            className="nav-link hover:text-orange-600"
                        >
                            Projects
                        </a>
                    </li>
                </ul>

                {/* Phone + Icon */}
                <div className="hidden md:flex text-gray-900 items-center gap-2 font-medium text-sm">

                    +63-915-751-1119

                    <svg
                        onClick={() => {
                            document.querySelector("#contact")?.scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="
                            w-6 h-6 cursor-pointer
                            transition-all duration-300
                            hover:drop-shadow-[0_0_15px_rgba(255,115,0,1)]
                            hover:text-orange-600
                            active:scale-90
                        "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 16.5h3"
                        />
                    </svg>

                </div>

            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-200 shadow-lg">
                    <ul className="flex flex-col items-center py-4 text-gray-900 font-medium text-sm">

                        <li>
                            <a
                                href="#services"
                                onClick={(e) => smoothScroll(e, "#services")}
                                className="bg-orange-600 text-white px-4 py-1 rounded-md hover:bg-orange-700 transition"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="#home"
                                onClick={(e) => smoothScroll(e, "#home")}
                                className="nav-link hover:text-orange-600 py-2 block"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experiences"
                                onClick={(e) => smoothScroll(e, "#experiences")}
                                className="nav-link hover:text-orange-600 py-2 block"
                            >
                                Experiences
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={(e) => smoothScroll(e, "#projects")}
                                className="nav-link hover:text-orange-600 py-2 block"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>

                    <div className="text-center py-4 text-gray-900 font-medium text-sm">
                        +63-915-751-1119

                        <svg
                            onClick={() => {
                                document.querySelector("#contact")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="
                                w-6 h-6 inline ml-2 cursor-pointer
                                transition-all duration-300
                                hover:drop-shadow-[0_0_15px_rgba(255,115,0,1)]
                                hover:text-orange-600
                                active:scale-90
                            "
                        >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 16.5h3" />
                        </svg>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

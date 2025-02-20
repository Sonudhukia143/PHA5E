import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-black">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                onClick={toggleNav}
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset hover:cursor-pointer"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>

                                <svg className={isOpen ? "hidden size-6" : "block size-6"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className={isOpen ? "block size-6" : "hidden size-6"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className={isOpen ? `hidden` : `flex flex-1 items-center justify-start sm:items-stretch sm:justify-start`}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-black text-white" : "text-gray-300 hover:text-white"}`
                                }
                            >
                                <img src="/learn.svg"></img>
                            </NavLink>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/vision"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-black text-white" : "text-white hover:bg-black hover:text-white"}`
                                        }
                                    >
                                        Our Vision
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-black text-white" : "text-white hover:bg-black hover:text-white"}`
                                        }
                                    >
                                        Our Team
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/project"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-black text-white" : "text-white hover:bg-black hover:text-white"}`
                                        }
                                    >
                                        Our Projects
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-black text-white" : "text-white hover:bg-black hover:text-white"}`
                                        }
                                    >
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute inset-0 flex flex-col justify-center bg-black text-white w-full h-screen 
                            transition-all duration-1000 ease-in ${isOpen ? "slideDown" : "slideUp"} sm:hidden`}
                    id="mobile-menu"
                >
                    <button
                        onClick={toggleNav}
                        type="button"
                        className="relative inline-flex justify-end rounded-md p-0 text-gray-400 hover:cursor-pointer focus:ring-white focus:outline-hidden focus:ring-inset"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <svg className={isOpen ? "block size-12 mt-6 mx-6" : "hidden size-12"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <NavLink
                        to="/"
                        className="block text-6xl sm:text-6xl font-bold w-full text-start py-6 px-6"
                        onClick={toggleNav}
                        id={isOpen ? `popUp` : ""}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/vision"
                        className="block text-6xl sm:text-6xl font-bold w-full text-start py-6 px-6"
                        onClick={toggleNav}
                        id={isOpen ? `popUp` : ""}
                    >
                        OUR VISION
                    </NavLink>
                    <NavLink
                        to="/team"
                        className="block text-6xl sm:text-6xl font-bold w-full text-start py-6 px-6"
                        onClick={toggleNav}
                        id={isOpen ? `popUp` : ""}
                    >
                        OUR TEAM
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="block text-6xl sm:text-6xl font-bold w-full text-start py-6 px-6"
                        onClick={toggleNav}
                        id={isOpen ? `popUp` : ""}
                    >
                        OUR PROJECTS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="block text-6xl sm:text-6xl font-bold w-full text-start py-6 px-6"
                        onClick={toggleNav}
                        id={isOpen ? `popUp` : ""}
                    >
                        CONTACT US
                    </NavLink>
                </div>


            </nav>



        </>
    );
}
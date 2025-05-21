import React from 'react';
import Image from 'next/image';
import logo from "../../../public/logo.svg"

const Navbar = () => {

    const Navbar =
        <>
            <li><a href ="/">_home_</a></li>
            <li><a href ="/login">_log_in_</a></li>
            <li><a href="/signup">_sign_up_</a></li>
        </>

    return (
        <div>
            <div className="navbar border-b border-b-foreground shadow-sm">
                <div className="navbar-start">
                    <a className="text-3xl ml-1">
                        <Image
                            priority
                            src={logo}
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
                <div className="dropdown navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-[45%] md:mt-[25%] w-52 p-2 shadow bg-black">
                        {Navbar}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
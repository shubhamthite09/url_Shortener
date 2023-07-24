
import React from 'react';
import { useSelector} from "react-redux";

const Navbar = () => {
    const isAuth = useSelector((store)=>store.isAuth);
    //console.log(isAuth);
    return (
        <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl  hover:text-blue-200 transition duration-300 cursor-pointer">
        <a
            href="/"
            >
            My Website
        </a>
        </div>
        <div className="flex space-x-4">
            <a
            href="/dash"
            className="text-white hover:text-blue-200 transition duration-300 cursor-pointer"
            >
            Dashboard
            </a>
            {isAuth ? <button className="text-white hover:text-blue-200 transition duration-300 cursor-pointer">Logout</button> : <div className="flex space-x-4">
            <a
            href="/reg"
            className="text-white hover:text-blue-200 transition duration-300 cursor-pointer"
            >
            Sign Up
            </a>
            <a
            href="/log"
            className="text-white hover:text-blue-200 transition duration-300 cursor-pointer"
            >
            Login
            </a>
            </div>}
        </div>
        </nav>
    );
};

export default Navbar;
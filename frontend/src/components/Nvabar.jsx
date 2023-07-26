import React from 'react';
import { useSelector,useDispatch} from "react-redux";
import logo from "../assets/logo.png";
import { logoutAction } from '../redux/auth/action';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
    console.log(isAuth);
    const handelLogout = () =>{
        dispatch(logoutAction());
    }
    return (
        <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl  hover:text-blue-200 transition duration-300 cursor-pointer">
        <a
            href="/"
            >
            <img
            src={logo}
            alt="URL Shortener Logo"
            className="rounded-full shadow-md h-10 w-10"
        />
        </a>
        </div>
        <div className="flex space-x-4">
            <a
            href="/dash"
            className="text-white hover:text-blue-200 transition duration-300 cursor-pointer"
            >
            Dashboard
            </a>
            {isAuth ? <button className="text-white hover:text-blue-200 transition duration-300 cursor-pointer" onClick={handelLogout}>Logout</button> : <div className="flex space-x-4">
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
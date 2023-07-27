import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from "react-redux";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { loginAction } from '../redux/auth/action';

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        signupFunction(name,email,password,"normal");
    }

    const signupFunction = async(name,email,password,wayOfSignup) =>{
        console.log(wayOfSignup);
        try{
            const responce = await axios.post(`${process.env.REACT_APP_HOST_URL}user/register`,{name,email,password});
            if(!responce.data.isError){
                alert(responce.data.Msg);
                console.log(wayOfSignup);
                if(wayOfSignup === "auth"){
                    navigate("/dash")
                }else{
                    navigate("/log")
                }
            }else{
                alert(responce.data.Msg);
                if(wayOfSignup == "auth"){
                    return navigate("/dash")
                }else{
                    return navigate("/log")
                }
            }
        }catch(e){
            console.log(e.response.data.Msg);
            if(wayOfSignup == "auth"){
                console.log("ok from the error");
                dispatch(loginAction())
                navigate("/dash")
            }else{
                alert(e.response.data.Msg);
                navigate("/log")
            }
            
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg drop-shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handelSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                User Name
                </label>
                <input
                type="text"
                id="name"
                onChange={(e)=>{setName(e.target.value)}}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                placeholder="Your Name Here"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                placeholder="example@example.com"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
                </label>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                />
            </div>
            <div className="mb-4 pl-1">
            <input
                type="checkbox"
                id="showPasswordToggle"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="h-4 w-4"
            />
            <label htmlFor="showPasswordToggle" className="ml-1">
                Show Password
            </label>
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-600"
            >
                Sign Up
            </button>
            </form>
            <p className="mt-6 text-center text-gray-600">Or sign up with:</p>
            <div className="flex justify-center mt-2">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                    console.log(decoded.email,decoded.name);
                    signupFunction(decoded.name,decoded.email,process.env.REACT_APP_DUMMY_PASSWORD,"auth");
                }}
                onError={() => {
                    console.log('Signup Failed');
                    alert('Signup Failed');
                }}/>
            </div>
        </div>
        </div>
    );
    };

export default Signup;

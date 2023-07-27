import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import axios from "axios";
import { loginAction } from '../redux/auth/action';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        LoginFunction(email,password);
    };

    const LoginFunction = async(email,password)=>{
        try{
            const responce = await axios.post(`${process.env.REACT_APP_HOST_URL}user/login`,{email, password});
            console.log(responce);
            if(!responce.data.isError){
                dispatch(loginAction(responce.data.Token))
                alert(responce.data.Msg);
                navigate("/dash")
            }else{
                alert(responce.data.Msg);
            }
        }catch(e){
            console.log(e.message);
            console.log(e.response.data.Msg);
            alert(e.response.data.Msg);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg drop-shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Log In</h2>
            <form onSubmit={handelSubmit}>
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
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-600 mb-2"
            >
                Log In
            </button>
            <button
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-600" onClick={()=>{}}
            >
                Create An Account
            </button>
            </form>
            <p className="mt-6 text-center text-gray-600">Or Log In with:</p>
            <div className="flex justify-center mt-2">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                    console.log(decoded.email);
                    LoginFunction(decoded.email,process.env.REACT_APP_DUMMY_PASSWORD);
                }}
                onError={() => {
                    console.log('Login Failed');
                    alert('Login Failed');
                }}/>
            </div>
        </div>
        </div>
    );
}

export default Login
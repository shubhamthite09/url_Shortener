import React,{useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import { addUrl } from '../redux/UrlReducer/action';
import {getFromInLocal} from "../utils/localStorege"

const Urlcreate = () => {
    const [link,setLink] = useState("");
    const dispatch = useDispatch();
    const handelAdd = async(e)=>{
        e.preventDefault();
        try{
            const responce = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_HOST_URL}url/`,
                headers:{
                    "Authorization":`Bearer ${getFromInLocal('Url_Token')}`
                },
                data:{
                    url:link
                }
            });
            console.log(responce);
            if(!responce.data.isError){
                alert("Created Successfully");
                setLink("")
                dispatch(addUrl(responce.data.Msg))
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
        <form className="flex mt-4 p-3 m-5" onSubmit={handelAdd}>
            <input
                type="text"
                onChange={(e)=>{setLink(e.target.value)}}
                placeholder="Enter URL to shorten"
                className="flex-grow border rounded-l-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
                Shorten
            </button>
        </form>
    );
};

export default Urlcreate;
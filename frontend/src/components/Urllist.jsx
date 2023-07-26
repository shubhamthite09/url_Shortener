import React,{useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import { newState,deleteUrl } from '../redux/UrlReducer/action';
import {getFromInLocal} from "../utils/localStorege";

const UrlList = () => {
    const urllist = useSelector((store)=>store.UrlReducer.urls);
    console.log(urllist);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        getUrlList();
    },[])

    const getUrlList = async()=>{
        try{
            const responce = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_HOST_URL}url/getAnalytics`,
                headers:{
                    "Authorization":`Bearer ${getFromInLocal('Url_Token')}`
                }
            });
            console.log(responce);
            if(!responce.data.isError){
                dispatch(newState(responce.data.msg));
            }else{
                alert("something went wrong please try again")
            }
        }catch(e){
            console.log(e);
        }
    }

    const handelRedirecttoAnlize = (id)=>{
        navigate(`/getReport/${id}`);
    }

    const handelDelete = async(id)=>{
        try{
            const responce = await axios({
                method: 'DELETE',
                url: `${process.env.REACT_APP_HOST_URL}url/delete`,
                headers:{
                    "Authorization":`Bearer ${getFromInLocal('Url_Token')}`
                },
                data:{
                    id:id
                }
            });
            console.log(responce);
            if(!responce.data.isError){
                alert("ok");
                dispatch(deleteUrl(id))
            }else{
                alert("Something went wrong please try again")
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className="mt-4 p-3 m-5">
        {urllist.map((url) => (
            <div key={url._id} className="bg-white p-2 my-1 border rounded flex justify-between">
                <div className='p-2'>
                    <p className='pb-3'>
                        Original URL :  <a href={url.redirectURL} target={"_blank"}>{url.redirectURL}</a>
                    </p>
                    <p>
                        Short URL  :  <a href={`${process.env.REACT_APP_HOST_URL}url/link/${url.shortId}`} target={"_blank"} className='text-blue-500'>{url.shortId}</a>
                    </p>
                </div>
                <div>
                    <button className='m-1 p-3 rounded text-black bg-orange-300' onClick={()=>{handelRedirecttoAnlize(url._id)}} >Analytics</button>
                    <button className='m-1 p-3 rounded text-white bg-red-500' onClick={()=>{
                        handelDelete(url._id);
                    }}>Delete</button>
                </div>
            </div>
        ))}
        </div>
    );
};

export default UrlList;
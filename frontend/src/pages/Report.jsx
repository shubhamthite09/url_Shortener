import React from 'react'
import {useParams} from "react-router-dom";
import UrlInfo from '../components/UrlInfo';
import Navbar from '../components/Nvabar';
import Fotter from '../components/Fotter';
import { useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

function Report() {
    const {id} = useParams();
    const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
    if(!isAuth) {
        return <Navigate to={"/log"}/>
    }
return (
    <div>
        <Navbar/>
        <br/>
        <UrlInfo id={id}/>
        <br/>
        <Fotter />
    </div>
    )
}

export default Report


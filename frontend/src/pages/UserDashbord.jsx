import React from 'react'
import Navbar from '../components/Nvabar'
import Urlcreate from '../components/Urlcreated';
import UrlList from '../components/Urllist';
import Fotter from '../components/Fotter';
import { useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

function UserDashbord() {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
  if(!isAuth) {
    return <Navigate to={"/log"}/>
  }
  return (
    <div>
        <Navbar/>
        <br/>
        <Urlcreate/>
        <br/>
        <UrlList />
        <br />
        <Fotter />
    </div>
  )
}

export default UserDashbord
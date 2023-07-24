import React from 'react'
import Navbar from '../components/Nvabar'
import Urlcreate from '../components/Urlcreated';
import UrlList from '../components/Urllist';
import Fotter from '../components/Fotter';

function UserDashbord() {
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
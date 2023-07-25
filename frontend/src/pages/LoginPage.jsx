import React from 'react'
import Navbar from '../components/Nvabar';
import Login from '../components/Login';
import Fotter from '../components/Fotter';

function LoginPage() {
  return (
    <div>
        <Navbar/>
        <br/>
        <Login />
        <br />
        <Fotter />
    </div>
  )
}

export default LoginPage
import React from 'react'
import Navbar from '../components/Nvabar'
import Signup from '../components/Signup';
import Fotter from '../components/Fotter';

function SignupPage() {
  return (
    <div>
        <Navbar/>

        <Signup />
        <br />
        <Fotter />
    </div>
  )
}

export default SignupPage
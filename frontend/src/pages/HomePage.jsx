import React from 'react'
import Navbar from '../components/Nvabar';
import Home from '../components/Home';
import Fotter from '../components/Fotter';


function HomePage() {
  return (
    <div>
        <Navbar/>
        <Home />
        <Fotter />
    </div>
  )
}

export default HomePage
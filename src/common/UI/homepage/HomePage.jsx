import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import WeProvide from './weprovide/indexx.js'
import Hero from './Hero.jsx'
import About from './about/About.jsx'
import Middle from './Middle.jsx'

const Home = () => {
  return (
    <div className="w-full" >
      <Navbar/>
      <Hero/>
      <About/>
      <WeProvide/>
      <Middle/>
    </div>
  )
}

export default Home

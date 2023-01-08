import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import WeProvide from './weprovide/indexx.js'
import Hero from './Hero.jsx'
import About from './about/About.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <WeProvide/>
    </div>
  )
}

export default Home

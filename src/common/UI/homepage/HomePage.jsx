import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Hero from './Hero.jsx'
import About from '../about/About.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import ServicesSection from './ServicesSection'
import Footer from '../components/Footer'
import BeforeAfterSection from './BeforeAfterSection'
import HeroSection from './HeroSection'
import NavDrawer from '../components/NavDrawer'

const HomePage = () => {

  return (
    <main>
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />

        <HeroSection/>

          <BeforeAfterSection/>

         <ServicesSection/>

         
          <Footer/>
      </div>
      <NavDrawer/>
    </div>
  </main>
  )
}

export default HomePage
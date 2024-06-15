import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import ServicesSection from './ServicesSection'
import Footer from '../components/Footer'
import BeforeAfterSection from './BeforeAfterSection'
import HeroSection from './HeroSection'

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
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-5 no-underline rounded-box">
          {/* Sidebar content here */}
          <div className="mt-10"></div>
          <div className="bg-gradient-to-br from-[var(--bg-gradient-start-light)] to-[var(--bg-gradient-end-light)] dark:from-[var(--bg-gradient-start-dark)] dark:to-[var(--bg-gradient-end-dark)] rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold text-[var(--text-color-light)] dark:text-[var(--text-color-dark)]">Welcome to DentalCare!</h2>
      <p className="text-md text-[var(--text-muted-color-light)] dark:text-[var(--text-muted-color-dark)] mt-1">Your journey to a brighter smile starts here.</p>
      <div className="flex items-center justify-start mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-5 18.54V22a1 1 0 001.5.86l2.5-1.45a4 4 0 014 0l2.5-1.45A1 1 0 0017 22v-1.46A10 10 0 0012 2zM12 6a4 4 0 110 8 4 4 0 010-8z" />
        </svg>
        <span className="font-semibold">Diagnosis</span>
      </div>
    </div>
          <ul className="no-underline list-none space-y-2 p-0 m-0 w-full">
            <li className="w-full items-center">
              <Link href="/">
                <div className="w-full py-2">
                  Home
                </div>
              </Link>
            </li>

            <li className="w-full items-center">
              <Link href="/">
                <div className="w-full py-2">
                  About
                </div>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </main>
  )
}

export default HomePage
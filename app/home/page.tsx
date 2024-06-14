import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const HomePage = () => {
  const avatar = '/images/avatar.svg'
  return (
    <main>
        <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
                    <Navbar />
                   
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-5 no-underline rounded-box">

          {/* Sidebar content here */}
          <div className="mt-10"></div>

          
          <div className="bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
              <h2 className="text-xl font-bold text-white">Welcome to DentalCare!</h2>
              <p className="text-sm text-gray-100 mt-1">Your journey to a brighter smile starts here.</p>
              <div className="flex items-center justify-start mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-5 18.54V22a1 1 0 001.5.86l2.5-1.45a4 4 0 014 0l2.5 1.45A1 1 0 0017 22v-1.46A10 10 0 0012 2zM12 6a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
                Diagnosis
              </div>
            </div>

            <li className="items-center">
           

         <li>
          <Link href={"/"} className="cursor-pointer text-center">
          <div className="">
            Home
          </div>
          </Link>
            </li>

              
            </li>

        </ul>
      </div>
    </div>

    </main>
  )
}

export default HomePage
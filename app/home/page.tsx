import React from 'react'
import Navbar from '../components/Navbar'

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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline rounded-box">
          {/* Sidebar content here */}
         <li className="text-center">
              <a className="cursor-pointer">Home</a>
            </li>
        </ul>
      </div>
    </div>

    </main>
  )
}

export default HomePage
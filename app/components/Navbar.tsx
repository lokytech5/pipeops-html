import React from 'react'


const Navbar = () => {
    const avatar = '/images/avatar.svg'
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="navbar bg-accent rounded-lg shadow-lg overflow-hidden mx-auto">
        <label htmlFor="my-drawer-3" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Lokosman</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a className="cursor-pointer">Home</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={avatar} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
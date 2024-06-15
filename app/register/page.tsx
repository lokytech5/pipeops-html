import React from 'react'
import LayoutContainer from '../components/LayoutContainer'

const RegisterPage = () => {

    const handleSubmit = () => {
        console.log("RegisterPage");
        
    }
  return (
    <LayoutContainer>

<div className="flex items-center justify-center min-h-screen bg-base-200 mt-25">
     
        <div className="card w-full max-w-xs md:max-w-md lg:max-w-lg bg-base-100 shadow-xl p-5">
          {/* Consistent Welcome Banner */}
          <div className="bg-gradient-to-br from-[var(--bg-gradient-start-light)] to-[var(--bg-gradient-end-light)] dark:from-[var(--bg-gradient-start-dark)] dark:to-[var(--bg-gradient-end-dark)] rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
            <h1 className="text-xl font-bold text-white">Join Dental Health Care</h1>
            <p className="text-sm text-gray-100 mt-2">testing 1</p>
          </div>

          <div className="card bg-base-100 shadow-xl p-5">
            <div className="card-body">
              <h2 className="card-title justify-center text-center text-3xl font-bold mb-4">Create Your Account</h2>
              <form>
                <div className="form-control mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Username" 
                      className="grow w-full sm:h-12 sm:text-lg sm:w-full md:w-3/4" 
                      required
                    />
                  </label>
                  
                </div>
                <div className="form-control mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input 
                     
                      type="email" 
                      placeholder="Email" 
                      className="grow w-full sm:h-12 sm:text-lg sm:w-full md:w-3/4" 
                      required
                    />
                  </label>
                </div>
                <div className="form-control mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                    </svg>
                    <input 
                      
                      type="password" 
                      placeholder="Password" 
                      className="grow w-full sm:h-12 sm:text-lg sm:w-full md:w-3/4" 
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <button type="submit" className="btn btn-primary h-12 sm:h-16 sm:text-lg w-full">
                    Register
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
    </div>
  </LayoutContainer>
  )
}

export default RegisterPage
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
  const logo = '/images/app-logo.jpg'
  const teeth1 = '/images/dentist3.jpg'
  const teeth2 = '/images/teeth.jpeg'
  const teeth3 = '/images/image1.webp'
  const beforeAfterImage = '/images/before.png'

  
  return (
    <main>
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />

        {/* Hero section */}
        <div className="hero min-h-screen bg-base-100 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src={teeth1} alt="Healthy Teeth" width={500} height={600} className="rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-6xl font-bold text-primary">Your Smile, Our Priority</h1>
                <p className="py-6 text-lg text-gray-600">
                  Welcome to DentalCare! Discover personalized dental health solutions tailored just for you. Our AI-driven analysis and expert recommendations ensure your best smile.
                </p>
                <div className="space-x-5 p-4">
                  <Link href="/appointments">
                    <button className="btn btn-primary">Book Appointment</button>
                  </Link>
                  <Link href="/services">
                    <button className="btn btn-outline btn-primary">Our Services</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End of Hero section */}

          {/* Start of Before After Section */}

          <section className="py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">The Effects of Our Work</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-6">
            <h3 className="text-2xl font-semibold">Before & After</h3>
            <p className="mt-4 text-gray-600">
              Each of our patients undergoes a metamorphosis of their smile.
            </p>
            
          </div>
          <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full h-64 lg:h-96">
              <Image src={beforeAfterImage} alt="Before and After Teeth Whitening" layout="fill" objectFit="contain" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
          {/* End of After Section */}

          {/* Service section */}

          <section className="py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
              <figure className="px-10 pt-10">
                <Image src={service.icon} alt={service.title} width={80} height={80} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="card-actions mt-4">
                  <Link href={service.link}>
                    <button className="btn btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

          {/* End of Service section */}

          {/* Footer */}

          <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <Image src={logo} alt="image logo" width={70} height={70} className="rounded-lg" />
    <p>Dental Health Ltd.<br/>Providing reliable dentist service since 2023</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Teeth Whitening</a>
    <a className="link link-hover">Dental Implants</a>
    <a className="link link-hover">Emergency Care</a>
    <a className="link link-hover">Booking</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav> 
</footer>   


          {/* End of footer */}
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
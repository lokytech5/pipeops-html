import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
  const teeth1 = '/images/dentist3.jpg'
  const teeth2 = '/images/teeth.jpeg'

  const services = [
    {
      title: "Teeth Whitening",
      description: "Get a brighter, whiter smile with our professional teeth whitening services.",
      icon: teeth2,
      link: "/services/whitening"
    },
    {
      title: "Dental Implants",
      description: "Restore your smile with our high-quality dental implants.",
      icon: teeth2,
      link: "/services/implants"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with our advanced orthodontic treatments.",
      icon: "/images/orthodontics-icon.png",
      link: "/services/orthodontics"
    },
    {
      title: "Emergency Care",
      description: "Receive immediate care for dental emergencies with our expert team.",
      icon: "/images/emergency-icon.png",
      link: "/services/emergency"
    },
  ];
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
                <div className="space-x-4">
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

          {/* Service section */}

          <section className="py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
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
          <div className="bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold text-white">Welcome to DentalCare!</h2>
            <p className="text-sm text-gray-100 mt-1">Your journey to a brighter smile starts here.</p>
            <div className="flex items-center justify-start mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-5 18.54V22a1 1 0 001.5.86l2.5-1.45a4 4 0 014 0l2.5-1.45A1 1 0 0017 22v-1.46A10 10 0 0012 2zM12 6a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
              Diagnosis
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
                  Home
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
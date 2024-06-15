import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

// testing3

const HeroSection = () => {
     const teeth1 = '/images/dentist3.jpg'

  return (
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
  )
}

export default HeroSection
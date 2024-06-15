import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LayoutContainer from '../components/LayoutContainer'

const AboutPage = () => {
   const profileImage = '/images/dentist3.jpg'
  return (
    <LayoutContainer>


    <main className="min-h-screen bg-base-100 py-10 pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">Learn more about my background, expertise, and passion for dental health.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <Image src={profileImage} alt="Profile Picture" width={300} height={300} className="rounded-full shadow-xl mx-auto" />
          </div>
          <div className="lg:w-2/3 lg:pl-10">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-primary">John Doe</h2>
              <p className="mt-2 text-lg text-gray-600">Full-Stack Engineer and Dental Health Enthusiast</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
              <ul className="mt-2 text-lg text-gray-600 space-y-2">
                <li><strong>Address:</strong> 1234 Dental Street, Smile City, SC 56789</li>
                <li><strong>Email:</strong> johndoe@example.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Project Count:</strong> 5</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-primary">Professional Summary</h3>
              <p className="mt-2 text-lg text-gray-600">
                I am a dedicated Full-Stack Engineer with a passion for leveraging technology to improve dental health. With a background in both software development and dental care, I aim to create innovative solutions that enhance patient experiences and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </LayoutContainer>
  )
}

export default AboutPage
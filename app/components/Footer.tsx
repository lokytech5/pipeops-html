import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const logo = '/images/app-logo.jpg'
  return (
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
  )
}

export default Footer
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const ServicesSection = () => {
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
          title: "Diagonsis with AI",
          description: "use our AI to run diagonsis on your teeth",
          icon: teeth2,
          link: "/services/orthodontics"
        },
      ];

  return (
    <div className="py-12 bg-base-100">
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
  </div>
  )
}

export default ServicesSection
import React from 'react'
import Image from 'next/image';

const BeforeAfterSection = () => {
    const beforeAfterImage = '/images/before.png'

  return (
    <div className="py-12 bg-base-100">
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
  </div>
  )
}

export default BeforeAfterSection
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (

    <div className='flex flex-col px-14 md:px-20 py-10  md:gap-6 items-center '>
    
        <h1 className='text-3xl md:text-7xl text-white mb-5 font-semibold'>MEET OUR TEAM</h1>
        <div className='w-full flex gap-12 md:gap-4 flex-wrap  justify-center  xl:flex-nowrap'>

        <article className="relative overflow-hidden w-[80%] md:w-full  lg:w-1/4 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-[#3e4467] transition hover:shadow-lg">
  <Image
    alt="Person"
    src="/mayukh.png"
    height={300}
    width={300}
    className="absolute inset-0 h-full w-full object-fill"
    />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">  
      <a target='_blank' href="https://www.linkedin.com/in/magon1">
        <h3 className="mt-0.5 text-2xl font-bold text-white">Mayukh Gon</h3>
      </a>

      <p className="mt-2 line-clamp-3 font-semibold text-lg text-white/95">
       Founder and CEO

      </p>
    </div>
  </div>
</article>
<article className="relative overflow-hidden  w-[80%] md:w-full h-full  lg:w-1/4 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-[#3e4467] transition hover:shadow-lg">
<Image
    alt="Person"
    src="/kimutai.png"
    height={300}
    width={300}
    className="absolute  h-full w-full object-fill "
    />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">  
      <a target='_blank' href="https://www.linkedin.com/in/kimutai-kitur-a8579b238">
        <h3 className="mt-0.5 text-2xl font-bold text-white">Kimutai Kitur</h3>
      </a>

      <p className="mt-2 line-clamp-3 font-semibold text-lg text-white/95">
   CO-FOUNDER AND CIO
      </p>
    </div>
  </div>
</article>
<article className="relative overflow-hidden w-[80%] md:w-full h-full  lg:w-1/4 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-[#3e4467] transition hover:shadow-lg">
<Image
    alt="Person"
    src="/will.png"
    height={300}
    width={300}
    className="absolute  h-full w-full object-fill"
    />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">  
      <a target='_blank' href="https://www.linkedin.com/in/will-bartlett-676b6738">
        <h3 className="mt-0.5 text-2xl font-bold text-white">Will Bartlett</h3>
      </a>

      <p className="mt-2 line-clamp-3 font-semibold text-lg text-white/95">
     CO-FOUNDER AND CMO

      </p>
    </div>
  </div>
</article>

<article className="relative overflow-hidden w-[80%]  md:w-full  lg:w-1/4 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-[#3e4467] transition hover:shadow-lg">
<Image
    alt="Person"
    src="/talha.png"
    height={300}
    width={300}
    className="absolute  h-full w-full object-fill"
    />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">  
      <a target='_blank'  href="https://www.linkedin.com/in/magon1">
        <h3 className="mt-0.5 text-2xl font-bold text-white">Talha Sohail</h3>
      </a>

      <p className="mt-2 line-clamp-3 font-semibold text-lg text-white/95">
      CHIEF AI ENGINEER
      </p>
    </div>
  </div>
</article>
    </div>
        </div>
  )
}

export default Team
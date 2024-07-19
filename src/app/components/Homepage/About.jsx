"use client"
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="w-full gap-16 items-center flex md:flex-row flex-col md:px-28 md:py-16 py-6 px-6 ">
      <div className='w-full md:w-1/2 flex items-center md:items-start flex-col' >
       

        <h1 className='text-3xl md:text-7xl text-white font-bold'>
        Nebula Capital

        </h1>
        <p className='text-white mt-4 md:mt-10 text-base md:text-lg font-bold'>
          “Leave Your Investing Research To Us”</p>
        <div className='flex gap-4 items-center mt-6'>
          <div>
            <Image src="/mayukh.png" width={100} height={100} className='rounded-full w-20' alt="invest" />
          </div>
            <div>
              <h1 className='text-2xl font-semibold'>
              Mayukh Gon
              </h1>
              <p className='font-semibold uppercase'>
                Founder &
              CEO 
                
              </p>
              
            </div>
        </div>
      </div>
      
      
      <div className='w-full px-5 md:px-7 md:w-1/2 '>
      <div className='w-full flex md:flex-row flex-col  md:gap-5 text-base text-slate-300 font-normal  md:pt-44'>
        <div className=''>
        With 25 years in tech, I have seen the challenges of finding the next big thing and raising capital. At Nebula Capital, we leverage
         advanced AI and blockchain technology to offer sophisticated investment strategies and real-time analytics.
        </div>
        <div className=''>
        Our goal is to simplify investing, providing clients with unparalleled insights and opportunities in the dynamic crypto market 

        </div>
      </div>
           
      </div>
    </section>
  );
};

export default About;

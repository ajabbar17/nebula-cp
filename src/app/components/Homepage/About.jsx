"use client"
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="w-full gap-16 items-center flex md:flex-row flex-col md:px-28 md:py-16 py-6 px-6 ">
      <div className='w-full md:w-1/2 flex items-center md:items-start flex-col' >
        <p className='font-bold text-base text-center md:text-start text-white mb-10 tracking-widest'>
        PIONEERING INNOVATION IN CRYPTO, BLOCKCHAIN, AND AI

        </p>

        <h1 className='text-5xl md:text-7xl text-white font-bold'>
        Nebula Capital

        </h1>
        <p className='text-white mt-4 md:mt-10 text-base md:text-lg font-bold'>
          “Leave Your Investing Research To Us”</p>
        <div className='flex gap-4 items-center mt-6'>
          <div>
            <Image src="/ceo.jpg" width={100} height={100} className='rounded-full w-20' alt="invest" />
          </div>
            <div>
              <h1>
              CEO HERE
              </h1>
              <p>
              CEO Director

              </p>
            </div>
        </div>
      </div>
      
      
      <div className='w-full px-10 md:w-1/2 '>
      <div className='w-full flex md:flex-row flex-col  md:gap-5 text-base text-slate-300 font-normal  md:pt-44'>
        <div className=''>
        The cryptocurrency market has rapidly evolved, driven by blockchain technology and increasing mainstream adoption. 
        Nebula Capital harnesses the power of blockchain and AI to innovate within this dynamic landscape. 
        </div>
        <div className=''>
        By combining advanced AI algorithms with blockchain expertise, 

        we offer sophisticated investment strategies, real-time analytics, and secure asset management solutions.
         Our approach ensures clients gain unparalleled insights and opportunities,
         positioning Nebula Capital as a leader in navigating the evolving crypto market.
        </div>
      </div>
           
      </div>
    </section>
  );
};

export default About;

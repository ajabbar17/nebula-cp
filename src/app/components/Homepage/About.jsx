"use client"
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="w-full gap-16 items-center  flex md:flex-row flex-col md:px-28 md:py-16 py-6 px-6 ">
      <div className='w-[50%] flex  items-center md:items-start flex-col' >
       

        
         
        <p className='text-white mt-4 md:mt-10 text-base md:text-lg font-bold'>
          “Access a comprehensive strategy encompassing education, yields, and exclusive early-stage Web3 investments.”</p>
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
      
      
      
    </section>
  );
};

export default About;

import Image from 'next/image'
import React from 'react'

const NonRetail = () => {
  return (
    <div className='w-full px-14 md:px-28 py-7 flex-col items-center flex'>
    <h1 className='text-4xl text-center md:text-7xl text-white mb-5 font-semibold'>For Non-Retail Investors</h1>

    <div className='w-full flex flex-col md:flex-row  gap-8'>
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
            <Image src="/research.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
            <h1 className='font-semibold text-4xl text-center'>
                     Discover

            </h1>
            <p className='text-center mt-3'>
            Discover the next big thing. 

            </p>
        </div>
        
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
            <Image src="/allocate.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
            <h1 className='font-semibold text-4xl text-center'>

            Allocate 

            </h1>
            <p className='text-center mt-3'>
            Allocate according to the sector.
            </p>
        </div>
        
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
            <Image src="/continuous.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
            <h1 className='font-semibold text-4xl text-center'>
                     
                Grow


            </h1>
            <p className='text-center mt-3'>
            Grow your portfolio with compliance.

            </p>
        </div>
    </div>


</div>  )
}

export default NonRetail
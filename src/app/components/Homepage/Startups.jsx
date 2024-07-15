import Image from 'next/image'
import React from 'react'

const Startups = () => {
  return (
    <div className='w-full px-28 py-7 flex-col items-center flex my-20'>
        <h1 className='text-5xl md:text-7xl text-white mb-5 font-semibold'>For Start-Ups</h1>

        <div className='w-full flex flex-col md:flex-row  gap-8'>
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/code-review.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>
                         Gain Visibility

                </h1>
                <p className='text-center mt-3'>
                    Enhance your startup&apos;s profile and attract attention from potential investors.

                </p>
            </div>
            
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/funding.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>

                                Access Capital

                </h1>
                <p className='text-center mt-3'>
                Secure necessary funding to accelerate your business growth.

                </p>
            </div>
            
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/strategic.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>
                         
                    Strategic Support


                </h1>
                <p className='text-center mt-3'>
                Obtain guidance and resources to navigate challenges and scale effectively.

                </p>
            </div>
        </div>


    </div>
  )
}

export default Startups
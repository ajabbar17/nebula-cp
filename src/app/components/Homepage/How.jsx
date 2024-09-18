import Image from 'next/image'
import React from 'react'

const How = () => {
  return (
    <div className='w-full px-7 md:px-28 py-7 flex-col my-20 items-center flex'>
        <h1 className='text-4xl text-center mt-5 md:text-7xl text-white mb-5 font-semibold'>How It Works? <br /> <span className='text-xl md:text-4xl text-center mt-3  text-white mb-8 font-semibold'> Your Gateway to Advanced Crypto Investment</span></h1>

        <div className='w-full flex flex-col md:flex-row  gap-8'>
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/investment.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>
                         Invest

                </h1>
                <p className='text-center mt-3'>
                Acquire a Nebula NFT to access early-stage Web3 projects.
                </p>
            </div>
            
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/brain.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>

                                Learn

                </h1>
                <p className='text-center mt-3'>
                Gain knowledge with expert-led education and market analysis.
                </p>
            </div>
            
            <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/savings.png" className='px-8 py-10 w-32' width={100} alt=" Logo"  height={100} />
                <h1 className='font-semibold text-4xl text-center'>
                         
                        Earn

                </h1>
                <p className='text-center mt-3'>
                Stake your NFT for yields and early project access.

                </p>
            </div>
        </div>


    </div>
  )
}

export default How

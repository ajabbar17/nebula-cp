import Image from 'next/image'
import React from 'react'

const Working = () => {
  return (
    <div className='w-full px-16 md:px-28 py-7 flex-col justify-center items-center flex text-white'>
        <h1 className='text-4xl md:text-7xl text-white mb-5 font-semibold'>How It Works</h1>

       <div className='flex w-auto md:flex-row flex-col md:px-20 mt-10 gap-7 '>
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/DataProcessing.png" className='px-8 py-10 w-52' alt=" Logo"  width={100} height={100}/>
                <h1 className='text-base md:text-xl text-center font-normal'>Using advanced algorithms to analyze the data
                and extract meaningful insights.</h1>
        </div>

        <div className='flex flex-col justify-center text-center md:text-start w-auto md:w-1/2 gap-5'>
            <h1 className='uppercase text-3xl md:text-4xl font-medium '>DATA Processing</h1>
            <h1 className='font-normal text-lg text-[#5E95BF]'>Transforms raw data into a clean and usable format, data processing will ensure that the dataset is clean, consistent, and ready for effective analysis and model training.</h1>
        </div>
       </div>


       <div className='flex w-auto md:flex-row-reverse flex-col text-center md:px-20 mt-10 gap-7 '>
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/model.png" className='px-8 py-10 w-52' alt=" Logo"  width={100} height={100}/>
                <h1 className='text-base md:text-xl text-center font-normal'>
                    Building machine learning models to predict
                    future performance and identify
                    potential investments.
                    
                    </h1>
        </div>

        <div className='flex flex-col justify-center  text-center md:text-start w-auto md:w-1/2 gap-5'>
            <h1 className='uppercase text-3xl md:text-4xl  font-medium '>Predictive modelling</h1>
            <h1 className='font-normal text-lg text-[#5E95BF]'>Predictive modeling  involves using of historical and real-time data to predict
               future price movements, trends,or other relevant metrics.
                </h1>
        </div>
       </div>

       <div className='flex w-auto md:flex-row flex-col md:px-20 mt-10 gap-7 '>
        <div className='w-full md:w-1/3 px-8  py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-transform  shadow-inner flex-col justify-center flex items-center border-2 rounded-2xl text-white'>
                <Image src="/Integration.png" className='px-8 py-10 w-52' alt=" Logo"  width={100} height={100}/>
                <h1 className='text-base md:text-xl text-center font-normal'>Using advanced algorithms to analyze the data
                and extract meaningful insights.
                </h1>
        </div>

        <div className='flex flex-col justify-center  text-center md:text-start w-auto md:w-1/2 gap-5'>
            <h1 className='uppercase text-3xl md:text-4xl font-medium '>AI Integration</h1>
            <h1 className='font-normal text-lg text-[#5E95BF]'>Nebula uses advanced AI to identify opportunities and optimize investments,
               ensuring our community benefits from the best Web3 advancements.</h1>
        </div>
       </div>


    </div>
  )
}

export default Working
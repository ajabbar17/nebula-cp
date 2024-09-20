import Image from 'next/image'
import React from 'react'

const How = () => {
  const steps = [
    {
      imgSrc: '/investment.png',
      title: 'Invest',
      description: 'Acquire a Nebula NFT to access early-stage Web3 projects.',
    },
    {
      imgSrc: '/brain.png',
      title: 'Learn',
      description: 'Gain knowledge with expert-led education and market analysis.',
    },
    {
      imgSrc: '/savings.png',
      title: 'Earn',
      description: 'Stake your NFT for yields and early project access.',
    },
  ];

  return (
    <div className='w-full px-7 md:px-28 py-7 flex-col my-20 items-center flex'>
      <h1 className='text-xl md:text-3xl text-center mt-5  text-white mb-8 font-semibold'>
        How It Works? <br />
        <span className='text-3xl md:text-5xl text-center text-white mb-8 font-semibold'>
          Your Gateway to Advanced Crypto Investment
        </span>
      </h1>

      <div className='w-full flex flex-col md:flex-row gap-8'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='w-full md:w-1/3 px-8 py-14 pt-0 why-card border-[#121837] shadow-[#121837] border-2 hover:scale-105 transition-transform flex-col justify-center flex items-center  rounded-2xl text-white'
          >
            <Image
              src={step.imgSrc}
              className='px-8 py-10 w-32'
              width={100}
              height={100}
              alt={step.title}
            />
            <h1 className='font-semibold text-4xl text-center'>{step.title}</h1>
            <p className='text-center mt-3'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;

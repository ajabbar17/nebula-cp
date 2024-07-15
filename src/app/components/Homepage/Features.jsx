import React from 'react';

const Features = () => {
  return (
    <section className="py-14 lg:h-screen  px-4 flex-col justify-center items-center">
      <h2 className="text-5xl md:text-6xl uppercase font-bold mb-20 text-center">How  <span className='text-[#F37051]'>It Works?</span></h2>
      <div className="cards px-16 md:px-28 gap-10 flex lg:flex-row md:items-center  lg:items-stretch flex-col">
        <div className="card w-auto lg:w-1/2 p-5 md:w-[80%] px-10 shadow-xl bg-gradientMid2 shadow-black ">
          <h3 className="text-3xl font-bold mb-2 text-[#F37051]">Retail Investors:</h3>
          <p className='text-md text-start'> <span className='text-lg font-bold text-[#F37051]'>Invest:</span>  Acquire a Nebula NFT to access early-stage Web3 projects. <br />
          <span className='text-lg font-bold text-[#F37051]'>Learn:</span> Gain knowledge with expert-led education and market analysis. <br />
          <span className='text-lg font-bold text-[#F37051]'>Earn:</span> Stake your NFT for yields and early project access.</p>
        </div>
        <div className="card w-auto lg:w-1/2 p-5 md:w-[80%] px-10 shadow-xl bg-gradientMid2 shadow-black ">
          <h3 className="text-3xl font-bold mb-2 text-[#F37051]"> Non-Retail Investors:</h3>
          <p className='text-md text-start'> <span className='text-lg font-bold text-[#F37051]'>Invest:</span>  Use AI-driven insights to invest in early-stage Web3 opportunities. <br />
          <span className='text-lg font-bold text-[#F37051]'>Learn:</span> Access advanced education and market analysis. <br />
          <span className='text-lg font-bold text-[#F37051]'>Earn:</span> Maximize returns through exclusive investment opportunities.</p>
        </div>
        <div className="card w-auto lg:w-1/2 p-5 md:w-[80%] px-10 shadow-xl bg-gradientMid2 shadow-black ">
          <h3 className="text-3xl font-bold mb-2 text-[#F37051]">StartUps:</h3>
          <p className='text-md text-start'> <span className='text-lg font-bold text-[#F37051]'>Raise Capital:</span> Gain exposure to a diverse investor base. <br />
          <span className='text-lg font-bold text-[#F37051]'>Educate:</span> Understand the investment landscape with our resources.<br />
          <span className='text-lg font-bold text-[#F37051]'>Grow:</span> Secure funding and scale with Nebula’s network.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

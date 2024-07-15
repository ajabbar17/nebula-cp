import React from 'react';

const WhyNebula = () => {
  return (
       <section className="py-14 lg:h-screen  px-4 flex-col justify-center items-center">
      <h2 className="text-5xl md:text-6xl uppercase font-bold mb-20 text-center">why <span className='text-[#F37051]'>nebula?</span></h2>
      <div className="cards2 px-16 md:px-28 gap-10 flex lg:flex-row md:items-center  lg:items-stretch flex-col ">
        <div className="card w-auto lg:w-1/2 p-5 md:w-[80%] px-10 shadow-[0_20px_50px_rgba(8,_50,_220,_0.4)]   bg-gradientMid2  ">
          <h3 className="text-3xl font-bold mb-2">Exclusive Access</h3>
          <p className='text-xl'>Step beyond the gates of traditional venture capital with NFTs that open doors to early-stage Web3 projects,
           allowing you to invest in the next big thing before it becomes mainstream.</p>
        </div>
        <div className=" card w-auto lg:w-1/2 p-5 md:w-[80%] px-10  shadow-[0_20px_50px_rgba(8,_50,_220,_0.4)]  bg-gradientMid2 ">
          <h3 className="text-3xl font-bold mb-2">Educational Empowerment</h3>
          <p className='text-xl'>We believe informed investors are empowered investors. Nebula provides unparalleled insights and learning opportunities
           to ensure you’re equipped for success in the volatile world of cryptocurrency.</p>
        </div>
        <div className=" card w-auto lg:w-1/2 p-5 md:w-[80%] px-10 shadow-[0_20px_50px_rgba(8,_50,_220,_0.4)]   bg-gradientMid2  ">
          <h3 className="text-3xl font-bold mb-2">Diversified Investment Strategy</h3>
          <p className='text-xl'>Our platform offers a meticulously curated selection of cryptocurrencies, NFTs, and blockchain assets, 
          diversifying risk and amplifying potential returns across different sectors of the digital economy.</p>
        </div>
      </div>
    </section>
     
  );
};

export default WhyNebula;

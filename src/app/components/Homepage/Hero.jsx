"use client"
import React from 'react';

const Hero = () => {
    const text = "NEBULA";

  return (
    <section className="text-center flex justify-center items-center py-20 h-screen relative">
        <div className='' >

        <h1 className="text-8xl font-bold mb-6">
        <span
          className={`inline-block animate-animation`}
          style={{
            animationDelay: '1s',
            background: 'linear-gradient(to right, #fff, #fff)',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundSize: '0%',
            backgroundRepeat: 'no-repeat',
          }}
        >NEBULA
        </span>
    </h1>     
     <h1 className="text-6xl font-bold mb-6 "
        style={{color: '#D64D72'}}
     >NFT,FT & WEB3
     </h1>
      <p className="text-2xl">A new way to find superstar crypto plays</p>
        </div>
    </section>
  );
};

export default Hero;

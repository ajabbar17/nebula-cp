"use client"
import Image from "next/image";
import React from "react";

const Why = () => {
  // Data Array
  const features = [
    {
      id: 1,
      title: "Exclusive Access",
      description:
        "Step beyond the gates of traditional venture capital with NFTs that open doors to early-stage Web3 projects, allowing you to invest in the next big thing before it becomes mainstream.",
      imgSrc: "/access.png",
      reverse: false,
    },
    {
      id: 2,
      title: "Educational Empowerment",
      description:
        "We believe informed investors are empowered investors. Nebula provides unparalleled insights and learning opportunities to ensure you’re equipped for success in the volatile world of cryptocurrency.",
      imgSrc: "/empowerment.png",
      reverse: true,
    },
    {
      id: 3,
      title: "Diversified Investment Strategy",
      description:
        "Our platform offers a meticulously curated selection of cryptocurrencies, NFTs, and blockchain assets, diversifying risk and amplifying potential returns across different sectors of the digital economy.",
      imgSrc: "/strategy.png",
      reverse: false,
    },
  ];

  return (
    <div className="w-full px-7 md:px-28 py-7 flex-col justify-center items-center flex text-white">
      <h1 className="text-4xl md:text-7xl text-white mb-3 font-semibold">
        Why Nebula?
      </h1>
      

      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex w-auto ${
            feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col md:px-20 mt-10 gap-7`}
        >
          <div className="w-full md:w-1/3 px-8 py-14 pt-0 border-[#121837] shadow-[#121837] hover:scale-105 transition-all why-card flex-col justify-center flex items-center border-2 rounded-2xl text-white">
            <Image
              src={feature.imgSrc}
              className="px-8 py-10 w-52"
              alt={`${feature.title} Logo`}
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-start w-auto md:w-1/2 gap-5">
            <h1 className="uppercase text-3xl md:text-4xl font-medium">
              {feature.title}
            </h1>
            <h1 className="font-normal text-lg text-[#5E95BF]">
              {feature.description}
            </h1>
          </div>
        </div>
        
        
      ))}
      
      <button
        className="bg-white hover:scale-105 transition-all  font-bold text-xl text-black p-4 mt-8  px-10  text-center rounded-full"
        onClick={() => window.open("https://t.me/+K2gODipwtbo3MDVh", "_blank")}
      >
        Explore Nebula

      </button>
    </div>
  );
};

export default Why;

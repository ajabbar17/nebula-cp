"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed w-full z-10 py-3 nav">
      <div className="max-w-screen-xl flex md:flex-row items-center justify-between mx-auto px-4 relative"> {/* Relative positioning */}
        <Link href="/">
          <div className="flex items-center gap-4 rtl:space-x-reverse cursor-pointer">
            <Image src="/Icon White.png" className='w-[30%] h-auto' alt=" Logo"  width={100} height={100}></Image>
            <span className="self-center text-3xl font-bold whitespace-nowrap text-white">NEBULA</span>
          </div>
        </Link>
        
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none   dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`absolute md:relative w-full md:w-auto mt-12 md:mt-0 md:block ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-default" style={{ top: '50%', left: '0' }}> {/* Absolute positioning */}
          <ul className="font-medium flex flex-col left-0 p-4 md:p-0 bg-[#0b1126] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link href="/">
                <span className="block font-bold text-white rounded  md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >HOME</span>
              </Link>
            </li>
            <li>
              <Link href="/contactUs">
                <span className="block font-bold text-white rounded md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >CONTACT US</span>
              </Link>
            </li>
        
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



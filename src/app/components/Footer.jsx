import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Footer = () => {
  return (


<footer className='text-white footer'>
    
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />

        <div className="md:flex md:justify-between">
            
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                  <Image src="/Icon White.png" className="h-14 md:h-20 me-3 bg-blend-multiply w-auto" alt=" Logo" width={100} height={100} />
                  <span className="self-center text-4xl font-bold whitespace-nowrap ">Nebula Capital</span>
              </Link>
          </div>

          <div className="grid grid-cols-2 gap-28  sm:grid-cols-2">
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase ">about</h2>
                  <ul className=" font-medium">
                      <li className="mb-4  hover:scale-110 transition-all">
                          <Link href="/" >Home</Link>
                      </li>
                      <li className=' hover:scale-110 transition-all'>
                      <a target='_blank' href="https://t.me/+K2gODipwtbo3MDVh" >Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase ">Follow us</h2>
                  <ul className=" font-medium">
                      <li  className="mb-4 hover:scale-110 transition-all">
                          <a target='_blank' href="https://x.com/Nebula_Cap?t=B5j-PUyhVeKjUMX7PjnW-g&s=08">Twitter</a>
                      </li>
                      <li className="mb-4 hover:scale-110 transition-all">
                          <a target='_blank' href="https://t.me/+K2gODipwtbo3MDVh" >Telegram</a>
                      </li >
                      <li className='hover:scale-110 transition-all'>
                          <a target='_blank' href="https://www.linkedin.com/company/nebulacapital/about/?viewAsMember=true" >LinkedIn</a>
                      </li>
                  </ul>
              </div>
             
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm sm:text-center">© 2023 <Link href="h/" className="hover:underline">Nebula Capital™</Link>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

 )
}

export default Footer

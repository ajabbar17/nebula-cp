import React from 'react'

const Contact = () => {
  return (
 

<section className="w-full">
  <div className="w-full max-w-screen-xl py-16 p-0 sm:px-3  lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8  lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl uppercase font-medium text-4xl md:text-7xl">
          Get in touch with us
        </p>

        <div className="mt-8">
          <p className='text-[#86A3BF] leading-6 text-base md:text-lg font-normal'>
            
            Whether you have questions about our services, 
                need technical  or want to explore how Nebula Capital works can help your business thrive, we are here to assist you.
          </p>
        </div>
        
      </div>

      <div className="rounded-2xl p-8  shadow-2xl border-[#121837] shadow-[#537b81] lg:col-span-2 lg:p-12 hover:scale-105 transition-transform">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg  bg-[#0A0E28]  outline-none border border-[#1C244C] p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg  bg-[#0A0E28]  outline-none border border-[#1C244C] p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg  bg-[#0A0E28]  outline-none border border-[#1C244C] p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

            

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg  bg-[#0A0E28]  outline-none border border-[#1C244C] p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#47CC88] px-5 py-3 font-medium text-black sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact
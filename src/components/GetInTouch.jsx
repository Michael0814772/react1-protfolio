import React from 'react'

const GetInTouch = () => {
  return (
    <div className='universalbodypadding py-11'>
      <div className='w-full max-w-7xl m-auto'>
        <div className='flex flex-col w-full justify-center items-center gap-0 md:gap-5 mb-20 sm:mb-28'>
          <h1 className='text-xl mb-3 md:mb-0 flex items-center text-textcl1 tracking-widest'><span className='mr-3 '>03.</span>Whats's Next</h1>

          <p className='text-4xl lg:text-7xl text-textcl4 mb-3'>Get In Touch</p>

          <p className='text-textcl5 text-sm md:text-lg lg:text-2xl text-center mb-7'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</p>

          <a href="mailto:michael232akin@gmail.com" className='border-2 border-textcl1 text-textcl1 py-4 px-6 text-xs md:text-xl hover:bg-backgroundcl2 transition-all duration-300 rounded-lg'>Say Hello</a>
        </div>

      </div>
    </div>
  )
}

export default GetInTouch
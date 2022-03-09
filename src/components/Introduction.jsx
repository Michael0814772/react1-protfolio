import React from 'react'

const Introduction = () => {
  return (
    <div className='universalbodypadding h-screen' id='home'>
      <div className='w-full mb-9 -mt-20'>
        <p className='text-textcl1 text-textp1 md:text-2xl font-bold -tracking-tighter mb-4'>Hi, my name is</p>
        <h1 className='text-textcl2 text-texth1 md:text-7xl font-bold -tracking-tighter mb-2'>Michael AKinrinmade.</h1>
        <h1 className='text-textcl3 text-texth1 md:text-7xl font-bold -tracking-tighter'>I build things for the web.</h1>
      </div>

      <div className="w-full mb-10">
        <p className='text-textcl5 text-textp2 max-w-xl'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
      </div>

      <div className='w-full'>
        <a href="#work" className='text-textcl1 border border-textcl1 rounded-md py-5 px-10 text-textp2 font-semibold hover:bg-backgroundcl4 -tracking-tighter'>Check out my Projects!</a>
      </div>
    </div>
  )
}

export default Introduction
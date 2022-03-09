import React, { useState } from 'react'
import navContent from './navContent';
import resume from '../images/Resume.pdf';
import logo from '../images/MichaellogoMain.png';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <div className='flex py-4 md:py-6 relative justify-between items-center md:items-center universalPadding'>
        <div className='text-textcl1 w-full h-full'>
          <img src={logo} alt="logo" className='w-10' />  
        </div>
        <div className={`md:hidden absolute h-screen bg-backgroundcard top-0 ${toggle ? '-right-10' : '-right-full'} transition-all duration-700 w-11/12 flex flex-col items-center justify-center `}>
          {navContent.map(n => (
            <div key={n.id} className="text-center">
              <a href={n.link} onClick={() => setToggle(!toggle)}>
                <p className='mb-1 text-textcl1 text-md'>{n.id}</p>
                <p className='mb-5 text-textcl2 text-md'>{n.name}</p>
              </a>
            </div>
          ))}
          <a href={resume} target='_blank' rel="noreferrer" className='text-textcl1 border border-textcl1 px-11 py-3 mt-12 rounded-md hover:bg-backgroundcl4 cursor-pointer'>Resume</a>
        </div>
        {toggle ? (
          <div className='flex flex-col md:hidden relative ml-2 justify-center gap-2 items-end z-30 h-7 cursor-pointer transition-all duration-700' onClick={() => switchToggle(false)}>
            <div className='bg-backgroundcl3 h-1 w-10 transform rotate-45 absolute' />
            <div className='bg-backgroundcl3 h-1 w-10 transform -rotate-45 absolute' />
          </div>
        ) : (
          <div className={`flex flex-col md:hidden justify-center items-end h-7 cursor-pointer transition-all duration-700 ${switchToggle ? 'gap-2' : 'gap-0'}`} onClick={switchToggle}>
            <div className='bg-backgroundcl3 h-1 w-10' />
            <div className='bg-backgroundcl3 h-1 w-7' />
            <div className='bg-backgroundcl3 h-1 w-4' />
          </div>
        )}

        <div className={`hidden md:flex items-center`}>
          {navContent.map(n => (
            <a href={n.link} key={n.id} className='flex' onClick={() => setToggle(!toggle)}>
              <p className='text-textcl1 text-lg mr-2'>{n.id}</p>
              <p className='text-textcl2 text-lg mr-6'>{n.name}</p>
            </a>
          ))}
          <a href={resume} target='_blank' rel="noreferrer" className='text-textcl1 md:text-xl border border-textcl1 px-4 py-2 flex justify-center items-center rounded-md hover:bg-backgroundcl4 cursor-pointer'>Resume</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import thingsBuilt from '../work-history/thingsBuilt';

const Projects = () => {
  return (
    <div className='universalbodypadding py-11'>
      <div className='w-full max-w-7xl m-auto'>
        <div className='flex items-center gap-0 md:gap-5 mb-20 sm:mb-28'>
          <h1 className='text-base md:text-3xl flex items-center text-textcl4 font-bold mr-3'><span className='mr-3 text-textcl1 text-base md:text-2xl md:mt-1'>03.</span>Some Things I’ve Built</h1>
          <div className='h-height1px w-20 md:w-48 bg-textcl5 mt-2' />
        </div>

        {thingsBuilt.map(built => (
          <div className='group relative h-height405 md:h-fit w-full md:flex mb-10 md:mb-28' key={built.id}>
            <div className={`group w-full h-full relative md:w-6/12 lg:w-7/12 md:h-2/4 lg:h-3/4 md:opacity-100 ${built.id % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <img src={built.path} alt="backgroundImage" className='w-full h-full' />
              <div className='absolute top-0 bg-backgroundcl5 group-hover:opacity-0 h-full w-full opacity-30' />
            </div>
            <div className={`absolute top-0 md:-top-9 w-full md:w-fit bg-backgroundcard opacity-80 md:opacity-95 md:bg-transparent h-full p-6 ${built.id % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>

              <div className='pb-3'>
                <p className='text-textcl1 font-bold text-lg pb-1'>{built.featured}</p>
                <a href={built.officailLink} target='_blank' rel="noreferrer" className='text-textcl2 font-extrabold text-xl lg:text-2xl hover:text-textcl1'>{built.name}</a>
              </div>

              <div className={`w-full md:w-10/12 pb-3 md:mb-3 md:bg-backgroundcard md:py-4 md:px-4 ${built.id % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <p className={`text-textcl4 text-sm lg:text-lg`}>{built.about}</p>
              </div>

              <div className={`flex flex-wrap gap-4 pb-3 ${built.id % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                <p className='text-textcl4 text-sm'>{built.stackUsed.stack1}</p>
                <p className='text-textcl4 text-sm'>{built.stackUsed.stack2}</p>
                <p className='text-textcl4 text-sm'>{built.stackUsed.stack3}</p>
                <p className='text-textcl4 text-sm'>{built.stackUsed.stack4}</p>
                <p className='text-textcl4 text-sm'>{built.stackUsed.stack5}</p>
              </div>

              <div className={`flex gap-5 ${built.id % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                <a href={built.gitLink} target='_blank' rel="noreferrer" className='text-textcl2 hover:text-textcl1'><AiOutlineGithub size={30} /></a>
                <a href={built.officailLink} target='_blank' rel="noreferrer" className='text-textcl2 hover:text-textcl1'><BiLinkExternal size={30} /></a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
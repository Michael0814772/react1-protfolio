import React from 'react';
import { AiOutlineGithub, AiOutlineFolder } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import noteWorthyProjects from '../work-history/noteWorthyProjects';

const NoteWorthyProjects = () => {
  return (
    <div className='universalbodypadding pt-11 pb-20'>
      <div className='text-center mb-16'>
        <h1 className='text-textcl2 text-3xl mb-2'>Other Noteworthy Projects</h1>
        <p className='text-center text-base text-textcl1 cursor-pointer'>view the archive</p>
      </div>

      <div className='w-full'>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3'>

          {noteWorthyProjects.map(projects => (

            <li className='group w-full h-height440 md:h-height550px lg:h-height440 mb-8 bg-backgroundcard py-10 px-8 cursor-pointer' key={projects.id}>
              <div className='flex justify-between items-center pb-7 sm:pb-10 text-textcl2 '>
                <div>
                  <AiOutlineFolder className='text-textcl1 text-5xl lg:text-7xl' />
                </div>
                <div className='flex gap-3'>
                  <a href={projects.gitLink} target='_blank' rel="noreferrer" className='hover:text-textcl1 text-3xl lg:text-5xl'><AiOutlineGithub /></a>
                  <a href={projects.gitLink} target='_blank' rel="noreferrer" className='hover:text-textcl1 text-3xl lg:text-5xl'><BiLinkExternal /></a>
                </div>
              </div>
              <div>
                <div className='pb-7'>
                  <h1 className='pb-7 text-textcl2 group-hover:text-textcl1 text-3xl xl:text-4xl leading-9'>{projects.name}</h1>
                  <p className='text-sm xl:text-xl text-textcl4'>{projects.summary}</p>
                </div>
                <div>
                  <ul className='flex flex-wrap gap-3 sm:gap-3 text-textcl5 text-base'>
                    <li className='text-sm'>{projects.stackUsed.stack1}</li>
                    <li className='text-sm'>{projects.stackUsed.stack3}</li>
                    <li className='text-sm'>{projects.stackUsed.stack2}</li>
                    <li className='text-sm'>{projects.stackUsed.stack4}</li>
                  </ul>
                </div>
              </div>
            </li>

          ))}

        </ul>
      </div>
    </div>
  )
}

export default NoteWorthyProjects
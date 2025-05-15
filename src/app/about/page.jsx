import React from 'react'
import Image from 'next/image'
import aboutLogo from '../../../public/aboutlogo.png'

const About = () => {
  return (
    <div className="px-40 ml-16">
      <div className="mb-10">
        
        <Image className='w-[94%] h-72  ' 
         src={aboutLogo} alt=""   />
       <div className="absolute ml-2 -mt-16 bg-transparent">
         <h2 className='text-xl font-bold text-black bg-transparent'>Digital Storytallers</h2>
        <p>Handcrafting awards winning digital experiance</p>
       </div>

       <div className="grid grid-cols-2 mt-10">
        <div className="">
          <h1 className='text-3xl font-bold'>Who Are We ? </h1>
          <p className="mt-8 text-justify text-md">
              Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface.
        <br />
        <br />
         Challenges Solved:
        Incorporated user feedback quickly to improve the designs.
        Resolved software installation issues and ensured tools were up to date.
        <br />
        Next Steps:
        Continue frontend development for remaining pages (file management and dashboard).
        Begin backend integration for authentication and file uploads.
        Conduct testing of the initial UI components to ensure smooth functionality.
        
          </p>
        </div>
        
        <div className="ml-8 ">
        <h1 className="text-3xl font-bold">What We Do ?</h1>  
        <p className='mt-8 text-justify text-md'>Continue frontend development for remaining pages (file management and dashboard).
        Begin backend integration for authentication and file uploads.
        Conduct testing of the initial UI components to ensure smooth functionality.</p>
        <ul  className='gap-2 mt-3 '>
          <li className='mb-2'>Creative illustrative</li>
          <li className='mb-2'>Dynamic website</li>
          <li>Fast and handy mobile apps</li>
        </ul>
        
      <div className="mt-5 ">
          <button className='w-48 bg-green-700 h-14'>Continue</button>
      </div>
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import Image from 'next/image' 
import profile from '../../../../public/2.webp'
import first from "../../../../public/blog.jpg";

const BlogPost   = () => {
  return (
    <div className="px-40 ml-16">
      <div className="flex mt-20">
        <div className="w-[70%] text-left">
        
        <h3 className='mb-5 text-xl font-bold'>Started frontend development by
              implementing the login</h3>
              
              <p className='text-lg '>  Prepared detailed UI designs and UML diagrams to guide
              development. Completed the database schema design and set up the
              development environment. Started frontend development by
              implementing the login page and the main interface</p>
              
              <Image className='w-20 rounded-full mt-14' 
              src={profile} alt='profile'/>
              <p className='ml-20 -mt-10 text-lg'>Jhon Doe</p>
      </div>
      
      <div className="mr-16">
        <Image className='h-80 w-[45rem]'
         src={first} alt='blogpost'/>
      </div>
      
      </div>
      
       <div className="mt-10 mr-16 text-lg text-justify">
        <p>Completed the database schema design and set up the
              development environment. Started frontend development by
              implementing the login page and the main interfaceCompleted the database schema design and set up the
              development environment. Started frontend development by
              implementing the login page and the main interfaceCompleted the database schema design and set up the
              development environment.
              <br /><br /> Started frontend development by
              implementing the login page and the main interfaceCompleted the database schema design and set up the
              development environment. Started frontend development by
              implementing the login page and the main interfaceCompleted the database schema design and set up the
              development environment. Started frontend development by
              implementing the login page and the main interfaceCompleted the database schema design and set up the
              development environment.
              <br /> <br />  Started frontend development by
              implementing the login page and the main interface</p>
      </div>
    </div>
  )
}

export default BlogPost  
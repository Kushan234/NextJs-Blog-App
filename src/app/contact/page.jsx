import React from 'react'
import Image from 'next/image'
import contactLogo from '../../../public/contactLogo.png'

const Contact = () => {
  return (
    <div className="px-40 ml-16">
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-center">Let's Keep In Touch</h1>
        
        <div className="grid grid-cols-2">

          <div className="w-[80%] mt-14" >
            <Image src={contactLogo} alt='contact'/>
          </div>

          <div className="flex flex-col w-[88%]">
            
            <input className='h-16 px-4 mt-20 border border-gray-400 rounded-md '
             type="text" name='Name' placeholder='Name'/>
             
            <input className='h-16 px-4 mt-8 border border-gray-400 rounded-md '
             type="email" name="" id="" placeholder='Email'/>
             
            <textarea className='h-40 px-4 py-2 mt-8 border border-gray-400 rounded-md'
             name="" id="" placeholder='Message'></textarea>
             
            <div className="mt-10">
               <button className='w-48 bg-green-700 h-14'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
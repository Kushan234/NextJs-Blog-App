"use client"
import Link from 'next/link'
import React from 'react'

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  }
  
  return (
    <div className="px-40 ml-16">
      <div className="mt-10">
        <h1 className='mb-10 text-2xl font-bold text-center'>Register</h1>
        
      <form
      onSubmit={handleSubmit}
       className="grid grid-cols-1 gap-10 px-80">
        
          <input type="text" 
        placeholder='username'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        required/>

          <input type="email" 
        placeholder='email'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        required/>

          <input type="password" 
        placeholder='password'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        required/>

        <button className='text-white bg-green-700 w-[32rem] h-14'>Register</button>
      </form>
     <div className='py-10 ml-80'>
       <Link href='/dashboard/login'>Login with an existing account</Link>
     </div>
      </div>
    </div>
  )
}

export default Register
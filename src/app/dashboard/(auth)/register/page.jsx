"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {  useState } from 'react'

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
     const password = e.target[2].value;
    
    try {
      const res = await fetch("/api/auth/register", {
        method:"POST",
        headers:{
         "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });
      
      res.status === 201 && router.push('/dashboard/login?success=Account has been created successfully'); 
    } catch (error) {
      setErr(true); 
    }
  }
  
  return (
    <div className="px-40 ml-16">
      <div className="mt-20">
        <h1 className='mb-10 text-2xl font-bold text-center'>Register</h1>
        
      <form
      onSubmit={handleSubmit}
       className="grid grid-cols-1 gap-10 px-80">
        
          <input type="text" 
        placeholder='username'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        name='name'
        required/>

          <input type="email" 
        placeholder='email'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        name='email'
        required/>

          <input type="password" 
        placeholder='password'
        className='w-full p-2 px-4 bg-transparent border border-gray-400 rounded-md'
        name='password'
        required/>

        <button className='text-white bg-green-700 w-[32rem] h-12 rounded-md'>Register</button>
      </form>
     {err && <p className="mt-4 text-sm text-red-500">Something went wrong, please try again.</p>}

     <div className='py-10 ml-80'>
       <Link href='/dashboard/login'>Login with an existing account</Link>
     </div>
      </div>
    </div>
  )
}

export default Register
"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {

  const session = useSession();
  const router = useRouter();
  
  if(session.status === "loading"){
    return <p>Loading...</p>
  }

  if(session.status === "authenticated"){
  router?.push ('/dashboard');
  }
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
     const password = e.target[1].value;

     signIn("credentials", {email,password});
    }
    
  return (

     <div className="px-40 ml-16">
      <div className="mt-20">
        <h1 className='mb-10 text-2xl font-bold text-center'>Login</h1>
        
      <form
      onSubmit={handleSubmit}
       className="grid grid-cols-1 gap-10 px-80">

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

      
       <button className='text-white bg-green-700 w-[32rem] h-12 rounded-md'>Login</button>
      </form>
      
       <button className='text-white bg-red-400 w-[32rem] h-10 ml-80 mt-8 rounded-md' 
        onClick={() => signIn("google")}>
        Login With Google
      </button>
      </div>
    </div>
   
  );
};

export default Login;

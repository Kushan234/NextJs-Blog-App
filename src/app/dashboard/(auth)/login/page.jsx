"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
     const password = e.target[1].value;

     signIn("credentials", {email,password});
    }
    
  return (

     <div className="px-40 ml-16">
      <div className="mt-10">
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

      
       <button className='text-white bg-green-700 w-[32rem] h-14'>Login</button>
      </form>
      
       <button className='text-white bg-green-700 w-[32rem] h-14'
        onClick={() => signIn("google")}>
        Login With Google
      </button>
      </div>
    </div>
   
  );
};

export default Login;

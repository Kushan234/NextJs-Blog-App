"use client"    
import React from 'react' 
import { signIn } from 'next-auth/react'


const Login = () => {
  return (
    <div className="">
      <button onClick={() => signIn("google")}> Login With Google </button>
    </div>
  )
}

export default Login
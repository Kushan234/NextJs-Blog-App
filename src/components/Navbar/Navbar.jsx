"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links =[
 
    {
    id:  1,
    title: "Home",
    url: "/"
  },
  {
    id:  2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id:  3,
    title: "Blog",
    url: "/blog"
  },
  {
    id:  4,
    title: "About",
    url: "/about"
  },
  {
    id:  5,
    title: "Contact",
    url: "/contact"
  },
  {
    id:  6,
    title: "Dashboard",
    url: "/dashboard"
  }
]


const Navbar = () => {

  const session =useSession();
  return (
    <div className='flex justify-around py-8 text-lg cursor-pointer'>
      <Link className='mt-2 text-xl font-extrabold text-green-700' 
       href="/">lamamia </Link>
   
      <div className="flex gap-3 mt-2">
       <DarkModeToggle />
        {
          links.map(link =>(
            
            <Link className='gap-5 mt-2 mr-4'
             key={link.id} href={link.url}>{link.title}</Link>
          ))
        }

         {session.status === "authenticated" && (
         <button onClick={signOut}
          className='h-10 text-white bg-green-700 w-28'
          >Logout</button>
         )}
      </div>
     
    </div>
  )
}

export default Navbar
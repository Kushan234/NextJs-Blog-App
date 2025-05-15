"use client"
import Link from 'next/link'
import React from 'react'

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

  return (
    <div className='flex justify-around py-8 text-lg cursor-pointer'>
      <Link href="/">lamamia </Link>

      <div className=" gap-5">
        {
          links.map(link =>(
            
            <Link className='gap-5 mr-4'
             key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
         <button onClick={()=>console.log("Logged out..")}
          className='bg-primaryButton text-white w-24 h-8'
          >Logout</button>
      </div>
     
    </div>
  )
}

export default Navbar
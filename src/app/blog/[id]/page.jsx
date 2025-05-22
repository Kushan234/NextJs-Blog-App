import React from 'react'
import Image from 'next/image' 
import profile from '../../../../public/2.webp'
import first from "../../../../public/blog.jpg";
import { notFound } from 'next/navigation';

async function getData(id) {

  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache: 'no-store'}  // fetch fresh data on every fetch request
);
  
  if(!res.ok){
   return notFound();
  }
  
  return res.json();
  
}

 export async function generateMetadata({params}){
  
   const post = await getData(params.id);
   return{
    title: post.title,
    description: post.desc,
   };
 }

 
const BlogPost = async ({params}) => {
   
  const data = await getData(params.id)
  return (
    <div className="px-40 ml-16">
      <div className="flex mt-20">
        <div className="w-[70%] text-left">
        
        <h3 className='mb-5 text-xl font-bold'>{data.title}</h3>
              
              <p className='text-lg '>{data.desc}</p>
              
              <Image className='w-20 rounded-full mt-14' 
              src={profile} alt='profile'/>
              <p className='ml-20 -mt-10 text-lg'>{data.username}</p>
      </div>
      
      <div className="mr-16">
        <Image className='h-80 w-[45rem]'
         src={first} alt='blogpost'/>
      </div>
      
      </div>
      
       <div className="mt-10 mr-16 text-lg text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost  
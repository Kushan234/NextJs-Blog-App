import React from "react";
import Link from "next/link";
import Image from "next/image";


async function getData() {

  const res = await fetch("http://localhost:3000/api/posts",{
    cache: 'no-store'}  // fetch fresh data on every fetch request
);
  
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
  
}

const Blog = async () => {

    const data = await getData();
  return (
    <div className="px-40 ml-16">
     <div className="">
      {data.map((item,index)=>(
       <Link key={index} href={`/blog/${item._id}`}>
        <div  className="flex mt-10">
          <Image
           src={item.img}  
          className="w-96 h-60"
          width={400} height={250}
          alt="blog image"  />

          <div className="mt-10 ml-5">
            <h3 className="mb-3 text-xl">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      </Link>
      ))}
     </div>
    </div>
  );
};

export default Blog;

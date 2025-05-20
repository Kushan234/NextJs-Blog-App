import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog from "../../../public/blog.jpg";

async function getData() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
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
      {data.map((item)=>(
       <Link key={item.id} href="/blog/testId">
        <div  className="flex mt-10">
          <Image className="w-96 h-60"
           src={blog} alt="blog image" />

          <div className="mt-10 ml-5">
            <h3 className="mb-3 text-xl">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      </Link>
      ))}
     </div>
    </div>
  );
};

export default Blog;

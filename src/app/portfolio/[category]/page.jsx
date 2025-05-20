import React from "react";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";


const getData = (cat)=>{
  
  const data =  items[cat]
  
  if(data){
    return data
  }
  
  return notFound();
}

const Category = ({ params }) => {
  console.log(params);

  const data = getData(params.category)

  return (
    <div className="px-40 ml-16">
      <div className="-mt-5">
        <h1 className="ml-5 text-xl font-bold text-green-400">
          {params.category}
        </h1>
        
      {data.map((item)=>(       
        <div key={item.id} className="flex mt-12 ml-5">
          <div className="w-[90%] mt-14 ">
            <h1 className="text-5xl font-bold">{item.title}</h1>

            <p className="px-20 mt-5 -ml-20 text-justify">
            {item.desc}
            </p>

            <button className="w-48 mt-5 bg-green-700 h-14">See more</button>
          </div>
          <div className="w-[90%]">
            <img src={item.image} 
            className="w-[30rem] h-[20rem]" 
            alt="image" fill={true}/>
          </div>
        </div>
       ))}
      
      </div>
    </div>
  );
};

export default Category;

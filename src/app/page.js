import React from "react";
import Image from 'next/image'
import heroImg from '../../public/education3.png'

export default function Home() {
  return (
   
    <div className="flex px-40 mt-10 ml-16">
      <div className="mt-28 w-[30rem] ">
        <h1 className="mb-10 text-6xl font-extrabold">Better design for your digital products.</h1>

        <p className="text-lg ">Turning you'r idea into reality.We bring together the teams from the global tech industry.</p>
      
        <button className="w-40 h-12 mt-8 text-white bg-green-700 ">
          See our works
        </button>
      </div>

      <div className="ml-10">
      <Image src={heroImg } width={550} alt="hero"/>
      </div>
    </div>

  );
}

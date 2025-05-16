import React from 'react'
import Image from 'next/image'
import first from '../../../../public/1.jpeg'

const Category = ({params}) => {
  console.log(params);
  
  return (
    <div className="px-40 ml-16">
      <div className="-mt-5">
      <h1 className="ml-5 text-xl font-bold text-green-400">{params.category}</h1>

      <div className="flex mt-12 ml-5">

        <div className="w-[90%] mt-14 ">
          <h1 className='text-5xl font-bold'>Creative Portfolio</h1>

          <p className='px-20 mt-5 -ml-20 text-justify'> Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface ?</p>

        <button className='w-48 mt-5 bg-green-700 h-14' >See more</button>
      </div>
      <div className="w-[90%]">
        <Image className='w-[30rem] h-[20rem]'
         src={first} alt='image'/>
      </div>
      </div>


        <div className="flex mt-40 ml-5">

        <div className="w-[90%] mt-14 ">

           <Image className='w-[30rem] h-[20rem]'
         src={first} alt='image'/>
         
      </div>
      <div className="w-[90%]">
        <h1 className='text-5xl font-bold'>Creative Portfolio</h1>

          <p className='px-20 mt-5 -ml-20 text-justify'> Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface ?</p>

        <button className='w-48 mt-5 bg-green-700 h-14' >See more</button>
      </div>
      </div>



        <div className="flex mt-40 ml-5">

        <div className="w-[90%] mt-14 ">
          <h1 className='text-5xl font-bold'>Creative Portfolio</h1>

          <p className='px-20 mt-5 -ml-20 text-justify'> Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface ?</p>

        <button className='w-48 mt-5 bg-green-700 h-14' >See more</button>
      </div>
      <div className="w-[90%]">
        <Image className='w-[30rem] h-[20rem]'
         src={first} alt='image'/>
      </div>
      </div>


        <div className="flex mt-40 ml-5">

        <div className="w-[90%] mt-14 ">

           <Image className='w-[30rem] h-[20rem]'
         src={first} alt='image'/>
         
      </div>
      <div className="w-[90%]">
        <h1 className='text-5xl font-bold'>Creative Portfolio</h1>

          <p className='px-20 mt-5 -ml-20 text-justify'> Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface ?</p>

        <button className='w-48 mt-5 bg-green-700 h-14' >See more</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Category
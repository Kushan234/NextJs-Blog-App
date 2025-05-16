import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import illustrations from '../../../public/illustrations2.jpg'
import phone from '../../../public/phone.jpg'
import laptop from '../../../public/laptop3.jpg'

const Portfolio = () => {
  return (
    
    <div className="px-40 ml-16">
      <div className="">
   
        <h3 className='mb-5 text-xl'>Choose a gallery</h3>

      <div className="flex gap-20">
      <Link href='/portfolio/illustrations'>
          <div className="border-4 rounded-md ">
            <Image className='w-80 h-[27rem]'
             src={illustrations} alt='illustration'/>
             <span className='absolute -mt-16 text-3xl font-bold ml-36 '>Illustrations</span>
          </div>
      </Link>

          <Link href='/portfolio/websites'>
           <div className="border-4 rounded-md ">
            <Image className='w-80 h-[27rem] '
             src={phone} alt='phone'/>
             <span className='absolute -mt-16 text-3xl font-bold ml-36 '>Websites</span>
          </div>

          </Link>
          
          <Link href='/portfolio/applications'>
            <div className="border-4 rounded-md">
            <Image className='relative bg-cover w-80 h-[27rem]'
             src={laptop} alt='illustration'/>
             <span className='absolute ml-32 -mt-16 text-3xl font-bold '>Applications</span>
          </div>
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default Portfolio
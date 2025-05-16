import React from 'react'

const layout = ({children}) => {
  return (
    <div className="mt-16">
         <h1 className='mt-12 mb-10 ml-56 font-extrabold text-7xl'>Our Works</h1>
         {children}
    </div>
  )
}

export default layout
'use client'
import React from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from '../../../context/ThemeContext.js';

const DarkModeToggle = () => {
    
    const {darkMode, setDarkMode} = useTheme();
  return (
    
    <div className={`w-16 border-2 h-9 rounded-2xl relative cursor-pointer 
    ${darkMode? "bg-black" : "bg-white"}`}
    onClick={()=>setDarkMode(prev => !prev)}
    >
        
        <div className={`absolute mt-1 ml-1 bg-green-700 rounded-full h-7 w-7 transition-all  duration-300 
            ${darkMode? 'right-1 bg-yellow-400' : 'left-1 bg-green-700'}`}></div>
        <div className="flex mt-3 ">
                <IoSunnySharp className='w-10 h-3 '/>
                  <FaMoon className='w-10 h-3 -ml-2'/>
        </div>
    </div>
  )
}

export default DarkModeToggle
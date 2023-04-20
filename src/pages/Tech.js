import React from 'react'
import { DiAndroid, DiCss3, DiJavascript, DiNodejs, DiPython, DiReact, } from "react-icons/di";

const Tech = () => {
  return (
    <>

      <h1 className='text-center text-3xl font-bold mb-11'>Technologies I use</h1>
      <div className='grid grid-cols-4 px-7 justify-items-center gap-y-4    md:grid-cols-2 sm:grid-cols-1'>

        <DiAndroid className='text-center' size={200} />
        <DiCss3 size={200} />
        <DiJavascript size={200} />
        <DiNodejs className='animate-bounce' size={200} />
        <DiReact className='hover:scale-125 hover:text-pink-600 ease-in-out duration-500' size={200} />
        <DiPython size={200} />
      </div>


    </>
  )
}

export default Tech
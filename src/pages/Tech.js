import React from 'react'
import { DiAndroid, DiCss3, DiJavascript, DiNodejs, DiPython, DiReact, } from "react-icons/di";

const Tech = () => {
  return (
    <>

      <h1 className='text-center text-3xl font-bold mb-11'>Technologies I use</h1>
      <div className='grid grid-cols-4 px-7 justify-items-center gap-y-4 mmd:grid-cols-2 msm:grid-cols-1  mlg:grid-cols-3'>

        <DiAndroid className='w-full' size={200} />
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
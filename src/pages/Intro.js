import React from 'react'

const Intro = () => {
  return (
    <div>


      <h1 className='text-center mb-6 text-2xl'>Who am I</h1>
      <div className='flex justify-center  space-y-20'>


        <div className='h-[400px] w-[400px] rounded-full bg-black border-4 border-green-500 text-white flex  justify-center  items-center flex-col'>
          <p className='text-center'>Name: John Doe</p>
          <p>Email: john@fmail.com</p>
          <p>Address: some place</p>
          <p>Tel: 9999999999</p>


        </div>

      </div>
    </div>
  )
}

export default Intro
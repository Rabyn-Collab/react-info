import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center px-10 sm:grid-cols-1'>
      <div className="display-image h-[500px]">
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_0mifx6b5.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>


      <div className="info space-y-2 sm:text-center">

        <h1 className='text-2xl font-bold'>Hi, I am John </h1>
        <h3 className='text-pink-700'>Some Dev, Freelancer, Rounder</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam doloremque natus perferendis cumque consequatur harum, quasi quidem, nihil eius, sequi qui animi. Reprehenderit, placeat praesentium.</p>


      </div>





    </div>
  )
}

export default Display
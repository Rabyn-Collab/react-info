import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path>
      </svg>
      <div className='flex justify-center'>
        <div className='text-white absolute bottom-[20%] text-center '>
          <h1>Develop By</h1>
          <p>Some one Anonymous</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
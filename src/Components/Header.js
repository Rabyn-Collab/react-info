import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isShow, setShow] = useState(false);


  return (
    <header className='flex space-x-5 justify-between px-5 py-4 bg-black text-white items-baseline sticky top-0 z-10'>
      <div>
        <NavLink to='/' className='text-xl'>React</NavLink>
        {isShow && <div className='msm:flex msm:flex-col space-y-2 mt-4 hidden '>
          <NavLink to='about' className='hover:bg-white hover:text-black hover:p-1'>About Page</NavLink>
          <NavLink to='contact' className='hover:bg-white hover:text-black hover:p-1'>Contact Page</NavLink>
        </div>
        }

      </div>

      <div className='hidden msm:flex'>
        <button onClick={() => setShow(!isShow)}>
          {isShow ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
      </div>

      <div className='space-x-5 msm:hidden'>
        <NavLink to='about' className='hover:bg-white hover:text-black hover:p-1'>About Page</NavLink>
        <NavLink to='contact' className='hover:bg-white hover:text-black hover:p-1'>Contact Page</NavLink>
      </div>

    </header>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='flex bg-black text-white px-9 justify-between py-2 items-center'>

      <NavLink to='/' className='text-xl'>TMDB</NavLink>

      <nav className='space-x-5'>
        <NavLink className='hover:bg-pink-500' to='add' >Popular</NavLink>
        <NavLink to='add' className='hover:bg-pink-500' >TopRated</NavLink>
        <NavLink to='add' className='hover:bg-pink-500' >UpComning</NavLink>

      </nav>

    </div>
  )
}

export default Headers
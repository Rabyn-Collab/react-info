import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ m }) => {

  return (
    <header className='flex space-x-5 justify-between px-5 py-4 bg-black text-white items-baseline'>
      <h1 className='text-xl'>React</h1>

      <div className='space-x-5'>
        <NavLink to='about'>About Page</NavLink>
        <NavLink to='contact'>Contact Page</NavLink>
      </div>

    </header>
  )
}

export default Header
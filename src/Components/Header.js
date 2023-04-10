import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ m }) => {

  return (
    <header className='flex space-x-5'>
      <h1>This a header</h1>

      <NavLink className='active:text-pink-800' to='about'>About Page</NavLink>
      <Link to='contact'>Contact Page</Link>
    </header>
  )
}

export default Header
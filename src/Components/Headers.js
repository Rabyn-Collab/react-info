import { useFormik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Headers = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movie/search/${val.search}`);
    }
  });
  return (
    <div className='flex bg-black text-white px-9 justify-between py-2 items-center sticky top-0 z-20'>

      <NavLink to='/' className='text-xl'>TMDB</NavLink>

      <nav className='space-x-5 flex justify-end'>
        <NavLink className='hover:bg-pink-500' to='/movie/popular' >Popular</NavLink>
        <NavLink to='/movie/top_rated' className='hover:bg-pink-500' >TopRated</NavLink>
        <NavLink to='/movie/upcoming' className='hover:bg-pink-500' >UpComning</NavLink>
        <form onSubmit={formik.handleSubmit} className='w-[40%]'>
          <input

            onChange={formik.handleChange}
            value={formik.values.search}

            type="text" placeholder='search' name='search' className='outline-none pl-2 text-black caret-green-700 py-[2px]' />
        </form>



      </nav>

    </div>
  )
}

export default Headers
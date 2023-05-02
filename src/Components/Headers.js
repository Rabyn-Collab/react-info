import { useFormik } from 'formik'
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
      resetForm();
    }


  });

  return (
    <div className='flex bg-black text-white px-9 justify-between py-3 items-center sticky top-0 z-20'>

      <NavLink to='/' className='text-xl'>TMDB</NavLink>

      <nav className='space-x-5 flex'>
        <NavLink className='hover:bg-pink-500' to='/movie/popular' >Popular</NavLink>
        <NavLink to='/movie/top_rated' className='hover:bg-pink-500' >TopRated</NavLink>
        <NavLink to='/movie/upcoming' className='hover:bg-pink-500' >UpComning</NavLink>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className='outline-none px-2 text-black'
              onChange={formik.handleChange}
              name='search'
              value={formik.values.search}
              type="text" placeholder='search movie' />
          </div>


        </form>

      </nav>

    </div>
  )
}

export default Headers
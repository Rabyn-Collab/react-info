import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MovieCategory from './pages/MovieCategory'
import MovieDetail from './pages/MovieDetail'


const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path='movie/:category' element={<MovieCategory />} />
          <Route path='movie/detail/:id' element={<MovieDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
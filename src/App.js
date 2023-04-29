import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MovieCategory from './pages/MovieCategory'
import MovieDetail from './pages/MovieDetail'
import MoviePage from './pages/MoviePage'
import SearchMovie from './pages/SearchMovie'


const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path='movie/:category' element={<MovieCategory />} />
          <Route path='movie/detail/:id' element={<MovieDetail />} />
          <Route path='movie/:category/:page' element={<MoviePage />} />
          <Route path='movie/search/:searchText' element={<SearchMovie />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
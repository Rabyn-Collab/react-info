import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<Home />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
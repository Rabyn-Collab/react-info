import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayOut from './pages/RootLayOut'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />

          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>
    </>
  )
}

export default App
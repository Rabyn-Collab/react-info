import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'
import RootLayOut from './pages/RootLayOut'
import Sample from './pages/Sample'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} >
            <Route path='sample' element={<Sample />} />
          </Route>
          <Route path='contact' element={<Contact />} />

          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayOut from './pages/RootLayOut'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'
import AddForm from './Components/AddForm'

const App = () => {
  return (
    <>
      <AddForm />

      {/* <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>



      </Routes> */}
    </>
  )
}

export default App
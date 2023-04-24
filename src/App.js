import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import AddForm from './Components/AddForm'
import Home from './pages/Home'
import { data } from './features/infoSlice'
import du from './features/infoSlice'

const App = () => {


  return (
    <>
      <AddForm />
      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AddForm />} />
          <Route path='*' element={<h1>Page not Found here</h1>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
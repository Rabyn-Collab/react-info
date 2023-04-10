import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </>
  )
}

export default App
import React from 'react'
import Header from '../Components/Header'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Components/Footer';

const RootLayOut = () => {
  const m = useLocation();
  console.log(m);

  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayOut
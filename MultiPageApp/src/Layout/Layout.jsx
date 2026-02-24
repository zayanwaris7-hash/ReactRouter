import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
function Layout() {
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
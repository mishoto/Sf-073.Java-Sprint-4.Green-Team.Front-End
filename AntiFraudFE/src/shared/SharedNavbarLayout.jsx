import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom";

const SharedNavbarLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
    </>
  )
}

export default SharedNavbarLayout

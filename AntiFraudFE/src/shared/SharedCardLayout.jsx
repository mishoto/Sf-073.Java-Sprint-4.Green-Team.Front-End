import React from 'react'
import CardNavbar from '../components/CardNavbar'
import {Outlet} from "react-router-dom";

const SharedCardLayout = () => {
  return (
    <>
      <CardNavbar />
        <Outlet/>
    </>
  );
}

export default SharedCardLayout

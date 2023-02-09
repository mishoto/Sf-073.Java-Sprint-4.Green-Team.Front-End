import React from 'react'
import CardNavbar from '../components/CardNavbar'
import {Outlet} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const SharedCardLayout = () => {
  return (
    <>
      <CardNavbar />
      <Outlet/>
    </>
  );
}

export default SharedCardLayout

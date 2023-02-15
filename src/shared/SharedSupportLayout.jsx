import React from 'react'
import {Outlet} from "react-router-dom";
import SupportPanel from "../pages/SupportPanel";

const SharedSupportLayout = () => {
  return (
    <>
      <SupportPanel />
      <Outlet/>
    </>
  );
}

export default SharedSupportLayout

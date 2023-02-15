import React from 'react'
import {Outlet} from "react-router-dom";
import SupportPanel from "../pages/SupportPanel";

const SharedSupportLayout = () => {
  return (
    <>
      <SupportPanel />
    </>
  );
}

export default SharedSupportLayout

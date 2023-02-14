import { Link } from "react-router-dom";
import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import { useNavigate } from "react-router-dom";
import SupportNavbar from "../components/SupportNavbar";

const SupportPanel = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();



  return (
   <>
       <SupportNavbar />
   <h3>Hello from Support Panel</h3>
   </>
  );
};

export default SupportPanel;

import {Link, Route} from "react-router-dom";
import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import { useNavigate } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import StolenCard from "../components/StolenCard";
import SingleTransaction from "../components/SingleTransaction";
import IpAddress from "../components/IpAddress";

const SupportPanel = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  function handleLogout() {
    appDispatch({ type: "logout" });
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <nav className="nav-header">
          <ul className="links">
            <li>
              Hello, <strong>{appState.user.username}</strong>
            </li>
            <li>
              <Link to="allUsers">All users</Link>
            </li>
            <li>
              <Link to="suspiciousIp">Suspicious IPs</Link>
            </li>
            <li>
              <Link to="stolenCards">StolenCards</Link>
            </li>
            <li>
              <Link to="/transaction-history">Transactions</Link>
            </li>
            <li>
              <Link to="/change-feedback">Feedback</Link>
            </li>
          </ul>

        </nav>
        <div>
          <button onClick={handleLogout} className="btn btn-block">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SupportPanel;

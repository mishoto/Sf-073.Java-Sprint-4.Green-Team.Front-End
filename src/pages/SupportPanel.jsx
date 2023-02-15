import { Link } from "react-router-dom";
import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import { useNavigate } from "react-router-dom";

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
              <Link to="users">Stolen cards</Link>
            </li>
            <li>
              <Link to="suspicious-ip">Suspicious IPs</Link>
            </li>
            <li>
              <Link to="cards">Transactions</Link>
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

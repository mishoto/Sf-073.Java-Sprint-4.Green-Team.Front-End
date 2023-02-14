import React, {useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

const MerchantPanel = () => {
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)
    const navigate = useNavigate();

    function handleLogout() {
        appDispatch({type: "logout"})
        navigate("/")
    }

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <nav className='nav-header'>
                    <ul className='links'>
                        <li>
                            Hello, <strong>{appState.user.username}</strong>
                        </li>
                        <li>
                            <Link to='/transaction'>Create transaction</Link>
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
}

export default MerchantPanel

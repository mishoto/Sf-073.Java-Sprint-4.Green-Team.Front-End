import React, {useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

const AdminPanel = () => {
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
                    <div>
                        <ul className='links'>
                            <li>
                               Hello, <strong>{appState.user.username}</strong>
                            </li>
                            <li>
                                <Link to='/allUsers'>All users</Link>
                            </li>
                            <li>
                                <Link to='/admin/changeStatus'>Change user status</Link>
                            </li>
                            <li>
                                <Link to='/admin/changeRole'>Change user role</Link>
                            </li>
                            <li>
                                <Link to='/admin/deleteUser/'>Delete user</Link>
                            </li>
                        </ul>
                    </div>
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

export default AdminPanel

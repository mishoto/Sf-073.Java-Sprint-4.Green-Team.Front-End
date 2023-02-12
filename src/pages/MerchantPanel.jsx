import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import StateContext from "../StateContext"

const MerchantPanel = () => {
    const appState = useContext(StateContext)
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <nav className='nav-header'>
                    <ul className='links'>
                        <li>
                            Hello, <strong>{appState.user.username}</strong>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='dashboard'>Create transaction</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}

export default MerchantPanel

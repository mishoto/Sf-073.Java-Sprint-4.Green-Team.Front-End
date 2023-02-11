import React from 'react'
import {Link} from "react-router-dom";

const SupportPanel = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <nav className='nav-header'>
                    <ul className='links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='dashboard'>All users</Link>
                        </li>
                        <li>
                            <Link to='users'>Stolen cards</Link>
                        </li>
                        <li>
                            <Link to='cards'>Suspicious IPs</Link>
                        </li>
                        <li>
                            <Link to='cards'>Transactions</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}

export default SupportPanel

import React from 'react'
import {Link} from "react-router-dom";

const AdminPanel = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <nav className='nav-header'>
                    <ul className='links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='dashboard'>See all users</Link>
                        </li>
                        <li>
                            <Link to='users'>Change user status</Link>
                        </li>
                        <li>
                            <Link to='cards'>Change user role</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}

export default AdminPanel

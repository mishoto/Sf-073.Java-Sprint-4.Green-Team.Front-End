import React from 'react'
import {Link} from "react-router-dom";

const MerchantPanel = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <nav className='nav-header'>
                    <ul className='links'>
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

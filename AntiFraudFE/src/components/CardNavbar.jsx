import React from 'react'
import {Link} from "react-router-dom";

const CardNavbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                    <li>
                        <Link to='/cards'>Cards</Link>
                    </li>
                    <li>
                        <Link to='/transactions'>Transactions</Link>
                    </li>
                    <li>
                        <Link to='/ip'>Ip</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default CardNavbar

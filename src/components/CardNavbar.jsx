import React from 'react'
import {Link, Route} from "react-router-dom";
import AllUsers from "./AllUsers";
import StolenCard from "./StolenCard";
import SingleTransaction from "./SingleTransaction";

const CardNavbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <nav className='nav-header'>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='allUsers'>Users454545</Link>
                    </li>
                    <li>
                        <Link to='stolenCards'>Cards</Link>
                    </li>
                    <li>
                        <Link to='transactions'>Transactions</Link>
                    </li>

                </ul>
            </nav>
        </div>
    </nav>
  );
}

export default CardNavbar

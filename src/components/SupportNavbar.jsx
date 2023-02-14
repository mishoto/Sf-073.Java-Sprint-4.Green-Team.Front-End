import React from 'react'
import {Link, useNavigate} from "react-router-dom";

const SupportNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        navigate("/");
    }

    const handleBack = ()=>{
        navigate(-1);
    }

  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <nav className='nav-header'>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='history'>History</Link>
                    </li>
                    <li>
                        <Link to='allUsers'>AllUsers</Link>
                    </li>
                    <li>
                        <Link to='stolenCards'>StolenCards</Link>
                    </li>
                    <li>
                        <Link to='transactions'>Transactions</Link>
                    </li>
                    <li>
                        <Link to='suspiciousIp'>SuspiciousIp</Link>
                    </li>
                </ul>
                <div>
                    <button onClick={handleLogout} className="btn btn-block">
                        Sign Out
                    </button>
                </div>
                <div>
                    <button onClick={handleBack} className="btn btn-block">
                        Back
                    </button>
                </div>
            </nav>
        </div>
    </nav>
  );
}

export default SupportNavbar

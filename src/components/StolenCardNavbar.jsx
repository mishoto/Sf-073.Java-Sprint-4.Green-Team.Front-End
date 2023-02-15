import React from 'react'
import {Link, useNavigate} from "react-router-dom";

const StolenCardNavbar = () => {
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
                            <Link to='/support/createCard'>create card</Link>
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
    )
}

export default StolenCardNavbar

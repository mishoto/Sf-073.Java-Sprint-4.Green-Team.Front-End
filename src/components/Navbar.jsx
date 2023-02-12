import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='signIn'>SignIn</Link>
            </li>
            <li>
              <Link to='signUp'>SignUp</Link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

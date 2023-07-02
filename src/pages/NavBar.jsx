import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaMountains } from "react-icons/fa6";

// button component

function NavBar() {
  return (
    <>
      <nav className='nav-bar'>
        <div className="navbar-container">
            {/* use link to replace a tag */}
            <Link
                to='/'
                className='navbar-logo'
            >
                HIKE <FaMountains />
            </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar;

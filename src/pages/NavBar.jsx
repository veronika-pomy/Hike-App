import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons'

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
                HIKE <FontAwesomeIcon icon={faMountain} />
            </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar;

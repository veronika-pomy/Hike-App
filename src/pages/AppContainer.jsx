import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.css';

import NavBar from './NavBar';

const AppContainer = () => {
  return (
    <>
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' exact />
            </Routes>
        </Router>
    </>
  )
}

export default AppContainer;

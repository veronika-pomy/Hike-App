import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/AppContainer.css';

import NavBar from './NavBar';
import Home from './Home';

const AppContainer = () => {
  return (
    <>
        <Router>
            <NavBar />
            {/* <Home /> */}
            <Routes>
                <Route path='/' exact element={<Home/>} />
            </Routes>
        </Router>
    </>
  )
}

export default AppContainer;

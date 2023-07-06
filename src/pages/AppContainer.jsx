import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/AppContainer.css';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import SignUp from './SignUp';

// TODO: Add a SignIn page and a link to it
// TODO: Add Dashboard page for a user who signed in
// TODO: Add Preview component - maybe YouTube API can be used to play a video here?

const AppContainer = () => {
  return (
    <>
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/services' exact element={<Services />} />
                <Route path='/sign-up' exact element={<SignUp />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppContainer;

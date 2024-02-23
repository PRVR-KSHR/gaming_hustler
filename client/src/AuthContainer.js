import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

const AuthContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoginUser = (user) => {
    // Set user data or token in state/localStorage
    setIsLoggedIn(true);
  };

  const setLogoutUser = () => {
    // Clear user data or token from state/localStorage
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setLogoutUser={setLogoutUser} />
      <Routes>
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default AuthContainer;


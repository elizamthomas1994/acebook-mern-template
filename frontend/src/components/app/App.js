import './App.css';
import LoginForm from '../auth/LoginForm';
import Navbar from '../Navbar/Navbar';
import SignUpForm from '../user/SignUpForm';
import React, { useState } from 'react';
import FeedPage from '../feed/FeedPage';
import Profile from '../profile/profile';
import ProfileEditor from '../profileEditor/profileEditor';

import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';

const App = ({ navigate }) => {
  return (
    <div>
      {!(window.location.pathname).includes('signup') &&
        !(window.location.pathname).includes('login') &&
        <Navbar /> }
      <div>
        <Routes>
          <Route path="/posts" element={<FeedPage navigate={useNavigate()} />} />
          <Route
            path="/login"
            element={<LoginForm navigate={useNavigate()} />}
          />
          <Route
            path="/signup"
            element={<SignUpForm navigate={useNavigate()} />}
          />
          <Route
            path="/users/:id"
            element={<Profile navigate={useNavigate()} />}
          />
          <Route
            path="/profileEditor"
            element={<ProfileEditor navigate={useNavigate()} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

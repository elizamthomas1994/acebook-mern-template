import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar'
import Feed from '../feed/Feed'
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
      <div className='app'>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/posts'  element={<Feed navigate={ useNavigate() }/>}/>
            <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
            <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          </Routes>
        </div>
        </div>
    );
}

export default App;

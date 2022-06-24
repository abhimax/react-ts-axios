import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import NavBar from './components/About';
import {Route, Routes, Navigate } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import About from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/contact/list"/>}></Route>
        <Route path="/contact/list" element={<UserList/>}/>
        <Route path="/contact/id" element={<UserDetails/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

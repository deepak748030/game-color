import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './assets/components/ProtectRoute'; // Correct the import
import createSocketConnection from './hooks/Socket';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/Register';
import Game from './pages/game/Game';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Invite from './pages/Invite';
import Recharge from './pages/Recharge';


const App = () => {
  useEffect(() => {
    createSocketConnection((socket) => {
      socket.emit('message', 'hello world');
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/user" element={<User />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/Invite" element={<Invite />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

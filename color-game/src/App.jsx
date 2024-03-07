import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './assets/components/ProtectRoute'; // Correct the import
import createSocketConnection from './hooks/Socket';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const Register = lazy(() => import('./pages/Register'))
const Game = lazy(() => import('./pages/game/Game'));
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

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
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

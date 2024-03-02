import React, { useEffect } from 'react';
import Game from './pages/Game';
import Login from './pages/Login'
import createSocketConnection from './hooks/Socket';


const App = () => {
  // console.log(process.env.PORT)
  useEffect(() => {
    createSocketConnection((socket) => {
      socket.emit('message', 'hello world')
    })

  }, [])
  return (
    <div>
      {/* <Game />hi */}
      hi

    </div>
  );
};

export default App;
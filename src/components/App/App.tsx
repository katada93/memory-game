import React from 'react';
import { GameDesk } from '../GameDesk/GameDesk';

import './style.css';

export const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Memory</h1>
        <GameDesk />
      </div>
    </div>
  );
};

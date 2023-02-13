import React from 'react';
import { Game } from '../Game/Game';

import './style.css';

export const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Memory</h1>
        <Game />
      </div>
    </div>
  );
};

import React from 'react';
import { Cards } from '../Cards/Cards';
import { Moves } from '../Moves/Moves';
import './style.css';

export const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Memory</h1>
        <div className='game_desk'>
          <Moves title='сделано ходов' count={0} />
          <Cards />
          <Moves title='осталось попыток' count={40} />
        </div>
      </div>
    </div>
  );
};

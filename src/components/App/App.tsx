import React from 'react';
import { Cards } from '../Cards/Cards';
import { Moves } from '../Moves/Moves';

import './style.css';

const TOTAL_MOVES = 40;

export const App = () => {
  const [madeMoves, setMadeMoves] = React.useState(0);

  const increment = () => setMadeMoves(madeMoves + 1);

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Memory</h1>
        <div className='desk'>
          <Moves title='сделано ходов' count={madeMoves} />
          <Cards onMove={increment} />
          <Moves title='осталось попыток' count={TOTAL_MOVES - madeMoves} />
        </div>
      </div>
    </div>
  );
};

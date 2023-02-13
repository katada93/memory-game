import React from 'react';
import shuffle from 'lodash.shuffle';
import { Card } from './Game';

const TOTAL_MOVES = 40;

import fb from '../../assets/firebase.png';
import nginx from '../../assets/nginx.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import ts from '../../assets/ts.png';
import wbp from '../../assets/webpack.png';
import wbs from '../../assets/webstorm.png';

const data: Card[] = [
  { url: fb, selected: false, done: false },
  { url: nginx, selected: false, done: false },
  { url: nodejs, selected: false, done: false },
  { url: react, selected: false, done: false },
  { url: redux, selected: false, done: false },
  { url: ts, selected: false, done: false },
  { url: wbp, selected: false, done: false },
  { url: wbs, selected: false, done: false },
];

export const useGameData = () => {
  const [cards, setCards] = React.useState(shuffle(data.concat(data)));
  const [madeMoves, setMadeMoves] = React.useState(0);

  const increment = () => setMadeMoves(madeMoves + 1);

  return { cards, setCards, totalMoves: TOTAL_MOVES, madeMoves, increment };
};

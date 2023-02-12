import React from 'react';
import shuffle from 'lodash.shuffle';
import { Card } from '../Card/Card';
import './style.css';

import fb from '../../assets/firebase.png';
import nginx from '../../assets/nginx.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import ts from '../../assets/ts.png';
import wbp from '../../assets/webpack.png';
import wbs from '../../assets/webstorm.png';

interface Card {
  image: any;
  selected: boolean;
}

const data: Card[] = [
  { image: fb, selected: false },
  { image: nginx, selected: true },
  { image: nodejs, selected: false },
  { image: react, selected: false },
  { image: redux, selected: true },
  { image: ts, selected: false },
  { image: wbp, selected: false },
  { image: wbs, selected: false },
];

export const Cards = () => {
  const [cards, setCards] = React.useState(shuffle(data.concat(data)));

  return (
    <div className='cards'>
      {cards.map((item, ind) => (
        <Card key={ind} image={item.image} selected={item.selected} />
      ))}
    </div>
  );
};

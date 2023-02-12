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
  url: string;
  selected: boolean;
  done: boolean;
}

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

export const Cards = () => {
  const [cards, setCards] = React.useState(shuffle(data.concat(data)));
  const [pair, setPair] = React.useState<Card[]>([]);

  const addCardToPair = (card: Card) => setPair((prev) => [...prev, card]);
  const clearPair = () => setPair([]);
  const selectCard = (ind: number) =>
    setCards((cards) =>
      cards.map((card, i) => (ind === i ? { ...card, selected: true } : card))
    );
  const deselect = () =>
    setCards((cards) => cards.map((card) => ({ ...card, selected: false })));
  const doneCard = (url: string) =>
    setCards((cards) =>
      cards.map((card) => (card.url === url ? { ...card, done: true } : card))
    );

  const handleClick = (ind: number) => {
    if (pair.length > 1) {
      clearPair();
      deselect();
    }
    addCardToPair(cards[ind]);
    selectCard(ind);
  };

  React.useEffect(() => {
    if (pair.length < 2) {
      return;
    }

    const [card1, card2] = pair;

    if (card1.url === card2.url) {
      clearPair();
      doneCard(card1.url);
    }
  }, [pair.length]);

  return (
    <div className='cards'>
      {cards.map(({ url, selected, done }, ind) => (
        <Card
          key={ind}
          url={url}
          selected={selected}
          done={done}
          onClick={handleClick}
          index={ind}
        />
      ))}
    </div>
  );
};

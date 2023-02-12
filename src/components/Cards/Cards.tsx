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
  console.log('pair length: ', pair.length);

  const handleSelectCard = (ind: number) => {
    if (pair.length > 1) {
      setPair([]);
      setCards((cards) =>
        cards.map((card) => {
          return { ...card, selected: false };
        })
      );
    }
    setPair((prev) => [...prev, cards[ind]]);
    setCards((cards) =>
      cards.map((card, index) => {
        if (ind === index) {
          return { ...card, selected: true };
        }

        return card;
      })
    );
  };

  React.useEffect(() => {
    if (pair.length > 1) {
      const [card1, card2] = pair;
      if (card1.url === card2.url) {
        setPair([]);
        setCards((cards) =>
          cards.map((card) => {
            if (card.url === card1.url) {
              return { ...card, done: true };
            }

            return card;
          })
        );
      }
    }
  }, [pair, setPair, setCards]);

  return (
    <div className='cards'>
      {cards.map(({ url, selected, done }, ind) => (
        <Card
          key={ind}
          url={url}
          selected={selected}
          done={done}
          onSelect={handleSelectCard}
          index={ind}
        />
      ))}
    </div>
  );
};

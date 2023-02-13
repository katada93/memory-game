import React from 'react';
import { Moves } from '../Moves/Moves';
import { Card } from '../Card/Card';
import { useGameData } from './useGameData';

import './style.css';

export interface Card {
  url: string;
  selected: boolean;
  done: boolean;
}

export const Game = () => {
  const { cards, setCards, totalMoves, madeMoves, increment } = useGameData();
  const [pair, setPair] = React.useState<Card[]>([]);

  const addCardToPair = (card: Card) => setPair((prev) => [...prev, card]);
  const clearPair = () => setPair([]);
  const selectCard = (ind: number) =>
    setCards((cards) =>
      cards.map((card, i) => (ind === i ? { ...card, selected: true } : card))
    );
  const deselectCard = () =>
    setCards((cards) => cards.map((card) => ({ ...card, selected: false })));
  const doneCard = (url: string) =>
    setCards((cards) =>
      cards.map((card) =>
        card.url === url ? { ...card, done: true, selected: false } : card
      )
    );

  const handleClick = (ind: number) => {
    if (pair.length > 1) {
      clearPair();
      deselectCard();
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

    increment();
  }, [pair.length]);

  return (
    <div className='desk'>
      <Moves title='сделано ходов' count={madeMoves} />
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
      <Moves title='осталось попыток' count={totalMoves - madeMoves} />
    </div>
  );
};

import React from 'react';
import { Moves } from '../Moves/Moves';
import { Card } from '../Card/Card';
import { useGameData } from './useGameData';

import './style.css';
import { Modal } from '../Modal/Modal';

export interface Card {
  url: string;
  selected: boolean;
  done: boolean;
}

export const GameDesk = () => {
  const {
    cards,
    totalMoves,
    madeMoves,
    increment,
    selectCard,
    deselectCard,
    doneCard,
  } = useGameData();
  const [pair, setPair] = React.useState<string[]>([]);
  const isGameOver = totalMoves === madeMoves;
  const isGameWon = cards.every((card) => card.done);

  const addCardToPair = (cardUrl: string) =>
    setPair((prev) => [...prev, cardUrl]);
  const clearPair = () => setPair([]);
  const handleClick = (currentCardIndex: number) => {
    if (pair.length > 1) {
      clearPair();
      deselectCard();
    }
    addCardToPair(cards[currentCardIndex].url);
    selectCard(currentCardIndex);
  };

  React.useEffect(() => {
    if (pair.length < 2) {
      return;
    }

    const [cardIndex1, cardIndex2] = pair;

    if (cardIndex1 === cardIndex2) {
      clearPair();
      doneCard(cardIndex1);
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
      <Modal
        isOpen={isGameOver || isGameWon}
        onClick={() => window.location.reload()}
      >
        {isGameWon
          ? `Ура, Вы выиграли! это заняло ${madeMoves} ходов`
          : 'Увы, вы прогирали у вас кончились ходы'}
      </Modal>
    </div>
  );
};

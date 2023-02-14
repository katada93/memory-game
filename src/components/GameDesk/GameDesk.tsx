import React from 'react';
import { Moves } from '../Moves/Moves';
import { Card } from '../Card/Card';
import { useGameData } from './useGameData';
import { Modal } from '../Modal/Modal';

import './style.css';

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
    actions,
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
      actions.deselectCard();
    }
    addCardToPair(cards[currentCardIndex].url);
    actions.selectCard(currentCardIndex);
  };

  React.useEffect(() => {
    if (pair.length < 2) {
      return;
    }

    const [card1, card2] = pair;

    if (card1 === card2) {
      clearPair();
      actions.doneCard(card1);
    }

    actions.increment();
  }, [pair.length]);

  return (
    <div className='desk'>
      <Moves title='сделано ходов' count={madeMoves} />
      <div className='cards'>
        {cards.map(({ url, selected, done }, index) => (
          <Card
            key={index}
            url={url}
            selected={selected}
            done={done}
            onClick={handleClick}
            index={index}
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

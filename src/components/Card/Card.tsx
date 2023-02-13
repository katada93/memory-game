import React from 'react';
import { clsx } from 'clsx';

import './style.css';

interface Props {
  url: string;
  selected: boolean;
  done: boolean;
  onClick: (ind: number) => void;
  index: number;
}

export const Card = ({ url, selected, done, onClick, index }: Props) => {
  const classes = clsx('card', { selected, done });

  return (
    <div onClick={() => onClick(index)} className={classes}>
      {selected && <img src={url} alt='Card' />}
    </div>
  );
};

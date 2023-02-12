import React from 'react';
import { clsx } from 'clsx';
import './style.css';

interface Props {
  url: string;
  selected: boolean;
  done: boolean;
  onSelect: (ind: number) => void;
  index: number;
}

export const Card = ({ url, selected, done, onSelect, index }: Props) => {
  const classes = clsx('card', { selected, done });
  return (
    <div onClick={() => onSelect(index)} className={classes}>
      {selected && <img src={url} alt='Card' />}
    </div>
  );
};

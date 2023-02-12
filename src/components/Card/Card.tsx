import React from 'react';
import { clsx } from 'clsx';
import './style.css';

interface Props {
  image: any;
  selected: boolean;
}

export const Card = ({ image, selected }: Props) => {
  const classes = clsx('card', { selected });
  return <div className={classes}>{selected && <img src={image} alt='Card' />}</div>;
};

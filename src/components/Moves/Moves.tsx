import React from 'react';
import './style.css';

interface Props {
  title: string;
  count: number;
}

export const Moves = ({ title, count }: Props) => {
  return (
    <div className='moves'>
      <h3 className='moves__title'>{title}</h3>
      <span className='moves__count'>{count}</span>
    </div>
  );
};

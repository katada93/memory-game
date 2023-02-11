import React from 'react';
import { Card } from '../Card/Card';
import './style.css';

export const Cards = () => {
  return (
    <div className='cards'>
      {Array(16)
        .fill(null)
        .map(() => (
          <Card />
        ))}
    </div>
  );
};

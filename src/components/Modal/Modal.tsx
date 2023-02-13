import React from 'react';

import './style.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  text: string;
}

export const Modal = ({ isOpen, onClick, text }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='Modal' onClick={onClick}>
      <div className='Modal__body'>
        <h3 className='Modal__text'>{text}</h3>
        <button className='Modal__button'>Cыграть еще</button>
      </div>
    </div>
  );
};

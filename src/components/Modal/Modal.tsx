import React from 'react';

import './style.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClick, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='Modal' onClick={onClick}>
      <div className='Modal__body'>
        <h3 className='Modal__text'>{children}</h3>
        <button className='Modal__button'>Cыграть еще</button>
      </div>
    </div>
  );
};

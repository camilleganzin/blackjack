import React from 'react';

const Card = ( { card }) => {
  if (!card) card = {value: '', image: ''}
  
  return (
    <div>
      <img src={ card.image } alt='card' />
    </div>
      
  ) 
}

export default Card
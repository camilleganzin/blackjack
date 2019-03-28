import React from 'react';

const Card = ( { card }) => {
  if (!card) card = {value: '', image: ''}
  
  return (
    <div>
      <h3>{ card.value }</h3>
      <img src={ card.image } alt='card-image' />
    </div>
      
  ) 
}

export default Card
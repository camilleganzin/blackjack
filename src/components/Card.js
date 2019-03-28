import React from 'react';
import Loader from './Loader'

const Card = ( { card }) => {
  
  if (!card) {
    return (
      <Loader />
    ) 
  } else {
    return (
      <div>
        <img src={ card.image } alt='card' />
      </div>
        
    ) 
  }
  
}

export default Card
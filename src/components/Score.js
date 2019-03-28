import React from 'react';

const Score = ({ score, status, lastScore }) => {

  if (!score) score = null
  if (!status) status = null
  
  return (
    <div>
      <h3>Score : { score }</h3>
      { lastScore.length >= 1 &&
        <span>Player Score : { lastScore }</span>
      }
      { score &&
        <div>{ status }</div>
      }
    </div>
      
  ) 
}

export default Score
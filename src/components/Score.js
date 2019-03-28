import React from 'react';

const Score = ({ score, status, lastScore }) => {

  if (!score) score = null
  if (!status) status = null
  
  return (
    <div className="App-score-container">
      <h3>Score : { score }</h3>
      { lastScore.length >= 1 &&
        <span>Player Score : { lastScore }</span>
      }
      { score &&
        <h3>{ status }</h3>
      }
    </div>
      
  ) 
}

export default Score
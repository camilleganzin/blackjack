import React from 'react';

const Score = ({ score, status }) => {

  if (!score) score = null
  if (!status) status = null
  return (
    <div>
      <h3>{ score } / { status }</h3>
    </div>
      
  ) 
}

export default Score
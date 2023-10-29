import React from 'react';

import './Score.css';

function Score({ score }) {

  let angle = score*400

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const strokeOffset = (1 / 4) * circumference;
  const strokeDasharrayBase = (angle / 360) * circumference;
  const strokeDasharray = [strokeDasharrayBase, circumference - strokeDasharrayBase]



  return (
    <div className="Score">
      <div className="Score__title"> <span className='Score__pourcent'>{score*100} % </span>de votre objectif</div>
      <svg>
        <circle r={radius} strokeDasharray={strokeDasharray} strokeDashoffset={strokeOffset} cx="100" cy="70" strokeLinecap="round" />
      </svg>
    </div>
  );
}
export default Score;

import React from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import './AverageSession.css';

function AverageSession({ average }) {

  function modifyAverage(average) {
    const daysLetter = ["L", 'M', 'M', 'J', 'V', 'S', 'D'];
    const modifiedAverage = average.map((d) => {
      const newData = {...d, day: daysLetter[d.day - 1]}
      return newData;
    });
    
    return [{ day: "", sessionLength:modifiedAverage[0].sessionLength}, ...modifiedAverage, { day: "", sessionLength:modifiedAverage[modifiedAverage.length - 1].sessionLength}];
  }

  return (
    <div className="AverageSession">
      <div className="AverageSession__title">Durée moyenne des sessions</div>
      <div className="AverageSession__darkerBg"></div>
      <LineChart
        width={191}
        height={263}
        data={modifyAverage(average)}
        margin={{
          top: 0,
          right: -17,
          left: -22,
          bottom: 0,
        }}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{top: 0,right: 0,left: 0,bottom: 0,}}/>
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={1.5}/>
      </LineChart>
    </div>
  );
}

export default AverageSession;

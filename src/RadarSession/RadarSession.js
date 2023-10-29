import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './RadarSession.css';

function RadarSession({ performance }) {
  return (
    <div className="RadarSession">
      <div className="radarBg">
        <RadarChart cx={92} cy={125} outerRadius={55} width={191} height={263} data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis axisLine={false} tickLine={false}/>
          <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </div>
  );
}

export default RadarSession;

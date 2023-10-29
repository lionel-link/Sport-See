import './DailyActivity.css';
import React from 'react';
import { BarChart, Bar, XAxis, Legend, YAxis, Tooltip, LabelList, CartesianGrid } from 'recharts';

function DailyActivity({ activity }) {

  function modifyActivity(activity) {

    const daysLetter = ['1', '2', '3', '4', '5', '6', '7'];
    const modifiedActivity = activity.map((d, i) => {
      const newData = { ...d, day: daysLetter[i] };
      return newData;
    });
    return modifiedActivity;
  }

  const ThinBarRounded = (props) => {
    const { fill, x, y, width, height } = props;

    const id = 'a' + String(x) + String(y) + String(height);
    const round = 4;
    const correctedHeight = height + round;
    const barWidth = 6;
    const posX = x + (width - barWidth) / 2;

    return (
      <g>
        <defs>
          <clipPath id={id}>
            <rect x={posX} y={y} width={barWidth} height={height} />
          </clipPath>
        </defs>
        <rect x={posX} y={y} width={barWidth} height={correctedHeight} stroke="none" fill={fill} clipPath={`url(#${id})`} rx={round} />
      </g>
    );
  };

  return (
    <div className="DailyActivity">
      <div className="DailyActivity__title">Activité quotidienne</div>
      <BarChart
        width={595}
        height={320}
        data={modifyActivity(activity)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" tickLine={false} />
        <YAxis orientation="right" type="number" axisLine={false} tickLine={false} />
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Legend verticalAlign="top" height={80} iconType="circle" iconSize={8} align="right" />
        <Bar barSize={6} dataKey="kilogram" shape={<ThinBarRounded />} fill="#282D30">
          <LabelList dataKey="name" position="insideTop" angle="45" />
        </Bar>
        <Bar barSize={6} dataKey="calories" shape={<ThinBarRounded />} fill="#E60000" />
      </BarChart>
    </div>
  );
}

export default DailyActivity;

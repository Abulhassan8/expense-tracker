import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const values = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...values);

  return <div className="chart">
    {props.dataPoints.map(dataPoint => 
    <ChartBar
      value={dataPoint.value}
      maxValue={totalMax}
      label={dataPoint.label}
      key={dataPoint.label}
      />)}
  </div>
}

export default Chart;

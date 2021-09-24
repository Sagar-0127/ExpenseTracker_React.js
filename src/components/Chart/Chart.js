import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = function (props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          key={datapoint.label}
          maxValue={maximumValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

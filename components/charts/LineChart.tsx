import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface LineProps {
  //options: ChartOptions<"line">;
  chartData: ChartData<"line">;
}
function LineChart({ chartData }: LineProps) {
  return (
    <div className="chart-container">
      <h2 className="chart-heading">Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
              color: "#aaa",
              align: "start",
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;

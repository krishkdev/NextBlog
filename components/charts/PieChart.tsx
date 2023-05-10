import React from "react";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface LineProps {
  //options: ChartOptions<"pie">;
  chartData: ChartData<"pie">;
}

function PieChart({ chartData }: LineProps) {
  return (
    <div className="chart-container">
      <h2 className="chart-heading">Pie Chart</h2>
      <Pie
        data={chartData}
        className="chart"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
              color: "#aaa",
              align: "start",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;

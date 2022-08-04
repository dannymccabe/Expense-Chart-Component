import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const BarChart = () => {
  const [barData, setBarData] = useState({
    labels: chartData.map((data) => data.day),
    datasets: [
      {
        data: chartData.map((money) => money.amount),
        backgroundColor:
          "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
      },
    ],
    // trying to remove the gridlines - not working
    options:{
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255, 0, 0, 0);",
          }
        },
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          }
        }
      }
    }
  });

  return (
    <div>
      <Bar data={barData} />
    </div>
  );
};

export default BarChart;

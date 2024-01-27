import React from "react";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  //   gradient.addColorStop(0, "#34CAA5");
  //   gradient.addColorStop(1, "rgba(52, 202, 165, 0)");

  const gradient = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, -30, 200);
    gradient.addColorStop(0, "#34CAA5");
    gradient.addColorStop(1, "rgba(52, 202, 165, 0)");
    return gradient;
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        data: [
          7500, 21000, 3000, 25000, 9000, 45000, 9000, 23000, 35000, 4000,
          29000, 27000,
        ],
        backgroundColor: (context) => [
          "rgba(52, 202, 165, 0.10)",
          "rgba(52, 202, 165, 0.10)",
          "rgba(52, 202, 165, 0.10)",
          "rgba(52, 202, 165, 0.10)",
          "rgba(52, 202, 165, 0.10)",

          gradient(context),

          "rgba(52, 202, 165, 0.10)",
        ],
        borderColor: "black",
        borderRadius: 100,
      },
    ],
  };

  const options = {
    beginAtZero: true,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        color: "black",
      },
      y: {
        border: { dash: [4, 4] }, // for the grid lines
        grid: {
          color: "#aaa", // for the grid lines
          tickColor: "#000", // for the tick mark
          tickBorderDash: [0, 1], // also for the tick, if long enough
          tickLength: 10, // just to see the dotted line
          tickWidth: 2,
          offset: false,
          drawTicks: true, // true is default
          drawOnChartArea: true, // true is default
        },
        beginAtZero: true,
        max: 50000,
        ticks: {
          stepSize: 10000,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;

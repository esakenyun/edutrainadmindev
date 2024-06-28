// "use client";
// import { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart = () => {
//   const salesData = [500, 450, 600, 100, 450, 200, 450];
//   const maxSalesIndex = salesData.indexOf(Math.max(...salesData));

//   const [chartData, setChartData] = useState({
//     labels: ["Jan 14", "Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19", "Jan 20"],
//     datasets: [
//       {
//         label: "User",
//         data: salesData,
//         borderColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgb(16, 12, 236)" : "rgb(53, 162, 235)")),
//         backgroundColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgba(16, 12, 236, 0.8)" : "rgba(53, 162, 235, 0.4)")),
//         hoverBackgroundColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgba(16, 12, 236, 1)" : "rgba(53, 162, 235, 0.6)")),
//       },
//     ],
//   });

//   const [chartOptions, setChartOptions] = useState({
//     scales: {
//       y: {
//         ticks: {
//           min: 0,
//           max: 600,
//           stepSize: 150,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//     responsive: true,
//   });

//   useEffect(() => {}, []);

//   return (
//     <>
//       <div className="w-full md:col-span-2 relative lg:h-[40vh] m-auto p-4 rounded-lg bg-white">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </>
//   );
// };

// export default BarChart;
// "use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarChart = () => {
  const salesData = [500, 450, 600, 100, 450, 200, 450];
  const maxSalesIndex = salesData.indexOf(Math.max(...salesData));

  const [chartData, setChartData] = useState({
    labels: ["Jan 14", "Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19", "Jan 20"],
    datasets: [
      {
        label: "User",
        data: salesData,
        borderColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgba(16, 12, 236, 1)" : "rgba(53, 162, 235, 1)")),
        backgroundColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgba(16, 12, 236, 0.8)" : "rgba(53, 162, 235, 0.4)")),
        hoverBackgroundColor: salesData.map((_, index) => (index === maxSalesIndex ? "rgba(16, 12, 236, 1)" : "rgba(53, 162, 235, 0.6)")),
        borderWidth: 1,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        ticks: {
          color: "#00000",
          font: {
            size: 14, // Font size
          },
        },
        grid: {
          color: "#ccc",
        },
        beginAtZero: true,
        max: 600,
      },
      x: {
        ticks: {
          color: "#000", // Axis tick color
          font: {
            size: 14, // Font size
          },
        },
        grid: {
          color: "#ccc", // Grid line color
        },
      },
    },
    plugins: {
      datalabels: {
        display: (context) => context.dataIndex === maxSalesIndex,
        color: "white",
        backgroundColor: "green",
        borderRadius: 3,
        padding: 6,
        align: "start", // Align the label at the top
        anchor: "end", // Anchor the label to the top
        offset: -10, // Move the label higher
        formatter: (value) => {
          return Math.round(value);
        },
      },
      tooltip: {
        enabled: false, // Disable tooltips if not needed
      },
      legend: {
        display: false, // Hide the legend if not needed
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[40vh] m-auto p-4 rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;

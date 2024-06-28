import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartUser() {
  const [examData, setExamData] = useState({
    labels: ["Webinar", "Workshop", "Training"],
    datasets: [
      {
        label: "User Activities",
        data: [21, 17, 3],
        backgroundColor: ["#0080FF", "#FF4040", "#00C957"],
        borderColor: ["#0080FF", "#FF4040", "#00C957"],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <Pie
        data={examData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                generateLabels: (chart) => {
                  const data = chart.data;
                  if (data.labels.length && data.datasets.length) {
                    return data.labels.map((label, i) => {
                      const ds = data.datasets[0];
                      const value = ds.data[i];
                      return {
                        text: `${label}: ${value}`,
                        fillStyle: ds.backgroundColor[i],
                        strokeStyle: ds.borderColor[i],
                        lineWidth: 0,
                        hidden: false,
                        index: i,
                      };
                    });
                  }
                  return [];
                },
                usePointStyle: true,
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
                  const value = tooltipItem.raw;
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${value} (${percentage}%)`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

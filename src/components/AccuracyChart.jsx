

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GitCompareArrows } from 'lucide-react';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AccuracyChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'], // X-Axis labels (time intervals)
    datasets: [
      {
        label: 'Accuracy (%)',
        data: [80, 45, 32, 55, 52, 48, 60], // Accuracy values for each interval
        backgroundColor: 'rgba(110, 96, 230, 0.6)', // Bar fill color
        borderColor: 'rgba(110, 96, 230, 1)', // Bar border color
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart (styling and configuration)
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time Interval',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`, // Format tooltips to show as percentages
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full ">
      {/* Compare Accuracy Chart */}
      <div className="col-span-1 w-full lg:w-[468px] h-[310px] bg-white rounded-lg shadow p-6 mx-auto">
        <h3 className="text-lg font-semibold text-gray-500 mb-4 flex items-center gap-2">
          <GitCompareArrows size={20} />
          Compare Accuracy
        </h3>

        {/* Bar Chart Component */}
        <div className="w-full h-[200px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AccuracyChart;


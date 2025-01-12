


import { TrendingUp } from 'lucide-react';
import React from 'react';

const Approach = () => {
  return (
    <div className="border border-gray-200 shadow-md rounded-lg bg-white p-2 w-full sm:w-[220px] h-auto sm:h-[250px] mx-auto">
      {/* Header */}
      <h3 className="text-gray-500 font-medium mb-2 flex items-center gap-3">
        <TrendingUp size={20} />Approach Data
      </h3>

      {/* Data List */}
      <div className="flex flex-col gap-1">
        {[
          { percentage: '25%', label: 'Based on Facts', color: 'bg-indigo-200 text-blue-800' },
          { percentage: '32%', label: 'Based on Analysis', color: 'bg-indigo-200 text-green-800' },
          { percentage: '19%', label: 'Based on Elimination', color: 'bg-indigo-200 text-yellow-800' },
          { percentage: '24%', label: 'Based on Guess', color: 'bg-indigo-200 text-red-800' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center"
          >
            {/* Box for Percentage and Label */}
            <div
              className="flex items-center gap-3 w-full px-2 py-1 border border-indigo-300 rounded-md"
            >
              {/* Percentage Box */}
              <span
                className={`text-sm font-medium text-gray-700 px-3 py-2 rounded-lg ${item.color}`}
              >
                {item.percentage}
              </span>

              {/* Label Box */}
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;

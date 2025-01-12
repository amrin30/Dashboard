


import { Sparkles } from 'lucide-react';
import React from 'react';

const Suggestions = () => {
  return (
    <div className="border flex flex-col border-gray-300 rounded-lg bg-white p-2 sm:p-2 w-full sm:w-[220px] h-auto sm:h-[250px]">
      {/* Header */}
      <h3 className="text-gray-500 font-medium flex gap-3 items-center mb-4">
        <Sparkles size={20} />Suggestions
      </h3>

      {/* Table Structure */}
      <div className="grid grid-rows-1  sm:grid-rows-3 gap-3 text-center">
        {/* Row 1: Question Range */}
        <div className="flex justify-around items-center gap-2">
          <span className="px-4 py-1 bg-indigo-100 text-indigo-800 font-medium text-xs rounded-lg shadow-sm">
            Q. 1-12
          </span>
          <span className="px-4 py-1 bg-indigo-100 text-indigo-800 font-medium text-xs rounded-lg shadow-sm">
            Q. 12-32
          </span>
          <span className="px-4 py-1 bg-indigo-100 text-indigo-800 font-medium text-xs rounded-lg shadow-sm">
            Q. 32-40
          </span>
        </div>

        {/* Row 2: Time */}
        <div className="flex justify-around gap-2">
          <span className="px-4 py-1 border border-dotted border-indigo-300 text-indigo-800 font-medium text-sm rounded-lg shadow-sm">
            40 sec
          </span>
          <span className="px-4 py-1 border border-dotted border-indigo-300 text-indigo-800 font-medium text-sm rounded-lg shadow-sm">
            1.5 min
          </span>
          <span className="px-4 py-1 border border-dotted border-indigo-300 text-indigo-800 font-medium text-sm rounded-lg shadow-sm">
            3 min
          </span>
        </div>

        {/* Row 3: Difficulty Levels */}
        <div className="flex justify-around gap-2">
          <span className="px-3 py-1 bg-teal-100 text-teal-800 font-medium text-sm rounded-lg shadow-sm">
            Easy
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 font-medium text-sm rounded-lg shadow-sm">
            Medium
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 font-medium text-sm rounded-lg shadow-sm">
            Hard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

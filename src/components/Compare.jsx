

import { SquareChevronDown } from 'lucide-react'
import React from 'react'

const Compare = () => {
  return (
    <div className="p-4 w-full lg:w-[950px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 h-[250px]">
        {/* Compare Accuracy Cards */}
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg bg-white p-4 flex flex-col justify-start items-start"
            >
              <h3 className="text-gray-500 font-medium flex gap-3 items-center">
                <SquareChevronDown size={20} />
                Compare Accuracy
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Compare;

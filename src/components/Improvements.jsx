



import { TrendingUp } from 'lucide-react';
import React from 'react';

const Improvements = () => {
  return (
    <div className="border border-gray-300 rounded-lg bg-white p-2 w-full sm:w-[220px] flex flex-col h-auto sm:h-[250px] mx-auto">
      {/* Header */}
      <h2 className="text-gray-500 flex gap-3 items-center font-medium mb-1">
        <TrendingUp size={20} />
        Improvements
      </h2>
      <h4 className="text-black font-medium mb-4">Subject Understanding</h4>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-1 w-[220px]">
        {[
          { name: 'Geography', color: 'bg-teal-600 text-white' },
          { name: 'Politics', color: 'bg-yellow-200 text-white' },
          { name: 'Current Affairs', color: 'bg-teal-600 text-white' },
          { name: 'General Studies', color: 'bg-rose-500 text-white' },
          { name: 'Mathematics', color: 'bg-teal-600 text-white' },
          { name: 'Social Studies', color: 'bg-neutral-400 text-white' },
          { name: 'English Literature', color: 'bg-rose-500 text-white' },
          { name: 'Indian History', color: 'bg-orange-200 text-white' },
          { name: 'Economics', color: 'bg-teal-600 text-white' },
        ].map((subject, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${subject.color}`}
          >
            {subject.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Improvements;

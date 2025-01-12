


import { CalendarCheck } from 'lucide-react';
import React from 'react';
import Image from './images/result img.avif';
import Image2 from './images/profile.jpg';
const ResultSidebar = () => {
  return (
    <div className="bg-[#f9f9fc] rounded-xl p-6 shadow-lg w-full lg:w-[300px] h-auto lg:h-[850px] mx-auto lg:mx-0">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={Image} // Replace with the actual icon URL
          alt="Result Icon"
          className="w-20 h-20 mb-4 lg:w-24 lg:h-24"
        />
        <h2 className="text-lg lg:text-xl font-semibold text-[#6e60e6]">
          Your Result!
        </h2>
        <p className="text-xs lg:text-sm text-gray-600 text-center">
          All your insights & details in one place
        </p>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow">
        <div className="flex flex-col gap-3 lg:flex-row justify-between items-center mb-2">
          <div className="border-2 border-indigo-300 bg-indigo-200 p-2 rounded">
            <CalendarCheck size={20} />
          </div>
          <span className="text-xs lg:text-sm font-medium text-white bg-[#6e60e6] rounded-full px-3 py-1 flex justify-center items-center">
            You've Passed
          </span>
          <span className="text-teal-400 font-bold text-sm lg:text-lg">
            76% ACCURACY
          </span>
        </div>
        <h3 className="text-base lg:text-lg font-bold text-[#23262f]">
          136 / 240
        </h3>
      </div>

      {/* Top Score Section */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={Image2} // Replace with the actual user avatar URL
            alt="User Avatar"
            className="w-9 h-6 lg:w-12 lg:h-9 rounded-full"
          />
          <div>
            <p className="text-xs lg:text-sm text-gray-600">Top Score</p>
            <h3 className="text-[#6e60e6] font-medium text-sm lg:text-base">
              By Parth Akotkar
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h3 className="text-base lg:text-lg font-bold text-[#23262f]">
            230 / 240
          </h3>
          <span className="text-[#34d399] font-bold text-sm lg:text-lg">
            92% ACCURACY
          </span>
        </div>
      </div>

      {/* Call to Action: Practice */}
      <div className="text-center mb-4">
        <p className="text-xs lg:text-sm text-gray-600">Improve your Marks</p>
        <button className="bg-[#6e60e6] text-white font-medium rounded-lg px-4 py-2 mt-2 hover:bg-[#564ccf] text-xs lg:text-sm">
          Practice more
        </button>
      </div>

      {/* Revisit Paper Section */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="text-base lg:text-lg font-semibold text-[#23262f] mb-2">
          Revisit Paper
        </h3>
        <p className="text-xs lg:text-sm text-gray-600 mb-3">
          Challenge your friends by simply sharing a link to this test.
        </p>
        <button className="bg-[#6e60e6] text-white font-medium rounded-lg px-4 py-2 w-full hover:bg-[#564ccf] text-xs lg:text-sm">
          Visit
        </button>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Instructions for how to upload your handwritten material is given.
        </p>
      </div>
    </div>
  );
};

export default ResultSidebar;

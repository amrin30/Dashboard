


import React from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Compare from './components/Compare';
import Improvements from './components/Improvements';
import Response from './components/Response';
import Approach from './components/Approch';
import Suggestions from './components/Suggestion';
import AccuracyChart from './components/AccuracyChart';
import TimeTaken from './components/TimeTaken';


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="p-4 sm:p-8 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-[90%]">
          {/* Left Column: Result */}
          <div className="w-full sm:w-1/4">
            <Result />
          </div>

          {/* Right Column: Compare, Improvements, Response, Approach, Suggestions, AccuracyChart, and TimeTaken */}
          <div className="w-full sm:w-3/4 flex flex-col gap-6">
            {/* Compare Section */}
            <Compare />

            {/* Row: Improvements, Response, Approach, and Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {/* Improvements */}
              <div className=" rounded-lg">
                <Improvements />
              </div>

              {/* Response */}
              <div className=" rounded-lg">
                <Response />
              </div>

              {/* Approach */}
              <div className=" rounded-lg">
                <Approach />
              </div>

              {/* Suggestions */}
              <div className=" rounded-lg">
                <Suggestions />
              </div>
            </div>

            {/* Row: AccuracyChart and TimeTaken */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
              {/* AccuracyChart */}
              <div className="flex-1   rounded-lg">
                <AccuracyChart />
              </div>

              {/* TimeTaken */}
              <div className="flex-1   rounded-lg">
                <TimeTaken />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="p-4 sm:p-6 lg:p-8 flex justify-center">
        <div className="flex flex-col gap-6 w-full lg:w-[90%]">
          {/* First Row: Result */}
          <div className="w-full lg:w-1/4 self-center lg:self-start">
            <Result />
          </div>

          {/* Second Row: Compare */}
          <div className="w-full">
            <Compare />
          </div>

          {/* Third Row: Improvements, Response, Approach, and Suggestions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Improvements />
            <Response />
            <Approach />
            <Suggestions />
          </div>

          {/* Fourth Row: AccuracyChart and TimeTaken */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <AccuracyChart />
            </div>
            <div className="flex-1">
              <TimeTaken />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

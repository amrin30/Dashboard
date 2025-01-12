


import { Clock } from "lucide-react";
import React from "react";

const TimeBar = ({ title, progress, markerPosition, scaleLabels, scaleStartFromMiddle }) => {
  return (
    <div className="p-2 bg-white">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div
        className={`relative h-3 bg-gray-300 rounded-full overflow-hidden ${scaleStartFromMiddle ? "flex justify-center" : ""}`}
      >
        {/* Green Progress */}
        <div
          className="absolute top-0 left-0 h-full bg-greenCustom"
          style={{ width: `${progress.green}%` }}
        ></div>
        {/* Red Progress */}
        <div
          className="absolute top-0 h-full bg-redCustom"
          style={{ left: `${progress.green}%`, width: `${progress.red}%` }}
        ></div>
        {/* Marker */}
        <div
          className="absolute top-0 h-[50px] border-l-2 border-purpleCustom"
          style={{ left: `${markerPosition}%` }}
        ></div>
      </div>
      {/* Scale Labels */}
      <div className={`flex justify-between text-sm mt-2 text-gray-600 ${scaleStartFromMiddle ? "w-full" : ""}`}>
        {scaleLabels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-full sm:max-w-md w-full rounded-lg mx-auto space-y-1 p-3 bg-white">
      <h2 className="flex gap-2 bg-white font-medium text-gray-600">
        <Clock /> Time Taken
      </h2>

      <TimeBar
        title="Time Taken"
        progress={{ green: 30, red: 35 }}
        markerPosition={30}
        scaleLabels={["10", "20", "30", "40", "50", "60", "70", "80", "90"]}
        scaleStartFromMiddle={false}  // First scale starts from left
      />
      <TimeBar
        progress={{ green: 40, red: 45 }}
        markerPosition={47}
        scaleLabels={["4 sec", "3", "2", "1", "0", "1", "2", "3", "4"]}
        scaleStartFromMiddle={true}  // Second scale starts from middle
      />
    </div>
  );
};

export default App;

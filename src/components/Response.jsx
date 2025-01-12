

import { Clock } from 'lucide-react'
import React from 'react'

const Response = () => {
  return (
    <div className="border border-gray-300 rounded-lg h-auto sm:h-[250px] bg-white p-2 w-full sm:w-[220px] mx-auto">
      <h3 className="text-gray-500 flex items-center gap-3 font-medium mb-4">
        <Clock size={20} />
        Response Time
      </h3>
      <p className="text-sm text-gray-400 mb-2">Std Time - 2 min</p>
      <div className="flex items-center mb-1.5 p-2.5 justify-between border-dashed border-2 border-purple bg-[#F8F8FF] rounded-lg">
        <span className="text-2xl font-bold text-green-500">60%</span>
        <div className="text-red-500 text-lg font-semibold">
          ↑ 2min
        </div>
      </div>
    
      <div className="flex border-2 border-red-300 items-center justify-center py-3 mt-4 rounded-lg">
        <h2 className="text-lg font-semibold">You are slow!</h2>
      </div>
    </div>
  )
}

export default Response;

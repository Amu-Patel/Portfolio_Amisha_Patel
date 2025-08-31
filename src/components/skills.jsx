import { useEffect, useState } from "react";

export default function Skill({ name, percent, icon }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(percent);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className="w-full">
      {/* Skill label + percent */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <i className={`text-lg ${icon}`}></i>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-gray-500">{percent}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-[1500ms] ease-in-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

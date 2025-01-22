import { useState } from "react";

const State = () => {
  const [color, setColor] = useState();

  const handleRed = () => {
    setColor(true);
  };

  const handleGreen = () => {
    setColor(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Header */}
      <div className="text-center text-4xl mb-10 font-bold">Changing <span className="text-orange-500">Color</span> </div>

      {/* Color Box */}
      <div
        style={{ backgroundColor: color === false ? "green" : "" }}
        className="bg-orange-500 w-80 h-40 rounded-lg flex justify-center items-center mb-10"
      ></div>

      {/* Buttons */}
      <div>
        <button
          onClick={handleRed}
          className="bg-orange-600 px-14 py-3 rounded-lg text-white text-2xl mr-5"
        >
          Orange
        </button>
        <button
          onClick={handleGreen}
          className="bg-green-500 px-14 py-3 rounded-lg text-white text-2xl"
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default State;

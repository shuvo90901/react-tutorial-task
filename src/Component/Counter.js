import React, { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center mt-5">
      <p className="text-2xl font-semibold mb-3">Count: {count}</p>
      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default SimpleCounter;

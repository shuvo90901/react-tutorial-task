import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={`px-4 py-2 rounded ${
        isOn ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
      onClick={toggle}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default ToggleButton;

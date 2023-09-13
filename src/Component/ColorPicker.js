import React, { useState } from "react";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}

export default ColorPicker;

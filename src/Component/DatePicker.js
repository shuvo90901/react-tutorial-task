import React, { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="text-center mt-5">
      <input
        type="date"
        className="border p-2 rounded focus:outline-none"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p className="mt-2">Selected Date: {selectedDate}</p>
    </div>
  );
}

export default DatePicker;

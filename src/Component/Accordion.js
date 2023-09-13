import React, { useState } from "react";

function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    { title: "Item 1", content: "Content for Item 1" },
    { title: "Item 2", content: "Content for Item 2" },
    { title: "Item 3", content: "Content for Item 3" },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="px-20">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-2 border rounded"
          onClick={() => toggleItem(index)}
        >
          <div className="bg-gray-300 p-2 cursor-pointer">
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </div>
          {openItem === index && (
            <div className="p-2 bg-white shadow-md">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

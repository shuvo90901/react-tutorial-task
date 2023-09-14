import React, { useState } from "react";

function Pagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="my-5">
        Page {currentPage} of {totalPages}
      </div>
      <button
        className="px-5 py-3 bg-red-400 rounded-xl"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="px-5 py-3 bg-green-400 rounded-xl ml-10"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

function App() {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ];

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      <Pagination data={data} itemsPerPage={5} />
    </div>
  );
}

export default App;

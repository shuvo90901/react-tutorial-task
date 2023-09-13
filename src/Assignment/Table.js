import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  // Get column headers from the first object in the data
  const columns = Object.keys(data[0]);

  return (
    <div className="border border-gray-300 p-4">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

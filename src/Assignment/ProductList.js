import React, { useState } from "react";

const products = [
  { id: 1, name: "Toys", price: 100 },
  { id: 2, name: "Car", price: 200 },
  { id: 3, name: "Block", price: 300 },
  { id: 4, name: "Cricket Bat", price: 400 },
  { id: 5, name: "Football", price: 500 },
  { id: 6, name: "Bottle", price: 600 },
  { id: 7, name: "Laptop", price: 600 },
  { id: 8, name: "Mobile", price: 800 },
  { id: 9, name: "Gloves", price: 900 },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        {filteredProducts.length === 0 ? (
          <div className="text-gray-500">No products found</div>
        ) : (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} className="mb-2 border-b pb-2">
                <div className="font-bold">{product.name}</div>
                <div className="text-gray-500">Price: ${product.price}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;

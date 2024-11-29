import React from "react";

export default function ProductsTable({ list }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ title, price, id }) => (
          <tr key={id}>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <p
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {title}
              </p>
            </th>
            <th
              key={id}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <p
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {price}
              </p>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

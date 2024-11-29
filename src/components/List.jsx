import React, { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable";

const List = ({ keyword }) => {
  const [list, setList] = useState([]);

  const getListOfProducts = async () => {
    try {
      // fetch('https://dummyjson.com/RESOURCE/?delay=1000');
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${keyword}`
      );
      const data = await response.json();
      setList(data.products || []);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    getListOfProducts();
  }, [keyword]);

  return (
    <div>
      {list.length > 0 ? (
        <ProductsTable list={list} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default List;

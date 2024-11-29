import React, { useState, useEffect } from "react";

const SearchBox = ({ keyword, onSearch }) => {
  const [debounce, setDebounce] = useState("");
  const [trottle, setTrottle] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounce(keyword);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [keyword]);

  useEffect(() => {
    const throttleTimer = setTimeout(() => {
      setTrottle(keyword);
    }, 1000);

    return () => {
      clearTimeout(throttleTimer);
    };
  }, [keyword]);

  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={onSearch}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search product name..."
      />
    </>
  );
};

export default SearchBox;

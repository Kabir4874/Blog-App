import React from "react";

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full flex">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Hotels with Rooftop Pool Near..."
        className="py-2 px-4 mr-5 w-full bg-bgPrimary outline-none border border-gray-100 focus:border-gray-300"
      />
      <button className=" bg-mariner px-4 py-2 text-white">Search</button>
    </div>
  );
};

export default SearchBlog;

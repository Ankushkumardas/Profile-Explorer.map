import React, { useState } from 'react';

function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="flex mb-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search by ${searchType}...`}
          className="flex-grow p-2 border rounded-l"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="p-2 border border-l-0 rounded-r"
        >
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </div>
      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded">
        Search
      </button>
    </form>
  );
}

export default SearchFilter;


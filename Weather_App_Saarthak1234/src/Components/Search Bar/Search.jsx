import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city); // Call the onSearch function passed from App.jsx
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded p-2"
        placeholder="Enter city"
      />
      <button onClick={handleSearch} className="mt-4 p-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
}

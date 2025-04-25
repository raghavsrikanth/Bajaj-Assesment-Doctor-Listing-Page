import React, { useState } from 'react';

function Autocomplete({ searchTerm, setSearchTerm, doctors }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = doctors
        .filter(doctor => doctor.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSuggestions([]);
    }
  };

  return (
    <div className="autocomplete">
      <input
        data-testid="autocomplete-input"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for doctors"
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(doctor => (
            <li
              key={doctor.id}
              data-testid="suggestion-item"
              onClick={() => handleSuggestionClick(doctor.name)}
              className="suggestion-item"
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
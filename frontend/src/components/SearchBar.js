import React, { useState, useEffect, useRef } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ doctors, setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);

  // Update suggestions based on input value
  useEffect(() => {
    if (inputValue) {
      const filtered = doctors
        .filter(doctor => doctor.name.toLowerCase().includes(inputValue.toLowerCase()))
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [inputValue, doctors]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (name) => {
    setInputValue(name);
    setSearchTerm(name);
    setSuggestions([]);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
      setSuggestions([]);
    }
  };

  // Handle clicks outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-bar" ref={searchRef}>
      <input
        data-testid="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        placeholder="Search for doctors"
        className="search-input"
      />
      {isFocused && suggestions.length > 0 && (
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

export default SearchBar;
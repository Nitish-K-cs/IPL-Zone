import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import nationData from "../../data/nations.json";

const Nations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNations, setFilteredNations] = useState(nationData.nations);

  useEffect(() => {
    const filtered = nationData.nations.filter(nation =>
      nation.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNations(filtered);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="nation-page">

      <h1 className="page-title">Nations</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for countries"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="nation-container">
        {filteredNations.map((country, idx) => (
          <Link
            key={idx}
            to={`/nation/${encodeURIComponent(country.search)}`}
            className="nation-card"
          >
            <p className="nation-name">{country.name}</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Nations;
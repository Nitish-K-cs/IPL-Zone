import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import nationData from "../../data/nations.json";
import SearchBar from "../../components/Search";

const Nations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNations, setFilteredNations] = useState(nationData.nations);

  useEffect(() => {
    const filtered = nationData.nations.filter(nation =>
      nation.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNations(filtered);
  }, [searchQuery]);

  return (
    <div className="nations-page">

      <div className="page-header">
        <div className="title-block">
          <span className="title-eyebrow">Cricket</span>
          <h1 className="page-title">Playing <span>Nations</span></h1>
        </div>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search countries..."
        />
      </div>

      {filteredNations.length === 0 ? (
        <div className="no-results">
          <span>😢</span>
          <p>No nations found for "<strong>{searchQuery}</strong>"</p>
        </div>
      ) : (
        <div className="nations-container">
          {filteredNations.map((country, idx) => (
            <Link
              key={idx}
              to={`/nation/${encodeURIComponent(country.search)}`}
              className="nation-card"
            >
              <div className="nation-logo-wrap">
                <img src={country.cover} alt={country.name} className="nation-logo" />
              </div>
              <div className="nation-divider" />
              <h3 className="nation-title">{country.name}</h3>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default Nations;
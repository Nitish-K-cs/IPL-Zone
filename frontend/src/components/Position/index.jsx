import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import positionData from "../../data/positions.json";
import SearchBar from "../../components/Search";

const Positions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPositions, setFilteredPositions] = useState([]);

  useEffect(() => {
    const data = positionData.positions || [];
    const filtered = data.filter(position =>
      position.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPositions(filtered);
  }, [searchQuery]);

  return (
    <div className="positions-page">

      <div className="page-header">
        <div className="title-block">
          <span className="title-eyebrow">Cricket</span>
          <h1 className="page-title">Player <span>Positions</span></h1>
        </div>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search positions..."
        />
      </div>

      {filteredPositions.length === 0 ? (
        <div className="no-results">
          <span>😢</span>
          <p>No positions found for "<strong>{searchQuery}</strong>"</p>
        </div>
      ) : (
        <div className="positions-container">
          {filteredPositions.map((position, idx) => (
            <Link
              key={idx}
              to={`/position/${encodeURIComponent(position.search)}`}
              className="position-card"
            >
              <div className="position-logo-wrap">
                <img src={position.cover} alt={position.title} className="position-logo" />
              </div>
              <div className="position-divider" />
              <h3 className="position-title">{position.title}</h3>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default Positions;
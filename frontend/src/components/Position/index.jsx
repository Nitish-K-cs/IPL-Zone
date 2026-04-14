import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import positionData from "../../data/positions.json";

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="position-page">

      <h1 className="page-title">Positions</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for positions"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="position-container">
        {filteredPositions.map((position, idx) => (
          <Link
            key={idx}
            to={`/position/${encodeURIComponent(position.search)}`}
            className="position-card"
          >
            {/* Placeholder instead of image */}
            <div className="position-placeholder">
              {position.title}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Positions;
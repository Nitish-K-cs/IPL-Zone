import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // ✅

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleGoButtonClick = () => {
        if (!searchQuery.trim()) return;

        // ✅ Navigate without reload
        navigate(`/search/${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="search-page">

            <h1 className="page-title">Search Players</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for players..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

                <button onClick={handleGoButtonClick}>
                    Search
                </button>
            </div>

        </div>
    );
};

export default Search;
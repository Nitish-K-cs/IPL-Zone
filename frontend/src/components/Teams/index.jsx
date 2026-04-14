import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import teamData from "../../data/teams.json";

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teamData.teams);

  useEffect(() => {
    const filtered = teamData.teams.filter((team) =>
      (team.search || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    setFilteredTeams(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="teams-page">
      <h1 className="page-title">🏏 Teams</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for teams..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredTeams.length === 0 ? (
        <p className="no-results">No teams found 😢</p>
      ) : (
        <div className="teams-container">
          {filteredTeams.map((team) => (
            <Link
              key={team.title} // ✅ better key
              to={`/teams/${encodeURIComponent(team.search)}`}
              className="team-card"
            >
              <div className="team-placeholder">
                {team.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
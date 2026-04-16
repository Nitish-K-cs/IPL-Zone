import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import teamData from "../../data/teams.json";
import SearchBar from "../../components/Search";

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teamData.teams);

  useEffect(() => {
    const filtered = teamData.teams.filter((team) =>
      (team.search || team.title || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredTeams(filtered);
  }, [searchQuery]);

    return (
    <div className="teams-page">

      <div className="page-header">
        <div className="title-block">
          <span className="title-eyebrow">Season 2024/25</span>
          <h1 className="page-title">IPL <span>Teams</span></h1>
        </div>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search teams..."
        />
      </div>

      {filteredTeams.length === 0 ? (
        <div className="no-results">
          <span>😢</span>
          <p>No teams found for "<strong>{searchQuery}</strong>"</p>
        </div>
      ) : (
        <div className="teams-container">
          {filteredTeams.map((team) => (
            <Link
              key={team.title}
              to={`/teams/${encodeURIComponent(team.search || team.title)}`}
              className="team-card"
            >
              <div className="team-logo-wrap">
                <img src={team.cover} alt={team.title} className="team-logo" />
              </div>
              <div className="team-divider" />
              <h3 className="team-title">{team.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
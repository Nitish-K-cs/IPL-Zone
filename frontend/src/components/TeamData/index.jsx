import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./index.css";

const TeamData = () => {

  const { team, country, player, role } = useParams();
  console.log("PARAMS:", team, country, player, role);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);
  const [playersToShow, setPlayersToShow] = useState(10);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = "";

    if (team) {
      url = `/api/v1/player?team=${team}`;
    } 
    else if (country) {
      url = `/api/v1/player?country=${country}`;
    } 
    else if (player) {
      url = `/api/v1/player?player=${player}`;
    }
    else if (role) {
      url = `/api/v1/player?role=${role}`;
    }

    if (!url) {
      setLoading(false);
      return;
    }

    axios.get(`http://localhost:8080${url}`)
      .then(res => {
        setPlayerData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });

  }, [team, country, player, role]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (error) return (
    <p style={{ textAlign: "center", color: "red" }}>
      Error: {error.message}
    </p>
  );

  if (playerData.length === 0) {
    return (
      <div className="table-container">
        <h1 className="page-title">
          {team || country || player || role}
        </h1>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No players found.
        </p>
      </div>
    );
  }

  return (
    <div className="table-container">

      <h1 className="page-title">
        {team && `${team} Players`}
        {country && `${country} Players`}
        {player && `Search: ${player}`}
        {role && `${role} Players`}
      </h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {playerData.slice(0, playersToShow).map((p, index) => (
            <tr key={`${p.player}-${index}`}>
              <td>{p.player}</td>
              <td>{p.role}</td>
              <td>{p.age}</td>
              <td>{p.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {playersToShow < playerData.length && (
        <button 
          onClick={() => setPlayersToShow(playersToShow + 10)}
          className="show-more-button"
        >
          Show More
        </button>
      )}

    </div>
  );
};

export default TeamData;
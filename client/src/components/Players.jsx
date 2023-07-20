import React, { useEffect, useState } from "react";
import axios from "axios";

const Players = ({ team }) => {
  const { id, color, country_id } = team;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    team &&
      axios
        .get("http://localhost:5080/api/players", {
          params: { team_id: id },
        })
        .then((res) => res.data)
        .then((data) => setPlayers(data));
  }, [team]);

  return (
    <div className="players_display">
      {players &&
        players.map((player) => (
          <img
            key={player.id}
            className="player_img"
            src={player.photo}
            alt=""
          />
        ))}
    </div>
  );
};

export default Players;

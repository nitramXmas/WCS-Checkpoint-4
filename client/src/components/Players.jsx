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
      {!players[0] ? (
        <img
          className="generic_player"
          src="https://ms1.103.kz/images/f11f6f0850c8b35500e82bc656655bad/thumb/point=middle-center,w=416,h=416,q=34,watermark=false/catalog_staff_photo/7a/35/5b/7a355b625e4dc3646dbf2edf4fd0ae7e.jpg"
          alt=""
        />
      ) : null}
      {!players[0] ? (
        <img
          className="generic_player"
          src="https://ms1.103.kz/images/f11f6f0850c8b35500e82bc656655bad/thumb/point=middle-center,w=416,h=416,q=34,watermark=false/catalog_staff_photo/7a/35/5b/7a355b625e4dc3646dbf2edf4fd0ae7e.jpg"
          alt=""
        />
      ) : null}
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

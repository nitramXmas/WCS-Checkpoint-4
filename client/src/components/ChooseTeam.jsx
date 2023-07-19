import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ChooseTeam = ({ country }) => {
  const { id, name, flag } = country;

  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    id &&
      axios
        .get(`http://localhost:5080/api/teams`, { params: { country_id: 2 } })
        .then((res) => res.data)
        .then((data) => setTeams(data));
  }, []);

  return <div>{name}</div>;
};

export default ChooseTeam;

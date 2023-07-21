import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Players from "./Players";

const ChooseTeam = ({ country }) => {
  const { id, name, flag } = country;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);

  useEffect(() => {
    id &&
      axios
        .get(`http://localhost:5080/api/teams`, { params: { country_id: id } })
        .then((res) => res.data)
        .then((data) => setTeams(data))
        .then(setSelectedTeam([]));
  }, [country]);

  return (
    <div className="team_select">
      <form
        onChange={handleSubmit((data) => setSelectedTeam(teams[data.team]))}
      >
        <select {...register("team")}>
          <option>- Choisir une equipe -</option>
          {teams &&
            teams.map((team, index) => (
              <option key={index} value={index}>
                {team.color}
              </option>
            ))}
        </select>
      </form>
      {selectedTeam && <Players team={selectedTeam} country={country} />}
    </div>
  );
};

export default ChooseTeam;

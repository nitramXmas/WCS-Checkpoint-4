import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ChooseTeam from "../components/ChooseTeam";
import GameContext from "../utils/context/GameContext";

const ChooseCountry = ({ team }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  const {
    selectedCountry1,
    setSelectedCountry1,
    selectedCountry2,
    setSelectedCountry2,
  } = useContext(GameContext);

  useEffect(() => {
    axios
      .get("http://localhost:5080/api/countries")
      .then((res) => res.data)
      .then((data) => setCountries(data));
  }, []);

  console.log(selectedCountry1);

  return (
    <div className="country_select">
      <form
        onChange={handleSubmit((data) =>
          team === "team1"
            ? setSelectedCountry1(countries[data.country])
            : setSelectedCountry2(countries[data.country])
        )}
      >
        <select {...register("country")}>
          <option>- Choisir un pays -</option>
          {countries &&
            countries.map((country, index) => (
              <option key={index} value={index}>
                {country.name}
              </option>
            ))}
        </select>
      </form>

      {team === "team1" ? (
        <>
          <img
            className="flag_display"
            src={
              selectedCountry1.flag
                ? `https://flagsapi.com/${selectedCountry1.flag}/flat/64.png`
                : "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/flag_generic.png"
            }
          />
          <ChooseTeam country={selectedCountry1} />
        </>
      ) : (
        <>
          <img
            className="flag_display"
            src={
              selectedCountry2.flag
                ? `https://flagsapi.com/${selectedCountry2.flag}/flat/64.png`
                : "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/flag_generic.png"
            }
          />
          <ChooseTeam country={selectedCountry2} />
        </>
      )}
    </div>
  );
};

export default ChooseCountry;

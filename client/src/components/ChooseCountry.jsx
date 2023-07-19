import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ChooseTeam from "../components/ChooseTeam";

const ChooseCountry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5080/api/countries")
      .then((res) => res.data)
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="country_select">
      <form
        onSubmit={handleSubmit((data) =>
          setSelectedCountry(countries[data.country])
        )}
      >
        <select {...register("country")}>
          {countries &&
            countries.map((country, index) => (
              <option key={index} value={index}>
                {country.name}
              </option>
            ))}
        </select>
        <input type="submit" />
      </form>

      {selectedCountry && (
        <img src={`https://flagsapi.com/${selectedCountry.flag}/flat/64.png`} />
      )}
      <ChooseTeam country={selectedCountry} />
    </div>
  );
};

export default ChooseCountry;

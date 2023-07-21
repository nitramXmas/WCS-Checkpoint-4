import React, { useContext, useState } from "react";
import GameContext from "../utils/context/GameContext";

const Douro = () => {
  const { douro, setDouro, selectedCountry1, selectedCountry2 } =
    useContext(GameContext);

  const handleRadioChange = (event) => {
    setDouro(event.target.value);
  };

  return (
    <div className="douro_form">
      <div className="form_item">
        Douro :
        <form onChange={handleRadioChange}>
          <input type="radio" value={selectedCountry1.name} name="douro" />
          <input type="radio" value={selectedCountry2.name} name="douro" />
        </form>
      </div>
    </div>
  );
};

export default Douro;

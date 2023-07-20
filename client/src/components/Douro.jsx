import React, { useContext, useState } from "react";
import GameContext from "../utils/context/GameContext";

const Douro = () => {
  const { douro, setDouro } = useContext(GameContext);

  const handleRadioChange = (event) => {
    setDouro(event.target.value);
  };

  return (
    <div>
      Douro :
      <form onChange={handleRadioChange}>
        <input type="radio" value="Team1" name="douro" />
        <input type="radio" value="Team2" name="douro" />
      </form>
    </div>
  );
};

export default Douro;

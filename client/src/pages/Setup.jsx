import React, { useEffect, useState } from "react";
import ChooseCountry from "../components/ChooseCountry";
import "./Setup.css";
import Timer from "../components/Timer";
import Douro from "../components/Douro";
import Parameters from "../components/Parameters";
import Game from "./Game";
import { Link } from "react-router-dom";

const Setup = () => {
  return (
    <div className="setup_page">
      <h2>Preparation de la partie</h2>
      <div className="setup_content">
        <div className="setup_team1">
          <ChooseCountry team={"team1"} />
        </div>
        <div className="setup_team2">
          <ChooseCountry team={"team2"} />
        </div>
      </div>
      <Douro />
      <Parameters />
      <Link to={"/game"}>GO TO GAME</Link>
    </div>
  );
};

export default Setup;

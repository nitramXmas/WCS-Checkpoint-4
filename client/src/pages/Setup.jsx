import React, { useEffect, useState } from "react";
import ChooseCountry from "../components/ChooseCountry";
import "./Setup.css";
import Timer from "../components/Timer";
import Douro from "../components/Douro";
import Parameters from "../components/Parameters";

const Setup = () => {
  return (
    <div className="setup_page">
      <h2>Preparation de la partie</h2>
      <Timer />
      <div className="timer"></div>
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
    </div>
  );
};

export default Setup;

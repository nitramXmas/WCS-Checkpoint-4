import React from "react";
import ChooseCountry from "../components/ChooseCountry";
import "./Setup.css";

const Setup = () => {
  return (
    <div className="setup_page">
      <h2>Preparation de la partie</h2>
      <div className="timer"></div>
      <div className="setup_content">
        <div className="setup_team1">
          <ChooseCountry />
        </div>
        <div className="setup_team2">
          <ChooseCountry />
        </div>
      </div>
    </div>
  );
};

export default Setup;

import React, { useContext, useState } from "react";
import GameContext from "../utils/context/GameContext";
import { BiSolidTennisBall } from "react-icons/bi";
import Confetti from "react-confetti";
import "./Game.css";

const Game = () => {
  let [scoreTeam1, setScoreTeam1] = useState(0);
  let [scoreTeam2, setScoreTeam2] = useState(0);

  let w = window.innerWidth;
  let h = window.innerHeight;

  const {
    selectedCountry1,
    selectedCountry2,
    douro,
    setDouro,
    pasa,
    setPoints,
    finalPoints,
  } = useContext(GameContext);

  let pasa1 = pasa;
  let pasa2 = pasa;

  const handleDouroSwitch = (team) => {
    if (team === 1) {
      setScoreTeam1(++scoreTeam1);
      if (douro === selectedCountry2.name) {
        setDouro(selectedCountry1.name);
      }
    }
    if (team === 2) {
      setScoreTeam2(++scoreTeam2);
      if (douro === selectedCountry1.name) {
        setDouro(selectedCountry2.name);
      }
    }
  };

  console.log(scoreTeam1);
  console.log(scoreTeam2);
  console.log(finalPoints);

  return (
    <>
      {/* <div>
        <p>{selectedCountry1.name}</p>
        <p>{selectedCountry2.name}</p>
        <p>Douro : {douro}</p>
        <p>Pasa1 : {pasa1}</p>
        <p>Pasa2 : {pasa2}</p>
        <p>Points / manche : {setPoints}</p>
        <p>Points finale : {finalPoints}</p>
      </div> */}
      <div className="game_content">
        <div className="game_header">
          <div className="team1">
            <p>{selectedCountry1.name}</p>
            <img
              src={`https://flagsapi.com/${selectedCountry1.flag}/flat/64.png`}
            />
          </div>
          <div
            className={
              douro === selectedCountry1.name
                ? "douro_team1"
                : "douro_team1 invisible"
            }
          >
            <BiSolidTennisBall size={24} />
          </div>
          <div
            className={
              douro === selectedCountry2.name
                ? "douro_team2"
                : "douro_team2 invisible"
            }
          >
            <BiSolidTennisBall size={24} />
          </div>
          <div className="team2">
            <p>{selectedCountry2.name}</p>
            <img
              src={`https://flagsapi.com/${selectedCountry2.flag}/flat/64.png`}
            />
          </div>
        </div>
        <div className="score_buttons">
          <button onClick={() => handleDouroSwitch(1)}>{scoreTeam1}</button>
          <button onClick={() => handleDouroSwitch(2)}>{scoreTeam2}</button>
        </div>
        <button onClick={() => (setScoreTeam1(0), setScoreTeam2(0))}>
          RESET
        </button>
      </div>
      {scoreTeam1 >= finalPoints || scoreTeam2 >= finalPoints ? (
        <Confetti width={w} height={h} />
      ) : null}
    </>
  );
};

export default Game;

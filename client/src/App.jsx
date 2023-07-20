import { useState } from "react";
import "./App.css";
import Setup from "./pages/Setup";
import GameContext from "./utils/context/GameContext.jsx";

function App() {
  const [selectedCountry1, setSelectedCountry1] = useState([]);
  const [selectedCountry2, setSelectedCountry2] = useState([]);
  const [douro, setDouro] = useState();
  const [pasa, setPasa] = useState();
  const [setPoints, setSetPoints] = useState();
  const [finalPoints, setfinalPoints] = useState();

  return (
    <>
      <GameContext.Provider
        value={{
          selectedCountry1,
          setSelectedCountry1,
          selectedCountry2,
          setSelectedCountry2,
          douro,
          setDouro,
          pasa,
          setPasa,
          setPoints,
          setSetPoints,
          finalPoints,
          setfinalPoints,
        }}
      >
        <Setup />
      </GameContext.Provider>
    </>
  );
}

export default App;

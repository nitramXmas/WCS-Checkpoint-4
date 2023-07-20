import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Setup from "./pages/Setup";
import Game from "./pages/Game";
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
      <Router>
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
          <Routes>
            <Route path="/setup" element={<Setup />}></Route>
            <Route path="/game" element={<Game />}></Route>
          </Routes>
        </GameContext.Provider>
      </Router>
    </>
  );
}

export default App;

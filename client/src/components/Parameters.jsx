import React, { useContext, useState } from "react";
import GameContext from "../utils/context/GameContext";

const Parameters = () => {
  const {
    setPasa,

    setSetPoints,

    setfinalPoints,
  } = useContext(GameContext);

  const handleChangeState = (event) => {
    switch (event.target.name) {
      case "pasa":
        setPasa(event.target.value);
        break;
      case "set":
        setSetPoints(event.target.value);
        break;
      case "finale":
        setfinalPoints(event.target.value);
        break;
    }
  };

  return (
    <div className="params_content">
      <div className="form_item">
        Pasa :
        <form onChange={handleChangeState}>
          <label htmlFor="pasa10">10</label>
          <input type="radio" value={10} name="pasa" id="pasa10" />
          <label htmlFor="pasa20">20</label>
          <input type="radio" value={20} name="pasa" id="pasa20" />
          <label htmlFor="pasa30">30</label>
          <input type="radio" value={30} name="pasa" id="pasa30" />
        </form>
      </div>
      <div className="form_item">
        Set points :
        <form onChange={handleChangeState}>
          <label htmlFor="set10">10</label>
          <input type="radio" value={10} name="set" id="set10" />
          <label htmlFor="set20">20</label>
          <input type="radio" value={20} name="set" id="set20" />
          <label htmlFor="set30">30</label>
          <input type="radio" value={30} name="set" id="set30" />
        </form>
      </div>
      <div className="form_item">
        Finale Points :
        <form onChange={handleChangeState}>
          <label htmlFor="finale10">10</label>
          <input type="radio" value={10} name="finale" id="finale10" />
          <label htmlFor="finale20">20</label>
          <input type="radio" value={20} name="finale" id="finale20" />
          <label htmlFor="finale30">30</label>
          <input type="radio" value={30} name="finale" id="finale30" />
        </form>
      </div>
    </div>
  );
};

export default Parameters;

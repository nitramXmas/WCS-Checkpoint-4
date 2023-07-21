import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/setup">
        <h1>ACCEDER A L'APPLICATION</h1>
      </Link>
    </div>
  );
};

export default Home;

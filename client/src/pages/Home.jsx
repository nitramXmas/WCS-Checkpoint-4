import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/setup">
      <div className="home"></div>
    </Link>
  );
};

export default Home;

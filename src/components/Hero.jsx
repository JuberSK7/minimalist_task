import React from "react";
import BackImg from "../assets/banner1.png";
import logo from "../assets/logo-removebg.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="navbar">
          <img src={logo} alt="" />
        </div>
        <div className="hero_one">
          <h1 className="home_heading">The choice is yours. </h1>
          <h1 className="home_heading">Because they don’t have one.</h1>

          <button className="hero_btn">Quick View</button>
        </div>
      </div>
    </>
  );
};

export default Hero;

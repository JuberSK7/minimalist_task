import React from "react";
import About1 from "../assets/about1.png";
import Chracker from "../assets/crakkers.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about1">
          <img src={About1} alt="ab1" className="about_side_img" />
          <h3 className="about_text"> About</h3>

          <img src={About1} alt="ab1" className="about_side_img" />
        </div>

        <div className="about2">
          <img src={Chracker} alt="chrackers" className="about_chrakers" />
          <div className="about_content">
            <p className="about_content_text">
              {" "}
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their{" "}
            </p>
            <p className="about_content_text">
              chosen fields, but were directed towards a factory for daily
              wages. Each cracker bursts brighter than their lost smiles, and
              can
            </p>{" "}
            <p className="about_content_text">
              {" "}
              be heard louder than their cries for miles. Buy them, burst them,
              brag about them.
            </p>
            <p className="about_content_text_bold">
              The choice is yours. Because they don’t have one.{" "}
            </p>
          </div>
          <img src={Chracker} alt="chrackers" className="about_chrakers" />
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import FBorder from "../assets/footerbr.png";
import FDani from "../assets/footerd.png";
import Insta from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import tweet from "../assets/twitter.png";
import Facebok from "../assets/facebook.png";
import Linkdin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={FBorder} alt="footr" className="footer_border" />
        <div className="footer1">
          <img src={FDani} alt="footr" className="footer_dhani" />
          <div className="footer_mid">
            <h3 className="footer_name">Follow us on</h3>
            <div>
              <img src={Insta} alt="insta" className="social_icon" />
              <img src={Youtube} alt="yout" className="social_icon" />
              <img src={tweet} alt="tweet" className="social_icon" />
              <img src={Facebok} alt="facebk" className="social_icon" />
              <img src={Linkdin} alt="linkd" className="social_icon" />
            </div>
          </div>
          <img src={FDani} alt="footr" className="footer_dhani" />
        </div>
        <img src={FBorder} alt="footr" className="footer_border" />
      </div>
    </>
  );
};

export default Footer;

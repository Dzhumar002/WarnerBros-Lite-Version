import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div className="footer__block">
      <div className="footer__container">
        <div className="footer__content">
          <img
            height={"50vh"}
            src="https://cdn.wbgames.com/static/wb-shield.svg"
            alt="footerlogo"
          />
          <div className="footer__text">
            <span>
              WB GAMES LOGO, WB SHIELD: ™ &amp; © Warner Bros. Entertainment
              Inc.
              <br />
              "All other trademarks and copyrights are the property of their
              respective owners. All rights reserved."
              <br />
              "(s23)"
            </span>
          </div>
        </div>
      </div>

      <div className="footer__links">
        <a
          href="https://go.wbgames.com/privacy-center"
          rel="noopener"
          aria-label="Visit the privacy center."
          target="_blank"
        >
          Privacy Policy
        </a>
        <a
          href="https://go.wbgames.com/terms-of-use"
          rel="noopener"
          aria-label="Visit the terms of use page."
          target="_blank"
        >
          Terms of Use
        </a>
        <a
          href='https://go.wbgames.com/ad-choices"'
          rel="noopener"
          aria-label="Visit the ad choices page."
          target="_blank"
        >
          Ad Choices
        </a>
      </div>
    </div>
  );
};

export default Footer;

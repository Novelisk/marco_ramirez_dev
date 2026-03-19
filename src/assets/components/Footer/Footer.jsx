import React from 'react';
import { NavLink } from 'react-router-dom';

import linkedInIconBlack from '../../images/icons/linkedin-icon-black.svg';
import discordIconBlack from '../../images/icons/discord-icon-black.svg';
import githubIconBlack from '../../images/icons/github-icon-black.svg';

export const Footer = () => {
  return (
    <>
      <div className="footer__line"></div>
      <footer className="footer" id="contact">
        <h4 className="footer-copyright">
          &copy; MarcoRamirez. All rights reserved.
        </h4>

        <nav className="footer-policy">
          <NavLink to="/policy" className="footer-policy__text">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="footer-policy__text">
            Terms & Conditions
          </NavLink>
        </nav>

        <div className="footer-media">
          <a
            href="https://www.linkedin.com/in/paulramirezdev"
            className="footer-media__link"
          >
            <img
              src={linkedInIconBlack}
              alt="LinkedIn icon"
              className="footer-media__icon"
            />
          </a>

          <a
            href="https://discord.com/invite/SE5mWf7T"
            className="footer-media__link"
          >
            <img
              src={discordIconBlack}
              alt="Discord icon"
              className="footer-media__icon"
            />
          </a>

          <a href="https://github.com/Novelisk" className="footer-media__link">
            <img
              src={githubIconBlack}
              alt="Github icon"
              className="footer-media__icon"
            />
          </a>
        </div>

        <h4 className="footer-contact">
          Contact me at:{' '}
          <a
            href="mailto:marco@email.com?subject=Project%20Inquiry"
            className="footer-contact__mail-to"
          >
            <span className="footer-contact__span">novelisk@ik.me</span>
          </a>
        </h4>
      </footer>
    </>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';

import linkedInIcon from '../../images/icons/linkedin-icon.svg';
import discordIcon from '../../images/icons/discord-icon.svg';
import githubIcon from '../../images/icons/github-icon.svg';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
  return (
    <header className="header" id="home">
      <div className="name">
        <span className="name__span">{`<C/>`}</span>
        <p className="name__paragraph">Marco Ramirez</p>
      </div>

      <nav className="navbar">
        <div className="navbar__container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navlink__active' : 'navlink'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'navlink__active' : 'navlink'
            }
          >
            Projects
          </NavLink>
        </div>

        <SearchBar />

        <div className="links">
          <div className="link">
            <img
              src={linkedInIcon}
              alt="LinkedIn icon"
              className="link__icon"
            />
            <a
              href="https://www.linkedin.com/in/paulramirezdev"
              className="link__text"
            >
              LinkedIn
            </a>
          </div>

          <div className="link">
            <img src={discordIcon} alt="Discord icon" className="link__icon" />
            <a
              href="https://discord.com/invite/SE5mWf7T"
              className="link__text"
            >
              Discord
            </a>
          </div>

          <div className="link">
            <img src={githubIcon} alt="Github icon" className="link__icon" />
            <a href="https://github.com/Novelisk" className="link__text">
              Github
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

import React, { useState, useRef, useEffect } from 'react';

import gridIcon from '../../images/icons/grid-icon.svg';
import homeIcon from '../../images/icons/home-icon.svg';
import aboutIcon from '../../images/icons/user-icon.svg';
import skillsIcon from '../../images/icons/code-icon.svg';
import contactIcon from '../../images/icons/mail-icon-white.svg';

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef({});

  const items = [
    { id: 'home', label: 'Home', icon: homeIcon },
    { id: 'about', label: 'About Me', icon: aboutIcon },
    { id: 'skills', label: 'Skills', icon: skillsIcon },
    { id: 'contact', label: 'Contact Me', icon: contactIcon },
  ];

  const handleMouseEnter = (id) => {
    timeoutRef.current[id] = setTimeout(() => {
      setActive(id);
    }, 500);
  };

  const handleMouseLeave = (id) => {
    clearTimeout(timeoutRef.current[id]);
    delete timeoutRef.current[id];

    if (active === id) {
      setActive(null);
    }
  };

  useEffect(() => {
    const timeouts = timeoutRef.current;

    return () => {
      Object.values(timeouts).forEach(clearTimeout);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-bar__default">
        <img src={gridIcon} alt="Grid icon" className="nav-bar__image" />
      </div>

      {items.map((item) => {
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav-bar__item"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <img
              src={item.icon}
              alt={`${item.id} icon`}
              className="nav-bar__image"
            />

            <div
              className={`nav-bar__text-container ${active === item.id ? 'visible' : ''}`}
            >
              <p className="nav-bar__text">{item.label}</p>
            </div>
          </a>
        );
      })}
    </nav>
  );
};

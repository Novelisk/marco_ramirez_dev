import React from 'react';

import scrollIcon from '../../images/icons/scroll-icon.svg';
import serverIcon from '../../images/icons/server-icon.svg';
import monitorIcon from '../../images/icons/monitor-icon.svg';
import htmlIcon from '../../images/icons/html-icon.svg';
import cssIcon from '../../images/icons/css-icon.svg';
import jsIcon from '../../images/icons/js-icon.svg';
import reactIcon from '../../images/icons/react-icon.svg';

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <div className="skills-content__header">
          <img
            src={scrollIcon}
            alt="Scroll down icon"
            className="skills-content__scroll_image"
          />
          <div className="skills-content__header_container">
            <h2 className="skills-content__header_title">Skills</h2>
            <p className="skills-content__header_paragraph">
              “Unless you do something beyond what you've already mastered, you
              will never grow.” — Ronald E. Osborne
            </p>
          </div>

          <div className="skills-content__container">
            <div className="skills-content__container_header">
              <div className="skills-content__frontend">
                <img
                  src={monitorIcon}
                  alt="Monitor Icon"
                  className="skills-content__image"
                />
                <div className="skills-content__description">
                  <h4 className="skills-content__description_title">
                    Frontend Development
                  </h4>
                  <p className="skills-content__description_paragraph">
                    HTML | CSS | JS | REACT
                  </p>
                </div>
              </div>
              <div className="skills-content__backend">
                <img
                  src={serverIcon}
                  alt="Server Icon"
                  className="skills-content__image"
                />
                <div className="skills-content__description">
                  <h4 className="skills-content__description_title">
                    Backend Development
                  </h4>
                  <p className="skills-content__description_paragraph">
                    Node.js | Express | MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="skills__container">
              <div className="skills__skill">
                <div className="skills__skill_image-container skills__skill_image-container--html">
                  <img
                    src={htmlIcon}
                    alt="HTML Icon"
                    className="skills__skill_image"
                  />
                </div>
                <h2 className="skills__skill_name skill__skill_name--html">
                  HTML
                </h2>
              </div>
              <div className="skills__skill">
                <div className="skills__skill_image-container skills__skill_image-container--css">
                  <img
                    src={cssIcon}
                    alt="CSS Icon"
                    className="skills__skill_image"
                  />
                </div>
                <h2 className="skills__skill_name skills__skill_name--css">
                  CSS
                </h2>
              </div>
              <div className="skills__skill">
                <div className="skills__skill_image-container skills__skill_image-container--js">
                  <img
                    src={jsIcon}
                    alt="JS Icon"
                    className="skills__skill_image"
                  />
                </div>
                <h2 className="skills__skill_name skills__skill_name--js">
                  JS
                </h2>
              </div>
              <div className="skills__skill">
                <div className="skills__skill_image-container skills__skill_image-container--react">
                  <img
                    src={reactIcon}
                    alt="REACT Icon"
                    className="skills__skill_image"
                  />
                </div>
                <h2 className="skills__skill_name skills__skill_name--react">
                  REACT
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-icon">
        <p className="skills-content__logo">{'</>'}</p>
      </div>
    </section>
  );
};

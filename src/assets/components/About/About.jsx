import React from 'react';

import scrollIcon from '../../images/icons/scroll-icon.svg';

export const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <img
          src={scrollIcon}
          alt="Scroll down icon"
          className="about-header__image"
        />
      </div>

      <div className="about-content">
        <div className="about-content__container">
          <div className="about-content__about-me">
            <h2 className="about-content__about-me_text">About Me</h2>
          </div>

          <div className="about-content__description">
            <p className="about-content__description_element">{'<p>'}</p>
            <div className="about-content__description_text">
              <h3 className="about-content__title">Hello!</h3>
              <p className="about-content__paragraph">
                My name is Marco and I specialize in web development that
                utilizes{' '}
                <span className="about-content__paragraph_span">HTML</span>,{' '}
                <span className="about-content__paragraph_span">CSS</span>,{' '}
                <span className="about-content__paragraph_span">
                  JavaScript
                </span>{' '}
                and <span className="about-content__paragraph_span">REACT</span>
                , etc.
              </p>
              <p className="about-content__paragraph">
                I am a highly motivated individual and eternal optimist
                dedicated to building innovative web solutions. Striving to
                never stop learning and improving.
              </p>
              <p className="about-content__paragraph">
                When I'm not coding, I enjoy playing video games, reading, or
                picking up some new hands-on art project like{' '}
                <span className="about-content__paragraph_span">
                  photography
                </span>{' '}
                and <span className="about-content__paragraph_span">music</span>
                .
              </p>
              <p className="about-content__paragraph">
                I like to have my perspective and belief systems challenged so
                that i see the world through new eyes.
              </p>
            </div>
            <p className="about-content__description_element">{'</p>'}</p>
          </div>
        </div>
        <div className="about-content__image"></div>
      </div>
    </section>
  );
};

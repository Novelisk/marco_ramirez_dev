import React from 'react';

import linkIcon from '../../images/icons/link-icon.svg';
import emailIcon from '../../images/icons/mail-icon.svg';
import briefcaseIcon from '../../images/icons/briefcase-icon.svg';
import locationIcon from '../../images/icons/map-pin-icon.svg';
import downloadIcon from '../../images/icons/download-icon.svg';

export const Hero = () => {
  return (
    <>
      <div className="top-line"></div>
      <div className="hero">
        <h1 className="hero__title">Developer</h1>

        <div className="hero__content">
          <aside className="hero-info">
            <div className="hero-info__about">
              <div className="hero-info__header">
                <img
                  className="hero-info__portrait"
                  src="https://ik.imagekit.io/novelisk/noveliskdev%20Personal%20Web%20Page/hero-portrait.png"
                  alt="Profile Picture"
                ></img>
                <div className="hero-info__name-container">
                  <h3 className="hero-info__name">Marco R.</h3>
                  <p className="hero-info__job">Full-stack developer</p>
                </div>
              </div>

              <div className="hero-info__mid">
                <div className="hero-info__mid-container">
                  <div className="hero-info__mid-content">
                    <img
                      src={emailIcon}
                      alt="Email icon"
                      className="hero-info__mid-icon"
                    />
                    <p className="hero-info__mid-text">novelisk@ik.me</p>
                  </div>

                  <div className="hero-info__mid-content">
                    <img
                      src={locationIcon}
                      alt="Map pin icon"
                      className="hero-info__mid-icon"
                    />
                    <p className="hero-info__mid-text">Mexico</p>
                  </div>
                  <div className="hero-info__mid-content">
                    <img
                      src={briefcaseIcon}
                      alt="Briefcase icon"
                      className="hero-info__mid-icon"
                    />
                    <p className="hero-info__mid-text">Remote / Freelancer</p>
                  </div>
                  <div className="hero-info__mid-content">
                    <img
                      src={linkIcon}
                      alt="Embed link icon"
                      className="hero-info__mid-icon"
                    />
                    <p className="hero-info__mid-text">
                      www.marcoramirezdev.com
                    </p>
                  </div>

                  <div className="hero-info__mid-footer">
                    <div className="hero-info__mid-skill">
                      <h3 className="hero-info__mid-skill-text">HTML</h3>
                    </div>
                    <div className="hero-info__mid-skill">
                      <h3 className="hero-info__mid-skill-text">CSS</h3>
                    </div>
                    <div className="hero-info__mid-skill">
                      <h3 className="hero-info__mid-skill-text">JS</h3>
                    </div>
                    <div className="hero-info__mid-skill">
                      <h3 className="hero-info__mid-skill-text">REACT</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="hero-info__download"
              href="/cv-marco-r.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="hero-info__download-text">Download CV</h3>
              <img
                src={downloadIcon}
                alt="Download icon"
                className="hero-info__download-icon"
              />
            </a>
          </aside>

          <div className="hero-dev">
            <div className="hero-dev-container">
              <div className="hero-dev__header">
                <p className="hero-dev__header-element">{'<h1>'}</p>
                <div className="hero-dev__header-content">
                  <h2 className="hero-dev__header-text">Hey</h2>
                  <h2 className="hero-dev__header-text">
                    I'm <span className="hero-dev__header-span">Marco</span>
                  </h2>
                  <h2 className="hero-dev__header-text">
                    Full-Stack Developer{' '}
                    <span className="hero-dev__header-text-span">
                      {'</h1>'}
                    </span>
                  </h2>
                </div>
              </div>

              <div className="hero-dev__footer">
                <p className="hero-dev__footer-element">{'<p>'}</p>
                <div className="hero-dev__footer-content">
                  <p className="hero-dev__footer-text">
                    I'm a passionate full-stack developer with experience in
                    building modern web applications. If you're looking for a
                    developer that likes get stuff done,
                  </p>
                </div>
                <p className="hero-dev__footer-element">{'<p>'}</p>
                <a
                  href="mailto:marco@email.com?subject=Project%20Inquiry"
                  className="hero-dev__contact"
                >
                  <h2 className="hero-dev__contact-text">
                    Let's talk!
                    <div className="hero-dev__contact-icon-container">
                      <img
                        src={emailIcon}
                        alt="Email icon"
                        className="hero-dev__contact-icon"
                      />
                    </div>
                  </h2>
                </a>
              </div>
            </div>

            <div className="hero-highlights">
              <div className="hero-highlights__container">
                <h2 className="hero-highlights__number">4</h2>
                <p className="hero-highlights__text">Programming Language</p>
              </div>
              <div className="hero-highlights__container">
                <h2 className="hero-highlights__number">6</h2>
                <p className="hero-highlights__text">Development Tools</p>
              </div>
              <div className="hero-highlights__container">
                <h2 className="hero-highlights__number">5</h2>
                <p className="hero-highlights__text">Frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

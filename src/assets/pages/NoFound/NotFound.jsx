import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const lines = [
  '> initializing route...',
  '> ERROR 404',
  '> redirecting user...',
];

export const TerminalText = () => {
  const [displayed, setDisplayed] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, lines[i]]);
      i++;

      if (i >= lines.length) {
        clearInterval(interval);
        setTimeout(() => setFinished(true), 600);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="not-found__terminal">
      {displayed.map((line, index) => (
        <p className="terminal__link-line" key={index}>
          {line}
        </p>
      ))}

      {finished && (
        <p className="terminal__link-line">
          {'> go to home: '}
          <Link to="/" className="terminal__link">
            /home
          </Link>
        </p>
      )}
    </div>
  );
};

export const NotFound = () => {
  return (
    <>
      <div className="top-line"></div>
      <div className="not-found">
        <div
          className="not-found__title not-found__title--glitch"
          data-text="404 - Wrong turn"
        >
          404 - Wrong turn
        </div>

        <h2 className="not-found__subtitle">
          There's nothing here... just empty space
        </h2>

        <TerminalText />

        {/* <div className="not-found__footer">
          <p className="not-found__text">
            Let's take you back to the main experience.
          </p>
          <p className="not-found__text">
            Go{' '}
            <Link to="/" className="not-found__link">
              Home
            </Link>
          </p>
        </div> */}
      </div>
    </>
  );
};

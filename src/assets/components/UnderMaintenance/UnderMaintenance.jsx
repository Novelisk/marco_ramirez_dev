import React from 'react';
import { useAsyncValue, useNavigate } from 'react-router-dom';

export const UnderMaintenance = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-line"></div>
      <section className="maintenance">
        <h1 className="maintenance__title">Page Under Maintenance</h1>

        <div className="maintenance-content">
          <h3 className="maintenance__text">
            Deployin new changes to the section, it will be available as soon as
            possible.
          </h3>
          <img
            src="https://ik.imagekit.io/novelisk/noveliskdev%20Personal%20Web%20Page/construction-image.png"
            alt="Maintenance allusive image"
            className="maintenance__image"
          />
        </div>

        <button className="maintenance__button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </section>
    </>
  );
};

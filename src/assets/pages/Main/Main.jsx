import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';

export const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
    </div>
  );
};

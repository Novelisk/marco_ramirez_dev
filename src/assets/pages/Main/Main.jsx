import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';

export const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

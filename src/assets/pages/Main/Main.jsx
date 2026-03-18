import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

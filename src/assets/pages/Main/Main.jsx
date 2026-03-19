import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Contact } from '../../components/Contact/Contact';
import { NavBar } from '../../components/NavBar/NavBar';

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Contact />

      <NavBar />
    </main>
  );
};

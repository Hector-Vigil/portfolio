// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Parallax } from '@react-spring/parallax';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Parallax pages={2}>
          <Home />
        </Parallax>
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
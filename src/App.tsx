// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bgImage from './assets/hom-bg.jpg';

const App: React.FC = () => {

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Header />
      <main>
        <Parallax pages={isMobile ? 2.55 : 2.1}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={1.2}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1} factor={0.8} speed={0.2}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={isMobile ? 2.1 : 1.8} speed={0.2}>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  );
};

export default App;
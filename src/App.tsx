// src/App.tsx
import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bgImage from './assets/hom-bg.jpg';

const App: React.FC = () => {
  const parallaxRef = useRef<any>(null);

  const scrollToProjects = () => {
    console.log("clicked", parallaxRef.current);
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(1);
    }
  };
  // Determine if the screen is in mobile mode
  const isMobile = window.innerWidth < 768;

  // Set the factor for the Projects section
  const projectsFactor = isMobile ? 1.4 : 1;

  return (
    <>
      <Header />
      <main>
        {/* Adjust total pages accordingly */}
        <Parallax ref={parallaxRef} pages={1 + projectsFactor + 0.3}>
          {/* Home Section */}
          <ParallaxLayer
            offset={0}
            factor={1}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Home scrollToProjects={scrollToProjects} />
          </ParallaxLayer>

          {/* Projects Section */}
          <ParallaxLayer offset={1} factor={projectsFactor}>
            <Projects />
          </ParallaxLayer>

          {/* Contact Section */}
          <ParallaxLayer offset={1 + projectsFactor} factor={0.5}>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  );
};

export default App;
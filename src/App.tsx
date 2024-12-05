import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Parallax } from 'react-scroll-parallax';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Parallax speed={-1000}>
          <Home />
        </Parallax>
        <div style={{ height: '100vh' }}>
          <Parallax speed={10}>
            <Projects />
          </Parallax>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;
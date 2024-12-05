import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
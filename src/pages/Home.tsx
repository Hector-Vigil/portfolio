import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import bgImage from '../assets/hom-bg.jpg';


const Home: React.FC = () => (
  <ParallaxLayer
    offset={0}
    speed={0}
    factor={1}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Hi, I'm Hector Vigil</h1>
        <p className="text-xl mt-2">Full Stack Developer | JavaScript Enthusiast</p>
        <a
          href="#projects"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
        >
          View My Work
        </a>
      </div>
    </div>
  </ParallaxLayer>
);

export default Home;
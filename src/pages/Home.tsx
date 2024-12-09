import React from 'react';


const Home: React.FC = () => (
  
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
);

export default Home;
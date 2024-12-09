// src/pages/Home.tsx
import React from 'react';

interface HomeProps {
  scrollToProjects: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToProjects }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold">Hi, I'm Hector Vigil</h1>
      <p className="text-xl mt-2">Full Stack Developer | JavaScript Enthusiast</p>
      <button
        onClick={()=>scrollToProjects(1)}
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
      >
        View My Work
      </button>
    </div>
  </div>
);

export default Home;
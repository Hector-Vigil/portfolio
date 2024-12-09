import React from 'react';

const Header: React.FC = () => (
  <header className="fixed w-full top-0 z-50 bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <a href="#home" className="mr-4">Home</a>
        <a href="#projects" className="mr-4">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
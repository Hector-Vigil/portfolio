import React from 'react';

interface HeaderProps {
  scrollTo: (index: Number) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => (
  <header className="fixed w-full top-0 z-50 bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <button onClick={()=>scrollTo(0)} className="mr-4">Home</button>
        <button onClick={()=>scrollTo(1)} className="mr-4">Projects</button>
        <button onClick={()=>scrollTo(2)}>Contact</button>
      </nav>
    </div>
  </header>
);

export default Header;
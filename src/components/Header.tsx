const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
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
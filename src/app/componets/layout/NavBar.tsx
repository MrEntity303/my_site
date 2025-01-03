const NavBar = () => {
  return (
    <nav className="bg-customGray fixed top-0 left-0 w-full flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src="\img\logo_resized.png" alt="logo" className="w-16 h-16"/>
        <button className="justify-end border border-white rounded-full font-bold hover:bg-white hover:text-blue-500 px-4 py-2">Download CV</button>
      </div>
      <ul className="flex justify-end p-4 text-white text-xl space-x-14">
        <li><a href="#home" className="focus:text-sky-400">Home</a></li>
        <li><a href="#about" className="focus:text-sky-400">Chi sono</a></li>
        <li><a href="#exp" className="focus:text-sky-400">Esperienze</a></li>
        <li><a href="#tech-skills" className="focus:text-sky-400">Skills</a></li>
        <li><a href="#projects" className="focus:text-sky-400">Progetti</a></li>
        <li><a href="#links" className="focus:text-sky-400">Links</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

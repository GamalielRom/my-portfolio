import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-blue-400">G</span>amaliel{" "}
          <span className="text-blue-400">R</span>omualdo
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="mailto:gameva.rom@gmail.com" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md py-4 px-6 space-y-4 text-gray-200">
          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-blue-400">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-blue-400">Projects</a>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-blue-400">About</a>
          <a href="mailto:gameva.rom@gmail.com" onClick={() => setOpen(false)} className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

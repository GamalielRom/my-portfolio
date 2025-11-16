import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled
                ? "backdrop-blur-md bg-gray-900/80 shadow-md"
                : "bg-transparent backdrop-blur-none"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo + Nombre */}
            <div className="flex items-center space-x-3">
          
                <h1 className="text-2xl font-bold text-white tracking-wide">
                <span className="text-blue-400">G</span>amaliel{" "}
                <span className="text-blue-400">R</span>omualdo
                </h1>
            </div>

            {/* Links */}
            <ul className="flex space-x-6 text-gray-300 font-medium">
                <li>
                <a href="#home" className="hover:text-blue-400 transition duration-200">
                    Home
                </a>
                </li>
                <li>
                <a
                    href="#projects"
                    className="hover:text-blue-400 transition duration-200"
                >
                    Projects
                </a>
                </li>
                <li>
                <a href="#about" className="hover:text-blue-400 transition duration-200">
                    About
                </a>
                </li>
                <li>
                <a
                    href="mailto:gameva.rom@gmail.com"
                    className="hover:text-blue-400 transition duration-200"
                >
                    Contact
                </a>
                </li>
            </ul>
            </div>
        </nav>
    );
}
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import leo from "../assets/leo.webp";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Knowledge", path: "/knowledge" },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={leo} alt="Logo" className="h-10 w-auto md:ml-10" />
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 md:mr-20">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="cursor-pointer text-md font-semibold text-black hover:text-pink-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              // 🌙 Moon
              <div className="relative w-6 h-6 rounded-full bg-yellow-400 overflow-hidden">
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-black rounded-full"></div>
              </div>
            ) : (
              // ☀️ Sun
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="w-4 h-4 border-2 border-black rounded-full"></span>
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-1 h-1 bg-black rounded-full"
                    style={{
                      transform: `rotate(${i * 45}deg) translate(16px)`,
                    }}
                  ></span>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="ml-6 px-6 py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3 relative z-50">
          <button onClick={() => setOpen(!open)} className="relative z-50">
            {open ? (
              <XMarkIcon className="h-8 w-8 text-black" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.jsx
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import leo from "../assets/leo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Knowledge", path: "/knowledge" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="w-full fixed top-0 bg-white z-50 shadow-sm transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={leo} alt="Logo" className="h-15 w-30 md:ml-15" />
            {/* <span className="text-2xl font-bold text-black">Leo9</span> */}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 md:mr-20">
            {links.map((link, index) => (
              <li key={index} className="relative">
                <Link
                  to={link.path}
                  className="cursor-pointer text-md font-semibold text-black no-underline visited:text-black hover:text-pink-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Circle toggle */}
            {!darkMode && (
              <div
                onClick={toggleDarkMode}
                className="relative w-6 h-6 flex items-center justify-center cursor-pointer"
              >
                <span className="w-4 h-4 border-2 border-black rounded-full"></span>
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-1 h-1 bg-black rounded-full"
                    style={{
                      top: "40%",
                      left: "42%",
                      transform: `rotate(${i * 45}deg) translate(16px) rotate(-${
                        i * 45
                      }deg)`,
                    }}
                  ></span>
                ))}
              </div>
            )}

            {/* Half-moon toggle */}
            {darkMode && (
              <div
                onClick={toggleDarkMode}
                className="w-6 h-6 bg-yellow-400 rounded-full cursor-pointer relative"
              >
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-black rounded-full"></div>
              </div>
            )}

            <Link
              to="/contact"
              className="ml-6 px-10 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition"
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

      {/* Hero Section */}
      <Hero darkMode={darkMode} />
    </>
  );
};

export default Navbar;

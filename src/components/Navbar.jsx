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

          {/* Dark Mode Toggle (Desktop) */}
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

        {/* Mobile Menu Button + Dark Mode (only show if menu closed) */}
        {!open && (
          <div className="md:hidden flex items-center space-x-4 relative z-50">
            {/* Dark Mode Toggle (Mobile) */}
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
                        transform: `rotate(${i * 45}deg) translate(14px)`,
                      }}
                    ></span>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger Button */}
            <button onClick={() => setOpen(true)} className="relative z-50">
              <Bars3Icon className="h-8 w-8 text-black" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button (inside menu header) */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="z-50">
            <XMarkIcon className="h-8 w-8 text-black" />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-6">
          {links.map((link, index) => (
            <li key={index} className="relative">
              <Link
                to={link.path}
                className="cursor-pointer text-lg font-medium text-black hover:text-pink-500 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
              {/* {(link.name === "Services" || link.name === "About") && (
                <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 h-1.5 w-1.5 bg-black rounded-full"></span>
              )} */}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-t border-black w-full" />
    </nav>
  );
};

export default Navbar;

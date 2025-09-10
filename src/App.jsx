import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <Hero darkMode={darkMode} />

      {/* Footer (always white/black) */}
      <footer className="py-6 text-center text-sm bg-white text-black border-t border-black/10">
        © {new Date().getFullYear()} Manikumar — All Rights Reserved.
      </footer>
    </div>
  );
}

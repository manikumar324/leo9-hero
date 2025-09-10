import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App({darkMode}) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        {/* Bonus sections if you add them later */}
        {/* <Services /> */}
        {/* <Clients /> */}
      </main>
    {/* Footer */}
      <footer className={`py-6 text-center text-black bg-white text-sm border-t border-white/10 ${darkMode ? "text-white/70" : "text-black/70"}`}>
        © {new Date().getFullYear()} Manikumar — All Rights Reserved.
      </footer>
      
    </div>
  );
}



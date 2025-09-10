// Hero.jsx
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Decorative animated blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(220,38,38,0.2)" }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(244,114,182,0.2)" }}
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-12 gap-8 items-center"
        >
          {/* Left content */}
          <motion.div variants={item} className="md:col-span-7">
            <p  className={`uppercase tracking-widest text-xs md:text-sm ${
      darkMode ? "text-white/70" : "text-black/70"
    }`}>
              Experience Design Studio
            </p>
            <h1 className="mt-4 font-display font-extrabold text-7xl sm:text-5xl lg:text-6xl leading-tight">
              Design{" "}<br />
              <span className="gradient-text">
                {darkMode ? "Transform" : "Transform"}
              </span>{" "}<br />
              Accelerate
            </h1>
            <p className={`mt-5 text-black my-5 max-w-xl ${darkMode ? "text-white/70" : "text-black/70"}`}>
              Strategy, product, and brand — aligned through research and design.
              We help teams ship delightful experiences that grow businesses.
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-2">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-semibold rounded-full hover:opacity-90 transition"
              >
                Let’s Talk →
              </a>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div variants={item} className="md:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-soft">
              <motion.img
                src="https://images.unsplash.com/photo-1554446422-c4d46271ab85?q=80&w=1400&auto=format&fit=crop"
                alt="Showcase"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

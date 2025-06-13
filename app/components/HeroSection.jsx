"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Backgrund from "../images/modern-living-room-interior-2021-09-02-08-41-17-utc.png";
import Backgrund_sm from "../images/Frame-a.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to toggle background image & menu behavior
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants for staggered fade-in + slide up effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="relative w-full min-h-[850px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${isMobile ? Backgrund_sm.src : Backgrund.src})`,
        backgroundPosition: isMobile ? "right center" : "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar */}
      <nav className="w-full bg-transparent py-5 px-6 sm:px-8 flex justify-between items-center relative z-30 max-w-7xl mx-auto">
        {/* Brand logo */}
        <div className="text-white text-2xl font-bold cursor-pointer drop-shadow-lg">
          <a href="#">FurniShop</a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop menu links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-yellow-300 font-medium transition drop-shadow-md"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu links, toggle visibility */}
      {isOpen && (
        <div className="md:hidden bg-black/70 px-4 py-3 space-y-1 relative z-30">
          {["Home", "About", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-500 hover:text-black transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main hero content with animated entrance */}
      <motion.div
        className="flex flex-col items-center justify-center text-white text-center px-16 py-40 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-xl sm:text-2xl md:text-5xl font-semibold mb-13 drop-shadow-md leading-tight my-7"
          variants={itemVariants}
        >
          Creative Home Simplify Your
          <br className="hidden sm:block" />
          Furniture
        </motion.h1>

        <motion.p
          className="font-normal mb-15 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg drop-shadow-md"
          variants={itemVariants}
        >
          Do I have consent to record this meeting, gain location, root-and-branch
          review, nor game plan who’s the goto.
        </motion.p>

        <motion.button
          className="cursor-pointer text-sm sm:text-base font-semibold rounded-md shadow-lg transition text-white px-20 py-4 bg-white/15 backdrop-blur-[20px] hover:bg-white/30 hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Stats section with entrance animation */}
      <div className="absolute left-0 w-full px-4 z-30 bottom-[-146px] sm:bottom-[-55.5px] sm:mb-0 mb-8">
      <motion.div
        className="
          bg-[#2C6E68] rounded-2xl max-w-6xl mx-auto py-6 px-6 text-white shadow-xl
          grid grid-cols-2 sm:grid-cols-4 gap-6
          w-[85%] sm:w-auto
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >

          {[
            { number: "7", label1: "Year", label2: "Experience" },
            { number: "2", label1: "Opened in", label2: "the country" },
            { number: "10k+", label1: "Furniture", label2: "sold" },
            { number: "260+", label1: "Variant", label2: "Furniture" },
          ].map((item, i) => {
            // Apply right border to first and third items, plus on sm screens except last item
            const borderClass =
              (i === 0 || i === 2 ? "border-r border-white/20 " : "") +
              (i !== 3 ? "sm:border-r sm:border-white/20" : "");

            return (
              <div key={i} className={`text-center ${borderClass}`}>
                <div className="text-2xl font-bold">{item.number}</div>
                <div className="text-sm opacity-90">{item.label1}</div>
                <div className="text-sm opacity-90">{item.label2}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

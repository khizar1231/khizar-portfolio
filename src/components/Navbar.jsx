import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // --- GLASSMORPHISM APPLIED HERE ---
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        hasShadow
          ? "bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- LOGO UPDATED --- */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
          // Slightly larger height (h-10 to h-12) to make the new logo pop
          className="h-10 lg:h-12 cursor-pointer object-contain drop-shadow-sm"
          src="/assets/KhizarLogo.png"
          alt="Khizar Anwar Logo"
        />

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden lg:flex items-center gap-x-8 font-medium text-gray-700">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                onClick={() => scrollToSection(section)}
                className="hover:text-black transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              {/* Gradient Underline on Hover */}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* --- DESKTOP RESUME BUTTON (Modern Gradient + Glass) --- */}
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1AXpp4gUxJqoMy9LgbXTD24jI1cddloae"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-x-2 px-5 py-2.5 font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-[0_8px_20px_rgba(79,70,229,0.4)] transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume <TbDownload size={18} />
        </motion.a>

        {/* --- MOBILE MENU TOGGLE --- */}
        <motion.button
          className="lg:hidden text-3xl text-gray-800 p-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/50 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* --- MOBILE MENU (Glassmorphism Overlay) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Glass effect for the mobile dropdown
            className="lg:hidden absolute top-[110%] left-5 right-5 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-6 flex flex-col gap-y-4"
          >
            <ul className="flex flex-col items-center gap-y-5 font-semibold text-gray-800">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="w-full text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    className="w-full py-2 text-lg hover:text-blue-600 transition-colors"
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              
              <div className="w-full h-[1px] bg-gray-200/50 my-2"></div>

              {/* Mobile Resume Button */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1AXpp4gUxJqoMy9LgbXTD24jI1cddloae"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-x-2 px-5 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume <TbDownload size={18} />
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
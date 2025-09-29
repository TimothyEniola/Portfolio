import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mylogo from "../assets/mylogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center mr-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <motion.img
            src={mylogo}
            alt="Profile"
            className="w-10 h-10 rounded-full border-4 border-yellow-500 object-cover"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 text-yellow-500 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 px-2 py-1 rounded transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-600 focus:outline-none text-3xl px-2 py-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 pb-4 pt-4 space-y-2 text-gray-600 font-medium text-center rounded-b-xl">
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Projects",
              "Contact",
            ].map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-blue-500 py-2 rounded transition-colors duration-200"
                  onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

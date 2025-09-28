import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t-4 border-yellow-500 py-8 px-6 text-center relative">
      <motion.div
        className="flex justify-center space-x-6 mb-4 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <a
          href="https://github.com/TimothyEniola"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-yellow-500 transition-colors duration-300 text-2xl">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-yellow-500 transition-colors duration-300 text-2xl">
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-yellow-500 transition-colors duration-300 text-2xl">
          <FaTwitter />
        </a>
        <a
          href="mailto:timothyyemitan@gmail.com"
          className="text-blue-700 hover:text-yellow-500 transition-colors duration-300 text-2xl">
          <FaEnvelope />
        </a>
      </motion.div>

      <motion.p
        className="text-yellow-500 font-medium text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}>
        © {new Date().getFullYear()} [Tim-Dev]. All Rights Reserved.
      </motion.p>

      {showArrow && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 text-black 
          w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
          rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          aria-label="Back to Top">
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}
    </footer>
  );
}

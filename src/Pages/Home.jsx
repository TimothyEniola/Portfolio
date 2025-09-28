import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import mylogo from "../assets/mylogo.png";
import expence from "../assets/expence.png";
import port from "../assets/port.png";
export default function App() {
  const projects = [
    {
      title: "Trackeet",
      desc: "A web application that helps users track their tasks and increase productivity. Built with React and Tailwind CSS.",
      img: expence,
      link: "https://trackeet-project.vercel.app/login",
    },
    {
      title: "E-Commerce Platform",
      desc: "An e-commerce platform designed for small businesses to showcase and sell products online, with integrated payment solutions.",
      img: expence,
      link: "https://your-project-two-link.com",
    },
    {
      title: "Portfolio Website",
      desc: "A portfolio website template for developers and designers, fully responsive and customizable for personal use.",
      img: port,
      link: "https://portfolio-black-eta-85.vercel.app/",
    },
  ];
  return (
    <div className="font-sans  text-gray-800">
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-4 md:px-16 pt-24 md:pt-32">
        <motion.div
          className="mb-6 md:mb-0 md:mr-10 flex-shrink-0 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <motion.img
            src={mylogo}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-500 object-cover"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Welcome to My Portfolio 🚀
          </motion.h1>
          <motion.p
            className="text-base md:text-lg max-w-xl mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            Hi! I'm Timothy, a passionate developer specializing in building
            amazing web experiences. Explore my work and learn more about me.
          </motion.p>
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-400 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            See My Projects
          </motion.a>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <motion.h2
          className="text-4xl font-semibold mb-4 text-yellow-500"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          About Me
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mb-4 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}>
          I am a software developer with a love for creating intuitive and
          dynamic web applications. With experience in React, Tailwind CSS, and
          backend technologies, I strive to build solutions that make a
          difference.
        </motion.p>
        <motion.p
          className="text-lg max-w-2xl text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}>
          When I'm not coding, I enjoy learning new technologies, exploring
          creative projects, and contributing to open-source communities.
        </motion.p>
      </section>
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-yellow-600"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border-4 border-yellow-500">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <motion.h2
          className="text-4xl font-semibold mb-4 text-yellow-600"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6 text-center max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}>
          Interested in collaborating or just want to say hi? Feel free to reach
          out via the contact form below or connect with me on social media.
        </motion.p>
        <motion.form
          className="flex flex-col w-full max-w-md space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://wa.me/2348140838535?text=Hello%20I%20would%20like%20to%20connect%20with%20you",
                "_blank"
              )
            }
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
            Send Message
          </button>
        </motion.form>
      </section>
      <Footer />
    </div>
  );
}

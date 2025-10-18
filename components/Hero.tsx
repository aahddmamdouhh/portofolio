"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const codeSnippets = [
    "const portfolio = { creativity: true, tech: 'amazing' };",
    "function buildFuture() { return innovation; }",
    "<div className='awesome'>Hello World!</div>",
    "npm install creativity",
    "git commit -m 'Add amazing features'",
    "while(learning) { keepCoding(); }",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Snippets */}
        {codeSnippets.map((code, index) => {
          const positions = [
            { left: "10%", top: "20%" },
            { left: "80%", top: "15%" },
            { left: "15%", top: "60%" },
            { left: "85%", top: "70%" },
            { left: "50%", top: "10%" },
            { left: "70%", top: "40%" },
          ];
          const position = positions[index % positions.length];
          
          return (
            <motion.div
              key={index}
              className="absolute text-xs font-mono text-gray-400 opacity-30 select-none pointer-events-none"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + index * 2,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            >
              {code}
            </motion.div>
          );
        })}

        {/* Floating Tech Icons - Better Distributed */}
        <motion.div
          className="absolute top-1/6 left-1/6 text-6xl opacity-15 pointer-events-none"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💻
        </motion.div>

        <motion.div
          className="absolute top-1/5 right-1/6 text-5xl opacity-15 pointer-events-none"
          animate={{
            rotate: -360,
            y: [0, -40, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute bottom-1/5 left-1/3 text-4xl opacity-15 pointer-events-none"
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 180, 360],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/5 text-3xl opacity-15 pointer-events-none"
          animate={{
            rotate: [0, 360, 0],
            scale: [1, 1.4, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎨
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-3xl opacity-15 pointer-events-none"
          animate={{
            rotate: [-180, 180, -180],
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🔧
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/5 text-3xl opacity-15 pointer-events-none"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💡
        </motion.div>

        {/* Mouse-following cursor effect */}
        <motion.div
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 pointer-events-none"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      </div>
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Name with Tech Effect */}
        <motion.h1 
          className="text-6xl font-bold text-gray-800 mb-8 relative"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
            Ahd Mamdouh
          </span>
          {/* Floating brackets around name */}
          <motion.span
            className="absolute -left-8 top-0 text-4xl text-purple-400 opacity-50"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {"<"}
          </motion.span>
          <motion.span
            className="absolute -right-8 top-0 text-4xl text-purple-400 opacity-50"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            {"/>"}
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-2xl text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Software Engineer | Front-End Developer | UI/UX Designer
        </motion.p>

        <motion.p 
          className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I love building interfaces that not only look beautiful but feel effortless to use. From clean, responsive layouts to smooth animations and transitions, I aim to bring ideas to life through elegant code. Blending creativity with precision, I see front-end engineering as digital storytelling—translating concepts into engaging, human-centered experiences.
        </motion.p>
        
        {/* CTA Buttons with Enhanced Animations */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="/Ahd's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
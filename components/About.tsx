"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* More Icons */}
        <motion.div
          className="absolute top-1/6 right-1/6 text-5xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎯
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/6 left-1/6 text-4xl opacity-15"
          animate={{
            rotate: -180,
            scale: [1, 1.4, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💡
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/4 text-3xl opacity-15"
          animate={{
            y: [0, -35, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚙️
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/3 text-4xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/5 text-3xl opacity-15"
          animate={{
            y: [0, -20, 0],
            rotate: [-90, 90, -90],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎨
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/2 text-3xl opacity-15"
          animate={{
            rotate: 180,
            scale: [1, 1.4, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💻
        </motion.div>

        {/* More Code Snippets */}
        {["const about = {", "passion: 'tech',", "creativity: true", "};", "function innovate() {", "return ideas;", "}"].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-gray-400 opacity-25 select-none"
            style={{
              left: `${10 + index * 12}%`,
              top: `${15 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6 + index * 1.5,
              repeat: Infinity,
              delay: index * 0.8,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-2 glass rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Ahd Mamdouh - Software Engineer"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Hi! I&apos;m Ahd, a dual-degree Software Engineering student with a passion for AI and innovation.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m Ahd Mamdouh, a dual-degree Software Engineering student at Galala University and Arizona State University, 
                driven by a deep passion for technology and the world of Artificial Intelligence. I thrive on exploring how 
                intelligent systems can transform everyday life—from automating simple tasks to building smarter, more connected experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a love for both creativity and problem-solving, I enjoy turning complex ideas into intuitive digital solutions. 
                My journey blends technical rigor with innovation, where coding meets imagination and curiosity fuels progress. 
                I&apos;m constantly learning, experimenting, and pushing the boundaries of what technology can do to make the future smarter and more human.
              </p>

              {/* Interest Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <motion.div
                  className="glass p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Code2 className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <h4 className="font-semibold text-gray-800">Smart Systems</h4>
                  <p className="text-sm text-gray-600">AI & IoT Solutions</p>
                </motion.div>
                <motion.div
                  className="glass p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Palette className="w-8 h-8 mx-auto mb-2 text-accent-600" />
                  <h4 className="font-semibold text-gray-800">UI/UX Design</h4>
                  <p className="text-sm text-gray-600">User-Centered Design</p>
                </motion.div>
                <motion.div
                  className="glass p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Sparkles className="w-8 h-8 mx-auto mb-2 text-pink-600" />
                  <h4 className="font-semibold text-gray-800">Leadership</h4>
                  <p className="text-sm text-gray-600">Team & Project Management</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


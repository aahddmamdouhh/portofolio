"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "C++", icon: SiHtml5, color: "#00599C", level: 100 },
    { name: "Java", icon: SiHtml5, color: "#007396", level: 100 },
    { name: "Python", icon: SiPython, color: "#3776AB", level: 100 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 100 },
    { name: "React", icon: SiReact, color: "#61DAFB", level: 100 },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 100 },
    { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 100 },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 100 },
    { name: "SQL", icon: SiMysql, color: "#4479A1", level: 100 },
    { name: "Dart", icon: SiHtml5, color: "#0175C2", level: 100 },
    { name: "Git", icon: SiGit, color: "#F05032", level: 100 },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 100 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white/30 relative overflow-hidden">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* More Icons */}
        <motion.div
          className="absolute top-1/8 right-1/8 text-5xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🔧
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/8 left-1/8 text-5xl opacity-15"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚡
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl opacity-15"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎨
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 text-4xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.4, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💻
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/3 text-3xl opacity-15"
          animate={{
            y: [0, -20, 0],
            rotate: [-90, 90, -90],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/2 text-3xl opacity-15"
          animate={{
            rotate: 180,
            scale: [1, 1.4, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚙️
        </motion.div>

        <motion.div
          className="absolute bottom-1/2 left-1/6 text-3xl opacity-15"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎯
        </motion.div>

        {/* More Code Snippets */}
        {["const skills = [", "'JavaScript',", "'React',", "'Node.js',", "'Python',", "'Java',", "'C++'", "];", "function code() {", "return 'amazing';", "}"].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-gray-400 opacity-25 select-none"
            style={{
              left: `${5 + index * 8}%`,
              top: `${10 + (index % 4) * 20}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 7 + index * 1.2,
              repeat: Infinity,
              delay: index * 0.6,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass p-6 rounded-2xl text-center group hover:shadow-xl transition-shadow"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className="w-12 h-12 mx-auto"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {skill.name}
                </h3>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{skill.level}%</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Always learning and exploring new technologies 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


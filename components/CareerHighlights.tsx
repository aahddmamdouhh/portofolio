"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Code, GraduationCap, Calendar, TrendingUp } from "lucide-react";

const CareerHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Calendar,
      title: "Years of Experience",
      description: "3+ years of hands-on development experience building full-stack applications, IoT systems, and AI solutions",
      year: "2022-2024",
      achievement: "3+ Years",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Projects Completed",
      description: "Built 9+ full-stack applications, IoT systems, and AI solutions with real-world impact and measurable results",
      year: "2022-2024",
      achievement: "9+ Projects",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Dual degree program in Computer Science and Software Engineering with outstanding academic performance",
      year: "2022-2026",
      achievement: "3.627 GPA",
      color: "from-purple-500 to-pink-500"
    }
  ];

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
    <section id="career" className="py-20 px-4 bg-white/50 relative overflow-hidden">
      {/* Floating Career Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* More Icons */}
        <motion.div
          className="absolute top-1/6 left-1/6 text-5xl opacity-15"
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
          🏆
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/6 right-1/6 text-4xl opacity-15"
          animate={{
            rotate: -180,
            scale: [1, 1.4, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📈
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/8 text-3xl opacity-15"
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
          🎓
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/3 text-4xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, -18, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/5 text-3xl opacity-15"
          animate={{
            y: [0, -20, 0],
            rotate: [-90, 90, -90],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💼
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 text-3xl opacity-15"
          animate={{
            rotate: 180,
            scale: [1, 1.4, 1],
            y: [0, -28, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎯
        </motion.div>

        <motion.div
          className="absolute bottom-1/2 right-1/3 text-3xl opacity-15"
          animate={{
            y: [0, -24, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⭐
        </motion.div>

        {/* More Code Snippets */}
        {["const career = {", "experience: 3,", "projects: 9,", "gpa: 3.627,", "passion: 100", "};", "function grow() {", "return 'success';", "}", "let achievements = [", "'IEEE Leader',", "'Team Lead'", "];"].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-gray-400 opacity-25 select-none"
            style={{
              left: `${8 + index * 7}%`,
              top: `${12 + (index % 4) * 22}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 7 + index * 1.3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
              Career Highlights
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Key achievements and experiences that showcase my growth as a developer and leader
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">
                      {highlight.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {highlight.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                      {highlight.achievement}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default CareerHighlights;

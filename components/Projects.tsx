"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Calendar, Code, Users, Award } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "ASU-GU Portal - Course Equivalency System",
      description: "A comprehensive academic course management platform facilitating seamless course equivalency management between Galala University and Arizona State University. Features multi-role authentication, advanced search/filtering, Excel/CSV parsing, and audit compliance for streamlined student transfers.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["Node.js", "Express.js", "MySQL", "Sequelize", "EJS", "Tailwind CSS", "JWT"],
      github: "https://github.com/ahdmamdouh/Asu-Gu-Portal",
      demo: "https://demo.example.com",
    },
    {
      title: "WellB - Diabetes Management App",
      description: "A comprehensive diabetes-focused management app with blood glucose tracking, medication reminders, personalized dietary insights, and specialist recommendations. Features user profiles, health metrics tracking, and progress monitoring.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      tags: ["Database Design", "Healthcare", "User Management", "SQL"],
      github: "https://github.com/ahdmamdouh/wellb-diabetes-app",
      demo: "https://demo.example.com",
      detailedDescription: "WellB is a comprehensive diabetes management application designed to support individuals in monitoring and controlling their condition. The system provides essential tools for diabetes care including blood glucose tracking, medication reminders, and personalized dietary insights.",
      features: [
        "Blood glucose level tracking and monitoring",
        "Medication reminder system",
        "Personalized dietary insights and recommendations",
        "Specialist and dietitian directory",
        "Long-term progress tracking",
        "Alert system for irregular health patterns"
      ],
      challenges: [
        "Designing comprehensive health data schema",
        "Implementing real-time alert systems",
        "Creating user-friendly health tracking interface",
        "Ensuring data privacy and security"
      ],
      solutions: [
        "Developed normalized database schema for health data",
        "Built automated alert system with configurable thresholds",
        "Created intuitive dashboard for health monitoring",
        "Implemented secure data encryption and access controls"
      ],
      duration: "3 months",
      teamSize: "3 developers",
      role: "Full-Stack Developer & Database Designer"
    },
    {
      title: "Real-Time ASL Recognition System",
      description: "Built a real-time American Sign Language translator using CNNs and computer vision with MediaPipe for landmark detection. Features a user-friendly GUI for gesture-to-text translation, bridging communication gaps for deaf individuals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      tags: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "CNN"],
      github: "https://github.com/ahdmamdouh/asl-recognition",
      demo: "https://demo.example.com",
    },
    {
      title: "Hospital Management System",
      description: "Designed and built a full-stack hospital management system with role-based access, patient scheduling, doctor dashboards, pharmacy workflows, secure authentication, PDF invoicing, and email notifications following MVC architecture.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["Node.js", "Express", "MySQL", "Full-Stack", "MVC"],
      github: "https://github.com/ahdmamdouh/hospital-management",
      demo: "https://demo.example.com",
    },
    {
      title: "Spell Check Application",
      description: "A sophisticated Java-based spell-checking application using Binary Search Tree (BST) algorithms for lightning-fast word lookup and retrieval. Provides comprehensive spell-checking with minimal computational overhead.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      tags: ["Java", "Data Structures", "BST", "Algorithms"],
      github: "https://github.com/ahdmamdouh/spell-check-app",
      demo: "https://demo.example.com",
    },
    {
      title: "Airport Management System",
      description: "Created a comprehensive airport system model managing all facilities and operations from terminals to flight management systems. Built with Java and SQL for efficient data management and real-time operations.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      tags: ["Java", "SQL", "Database", "System Design"],
      github: "https://github.com/ahdmamdouh/airport-system",
      demo: "https://demo.example.com",
    },
    {
      title: "Blind Smart Stick System",
      description: "Designed a smart stick using ultrasonic sensors, vibration motors, and buzzers to help visually impaired individuals detect obstacles in real-time.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tags: ["C++", "Arduino", "Sensors", "IoT"],
      github: "https://github.com/ahdmamdouh/smart-stick",
      demo: "https://demo.example.com",
    },
    {
      title: "Smart Parking System",
      description: "Implemented an automated parking system that optimizes space utilization using servo motors and IR sensors for real-time monitoring of available spaces, reducing manual work and traffic issues.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      tags: ["C++", "Arduino", "Sensors", "IoT", "Servo Motors"],
      github: "https://github.com/ahdmamdouh/smart-parking",
      demo: "https://demo.example.com",
    },
    {
      title: "Supermarket Management System",
      description: "Developed a desktop application to manage inventory, sales, customer transactions, and employee operations for a retail store environment using object-oriented design principles.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Java", "SQL", "GUI", "OOP", "Retail"],
      github: "https://github.com/ahdmamdouh/supermarket-system",
      demo: "https://demo.example.com",
    },
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Project Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* More Icons */}
        <motion.div
          className="absolute top-1/8 left-1/8 text-5xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.4, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🚀
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/8 right-1/8 text-5xl opacity-15"
          animate={{
            rotate: -180,
            scale: [1, 1.5, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/8 text-4xl opacity-15"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 1],
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
          className="absolute top-1/2 left-1/4 text-4xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 15, 0],
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
          className="absolute bottom-1/3 left-1/6 text-3xl opacity-15"
          animate={{
            y: [0, -20, 0],
            rotate: [-90, 90, -90],
            scale: [1, 1.4, 1],
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
          className="absolute top-2/3 right-1/3 text-3xl opacity-15"
          animate={{
            rotate: 180,
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎨
        </motion.div>

        <motion.div
          className="absolute bottom-1/2 right-1/5 text-3xl opacity-15"
          animate={{
            y: [0, -22, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💡
        </motion.div>

        {/* More Code Snippets */}
        {["npm run dev", "git commit -m", "'Add features'", "const app = {", "name: 'portfolio',", "version: '1.0.0'", "};", "function deploy() {", "return 'success';", "}", "yarn build", "vercel deploy"].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-gray-400 opacity-25 select-none"
            style={{
              left: `${5 + index * 7}%`,
              top: `${8 + (index % 5) * 18}%`,
            }}
            animate={{
              y: [0, -22, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 7, 0],
            }}
            transition={{
              duration: 8 + index * 1.5,
              repeat: Infinity,
              delay: index * 0.7,
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow cursor-pointer"
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects[selectedProject] && (
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {projects[selectedProject].title}
                      </h2>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{projects[selectedProject].duration || "2-3 months"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>{projects[selectedProject].teamSize || "Team project"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code size={16} />
                          <span>{projects[selectedProject].role || "Developer"}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="mb-6">
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {projects[selectedProject].detailedDescription || projects[selectedProject].description}
                      </p>
                    </div>

                    {/* Features */}
                    {projects[selectedProject].features && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {projects[selectedProject].features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Challenges & Solutions */}
                    {projects[selectedProject].challenges && projects[selectedProject].solutions && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges</h3>
                          <ul className="space-y-2">
                            {projects[selectedProject].challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-red-500 mt-1">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions</h3>
                          <ul className="space-y-2">
                            {projects[selectedProject].solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-green-500 mt-1">•</span>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t">
                      <a
                        href={projects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <Github size={20} />
                        View Code
                      </a>
                      <a
                        href={projects[selectedProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full hover:shadow-lg transition-shadow"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;


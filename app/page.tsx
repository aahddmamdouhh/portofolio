"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CareerHighlights from "@/components/CareerHighlights";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MorphingIcon from "@/components/MorphingIcon";
import { useScrollSection } from "@/hooks/useScrollSection";

export default function Home() {
  const currentSection = useScrollSection();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Morphing Icon */}
      <MorphingIcon currentSection={currentSection} />
      
      {/* Sections with smooth transitions */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Hero />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <About />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Skills />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CareerHighlights />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Projects />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Contact />
      </motion.div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Footer />
      </motion.div>
    </main>
  );
}


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Code, 
  Trophy, 
  FolderOpen, 
  Mail,
  Rocket,
  Lightbulb,
  Wrench,
  Target,
  Briefcase,
  MessageCircle
} from "lucide-react";

interface MorphingIconProps {
  currentSection: string;
}

const MorphingIcon = ({ currentSection }: MorphingIconProps) => {
  const getIconForSection = (section: string) => {
    switch (section) {
      case 'home':
        return { icon: Home, color: "from-purple-500 to-pink-500", text: "Home" };
      case 'about':
        return { icon: User, color: "from-blue-500 to-cyan-500", text: "About" };
      case 'skills':
        return { icon: Code, color: "from-green-500 to-emerald-500", text: "Skills" };
      case 'career':
        return { icon: Trophy, color: "from-yellow-500 to-orange-500", text: "Career" };
      case 'projects':
        return { icon: FolderOpen, color: "from-indigo-500 to-purple-500", text: "Projects" };
      case 'contact':
        return { icon: Mail, color: "from-red-500 to-pink-500", text: "Contact" };
      default:
        return { icon: Home, color: "from-purple-500 to-pink-500", text: "Home" };
    }
  };

  const { icon: Icon, color, text } = getIconForSection(currentSection);

  return (
    <motion.div
      className="fixed top-1/2 right-8 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Icon size={28} className="text-white" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Section Label */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default MorphingIcon;

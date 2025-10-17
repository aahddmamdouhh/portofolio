"use client";

import { useState, useEffect } from 'react';

export const useScrollSection = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'career', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentSection;
};

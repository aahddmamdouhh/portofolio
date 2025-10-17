"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_vz0atm9';
      const templateId = 'template_q4lkada';
      const publicKey = 'ta7Jbft_a1XBojdia';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ahdmamdouh69@gmail.com', // Your email
        },
        publicKey
      );

      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Sorry, there was an error sending your message. Please try again or contact me directly at ahdmamdouh69@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ahdmamdouh",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/ahdmamdouh",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ahdmamdouh69@gmail.com",
      color: "hover:text-primary-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* More Tech Icons for Contact */}
        <motion.div
          className="absolute top-1/8 right-1/8 text-5xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          📧
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/8 left-1/8 text-5xl opacity-15"
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
          💬
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/4 text-4xl opacity-15"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌐
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 text-4xl opacity-15"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, -18, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          📱
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
          🤝
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
          💼
        </motion.div>

        <motion.div
          className="absolute bottom-1/2 right-1/3 text-3xl opacity-15"
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
          🚀
        </motion.div>

        {/* More Code Snippets */}
        {["const contact = {", "email: 'ahd@...',", "phone: '+20...',", "location: 'Cairo'", "};", "function sendMessage() {", "return 'success';", "}", "let social = [", "'GitHub',", "'LinkedIn'", "];", "connect()"].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-gray-400 opacity-25 select-none"
            style={{
              left: `${8 + index * 6}%`,
              top: `${10 + (index % 5) * 18}%`,
            }}
            animate={{
              y: [0, -20, 0],
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's collaborate and innovate together!
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always excited to discuss new projects, hackathons, research opportunities, 
                or any tech challenges. Whether it's AI, smart systems, web development, or 
                leadership roles, I'm ready to make an impact!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-xl"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:ahdmamdouh69@gmail.com"
                    className="text-gray-800 hover:text-primary-600"
                  >
                    ahdmamdouh69@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-xl"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">Cairo, Egypt</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-xl"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+201123658222"
                    className="text-gray-800 hover:text-primary-600"
                  >
                    +20 1123658222
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-600 mb-4">Find me on social media:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-xl text-gray-700 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;



import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GirlBossCharacter from './GirlBossCharacter';

function Hero() {

  // ===== typing effect roles =====
  const roles = [
    "Frontend Developer",
    "React.js Specialist",
    "API Integration Expert",
    "QA-Aware Engineer",
    "& A Friend"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((roleIndex + 1) % roles.length);
    }, 1400);

    return () => clearTimeout(pause);
  }, [charIndex, roleIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 
      dark:from-indigo-900 dark:via-purple-800 dark:to-cyan-900 text-white py-20"
    >

      <div className="container mx-auto px-4 text-center relative z-10">

        <GirlBossCharacter />

        {/* ===== NAME ===== */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          Syeda Mahnoor Islam
        </motion.h1>

        {/* ===== CURRENTLY WORKING + OPEN TO WORK ===== */}
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            💼 Currently Working as QA Engineer at Builtinsoft
          </span>
          <span className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm shadow-md">
            🌐 Available for Remote Projects & Collaboration
          </span>
        </div>

        {/* ===== TYPING ROLE ===== */}
        <p className="text-2xl md:text-3xl font-bold min-h-[40px] 
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent drop-shadow-lg">
          {text}
          <span className="animate-pulse text-white">|</span>
        </p>

        {/* ===== SHORT PROFESSIONAL LINE ===== */}
        <p className="text-md md:text-lg mt-4 mb-10 max-w-2xl mx-auto text-white/90">
          I build modern, responsive web applications with clean UI architecture,
          backend API integration, and production-ready workflows — focused on performance,
          usability, and real-world scalability.
        </p>

        {/* ===== BUTTONS ===== */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#projects"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects ✨
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-block border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me 🚀
          </motion.a>
        </div>

      </div>

      {/* ===== subtle floating tech icons ===== */}
      <motion.div
        className="absolute left-10 top-20 text-5xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >⚛️</motion.div>

      <motion.div
        className="absolute right-20 bottom-20 text-5xl opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >💻</motion.div>

      <motion.div
        className="absolute left-1/3 bottom-10 text-4xl opacity-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >🚀</motion.div>

    </motion.section>
  );
}

export default Hero;
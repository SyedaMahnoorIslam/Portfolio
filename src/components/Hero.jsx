import { motion } from 'framer-motion';
import GirlBossCharacter from './GirlBossCharacter';

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 dark:from-indigo-900 dark:via-purple-800 dark:to-cyan-900 text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <GirlBossCharacter />
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Syeda Mahnoor Islam
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          💻 Web Developer | 🎨 Creative Designer | 🚀 Problem Solver
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block bg-white dark:bg-indigo-600 text-purple-600 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-300 dark:hover:bg-cyan-400 transition-all hover:shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work ✨
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;
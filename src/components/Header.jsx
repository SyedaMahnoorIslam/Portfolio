import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-indigo-900 dark:via-purple-800 dark:to-cyan-900 text-white p-4 shadow-2xl fixed top-0 left-0 right-0 z-50"
      >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          ✨ Syeda Mahnoor Islam
        </motion.h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-yellow-200 transition-colors font-medium">About</a></li>
          <li><a href="#education" className="hover:text-yellow-200 transition-colors font-medium">Education</a></li>
          <li><a href="#experience" className="hover:text-yellow-200 transition-colors font-medium">Experience</a></li>
          <li><a href="#skills" className="hover:text-yellow-200 transition-colors font-medium">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-200 transition-colors font-medium">Projects</a></li>
          <li><a href="#courses" className="hover:text-yellow-200 transition-colors font-medium">Courses</a></li>
          <li><a href="#contact" className="hover:text-yellow-200 transition-colors font-medium">Contact</a></li>
        </ul>
        <ThemeToggle />
      </nav>
      </motion.header>
      <div className="h-16" />
    </>
  );
}

export default Header;
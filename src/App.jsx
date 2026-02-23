import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-hidden min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Courses />
      <Education />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
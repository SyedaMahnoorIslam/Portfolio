import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-white to-pink-50 dark:from-gray-900 dark:to-indigo-900 text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          👋 Hi! I&apos;m Syeda Mahnoor Islam, a passionate web developer with a flair for creating stunning, modern web applications. I love turning ideas into beautiful digital experiences using cutting-edge technologies.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
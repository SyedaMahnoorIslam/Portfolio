import { motion } from 'framer-motion';

function Skills() {
  const skills = [
// Frontend
    'JavaScript', 'HTML', 'CSS', 'React.js', 'TypeScript',
    'Styled Components', 'Tailwind CSS', 'Responsive Design',
    // Mobile
    'Flutter', 'Dart',
    // Backend / Integration
    'Node.js', 'REST API Integration', 'Stripe Payment Integration', 
    // QA / Testing
    'Manual Testing', 'QA Testing', 'Bug Reporting', 'Test Case Writing', 
    // Tools / Collaboration
    'Git', 'GitHub', 'Firebase', 'Cross-Browser Compatibility', 
    'UI/UX Principles', 'Agile Collaboration', 'Debugging & Problem Solving'
];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-indigo-900 dark:to-cyan-900"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text">🛠️ Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, rotate: [0, 3, -3, 0] }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-2xl transition-shadow"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;

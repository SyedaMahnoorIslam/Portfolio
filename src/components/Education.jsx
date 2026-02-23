import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "Khwaja Fareed Univeristy of Engineering and Information Technolgy",
      year: "2024 - Present",
      description: "Focused on web development, algorithms, and software engineering."
    },
    {
      degree: "Intermediate in Pre-Engineering",
      school: "KIPS College",
      year: "2021 - 2023",
      description: "Mathematics, Physics, and Computer Science foundation."
    },
    {
      degree: "Matric in Biology",
      school: "Workers Welfare School",
      year: "2021",
      description: "Biology, Chemistry, and Physics basics."
    }
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text">🎓 Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-gradient-to-b from-pink-500 to-purple-500"
            >
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text">{edu.degree}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-2">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 {edu.year}</p>
              <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;


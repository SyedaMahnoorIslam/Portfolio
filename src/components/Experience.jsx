import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
      {
      title: "QA Engineer",
      company: "BuiltinSoft software house",
      year: "2025",
      description: "Test and ensured the quality of web applications & mobile apps through manual and automated testing. Collaborated with developers to identify and fix bugs."
    },
    {
      title: "Web Development Intern",
      company: "DevCastle IT institute",
      year: "2025",
      description: "Developed responsive web applications using React and Node.js. Collaborated on team projects and improved UI/UX designs."
    },
    {
      title: "Mobile App Developer",
      company: "Self-Employed",
      year: "2024",
      description: "Built custom mobile applications using Flutter and Dart, focusing on performance and user experience."
    },
        {
      title: "Addmission Officer",
      company: "Kips College ",
      year: "2024",
      description: "Work as an admission officer handling student inquiries, processing applications, and coordinating with academic departments."
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-purple-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-pink-500"
            >
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text">{exp.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mt-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 {exp.year}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
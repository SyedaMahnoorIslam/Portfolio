import { motion } from 'framer-motion';

function Courses() {
  const courses = [
    {
      name: "NAVTTC Mern Stack Web Development",
      platform: "DevCastle in collaboration with NAVTTC",
      year: "2025",
      description: "Comprehensive MERN stack development course covering MongoDB, Express, React, and Node.js."
    },
    // {
    //   name: "JavaScript Algorithms and Data Structures",
    //   platform: "freeCodeCamp",
    //   year: "2025",
    //   description: "In-depth learning of JS fundamentals and algorithms."
    // },
    {
      name: "Mobile App Development",
      platform: "DevCastle IT College",
      year: "2024",
      description: "Dart and Flutter for cross-platform mobile app development."
    }
  ];

  return (
    <motion.section
      id="courses"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-cyan-50 to-pink-50 dark:from-cyan-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text">📚 Courses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-b-4 border-cyan-500"
            >
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text mb-2">{course.name}</h3>
              <p className="text-pink-600 dark:text-pink-400 font-semibold">🎓 {course.platform}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 {course.year}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Courses;
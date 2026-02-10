import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'A JavaScript-based expense tracking application.',
      link: 'https://github.com/SyedaMahnoorIslam/Expense-tracker',
      tech: 'JavaScript'
    },
    {
      title: 'Mini Chat App',
      description: 'A simple chat application built with HTML.',
      link: 'https://github.com/SyedaMahnoorIslam/Mini-Chat-App',
      tech: 'HTML'
    },
    {
      title: 'Image Gallery',
      description: 'A simple image gallery webpage using HTML and JavaScript.',
      link: 'https://github.com/SyedaMahnoorIslam/Image-Gallery',
      tech: 'HTML, JavaScript'
    },
    {
      title: 'Course Allocation System',
      description: 'An automated system to assign courses to teachers efficiently.',
      link: 'https://github.com/SyedaMahnoorIslam/course-allocation-system',
      tech: 'JavaScript'
    },
    {
      title: 'Furniture Web',
      description: 'A furniture website built with TypeScript.',
      link: 'https://github.com/SyedaMahnoorIslam/FurnitureWeb',
      tech: 'TypeScript'
    },
    {
      title: 'Healify',
      description: 'A modern ePharmacy website built with React.js.',
      link: 'https://github.com/SyedaMahnoorIslam/Healify',
      tech: 'JavaScript, React'
    },
    {
      title: 'AzerStar',
      description: 'A modern, responsive web application using React.',
      link: 'https://github.com/SyedaMahnoorIslam/AzerStar',
      tech: 'JavaScript, React'
    },
    {
      title: 'Calculator Project',
      description: 'A calculator application.',
      link: 'https://github.com/SyedaMahnoorIslam/Calculator-project',
      tech: ''
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-white to-purple-50 dark:from-gray-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text">🚀 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-gradient-to-r from-pink-500 to-purple-500"
            >
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4 font-semibold">📌 {project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-cyan-400 font-bold hover:text-purple-700 dark:hover:text-pink-400 transition-colors">View on GitHub →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
import { motion } from 'framer-motion';

function Projects() {

  const projects = [

    {
      title: 'AlMoosa ePharmacy (QA Engineer Role)',
      description: `
    • Working as QA Engineer on a real-world ePharmacy platform under senior QA supervision  
    • Performing manual testing on authentication, product listing, cart workflow, and checkout modules  
    • Writing structured test cases and validating functional business scenarios  
    • Reporting bugs with reproduction steps, expected vs actual results, and severity classification  
    • Supporting regression testing, UI validation, and workflow consistency verification  
    • Collaborating with development and senior QA team to ensure production-level reliability  
    
    Role: Quality Assurance Engineer (Manual Testing)
    `,
      link: '#',
      tech: 'Manual Testing, QA, Test Cases, Bug Reporting, Functional Testing'
    },
    {
      title: 'Healify (Real-Time ePharmacy)',
      description: `
• Production-style real-time ePharmacy web application with modern responsive UI/UX workflow  
• Built scalable frontend using React.js with reusable components and structured layout system  
• Integrated backend APIs for authentication, product data, cart operations, and order workflow  
• Connected frontend with Node.js-based backend services for secure data communication  
• Implemented Stripe payment gateway integration for secure online transactions  
• Developed complete shopping journey including browsing, dynamic cart updates, checkout, and payment confirmation  
• Focused on async API handling, clean architecture, and optimized user experience  

Backend: Node.js backend services integrated via APIs (frontend integration handled by me)
`,
      link: 'https://github.com/SyedaMahnoorIslam/Healify',
      tech: 'React.js, JavaScript, TailwindCSS, API Integration, Stripe'
    },

    {
      title: 'Course Allocation System (University Department Project)',
      description: `
• Academic automation system designed for university department course-to-teacher allocation workflow  
• Integrated Python-based backend allocation engine responsible for scheduling logic and rule processing  
• Connected frontend dashboard with backend APIs for real-time allocation data handling  
• Developed responsive admin interface using React.js, TailwindCSS, and modern JavaScript  
• Implemented async data fetching, structured rendering, and UI updates from backend responses  
• Designed to reduce manual scheduling effort and improve departmental workflow efficiency  

Backend: Python scheduling engine integrated via API endpoints (frontend integration handled by me)
`,
      link: 'https://github.com/SyedaMahnoorIslam/course-allocation-system',
      tech: 'React.js, JavaScript, TailwindCSS, Python Backend Integration'
    },


    {
      title: 'AzerStar',
      description: `
• Modern responsive React-based web application using reusable component architecture  
• Implemented structured layouts, responsive UI patterns, and optimized rendering workflow  
• Focused on scalable frontend structure and modular code organization  
`,
      link: 'https://github.com/SyedaMahnoorIslam/AzerStar',
      tech: 'React.js, JavaScript'
    },

    {
      title: 'Furniture Web',
      description: `
• Product showcase website developed using TypeScript for scalable and type-safe frontend logic  
• Implemented responsive product layouts and structured component hierarchy  
• Focused on maintainable UI structure and consistent design workflow  
`,
      link: 'https://github.com/SyedaMahnoorIslam/FurnitureWeb',
      tech: 'TypeScript'
    },

    {
      title: 'Expense Tracker',
      description: `
• Dynamic expense management application using JavaScript event-driven logic  
• Allows users to add, categorize, and monitor expenses with real-time UI updates  
• Demonstrates DOM manipulation, structured logic handling, and interactive data tracking  
`,
      link: 'https://github.com/SyedaMahnoorIslam/Expense-tracker',
      tech: 'JavaScript'
    },

    {
      title: 'Image Gallery',
      description: `
• Interactive image gallery featuring dynamic rendering and user-triggered navigation  
• Built with HTML and JavaScript focusing on DOM control and responsive layout handling  
• Provides structured visual browsing experience and UI interaction logic  
`,
      link: 'https://github.com/SyedaMahnoorIslam/Image-Gallery',
      tech: 'HTML, JavaScript'
    },

    {
      title: 'Mini Chat App',
      description: `
• Lightweight chat-style interface demonstrating messaging layout and UI structuring  
• Built using HTML frontend structure and browser-based interaction handling  
• Focused on clean layout organization and user-friendly message presentation  
`,
      link: 'https://github.com/SyedaMahnoorIslam/Mini-Chat-App',
      tech: 'HTML'
    },

    {
      title: 'Calculator Project',
      description: `
• Functional calculator implementing arithmetic operations with event-driven input handling  
• Demonstrates Dart & Flutter fundamentals including logic processing and UI interaction control  
`,
      link: 'https://github.com/SyedaMahnoorIslam/Calculator-project',
      tech: 'Flutter , dart'
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

        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text">
          🚀 Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -3 }}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 ${
                index === 1 ? 'border-yellow-400' : 'border-pink-500'
              }`}
              // className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4"
            >

              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                {project.description}
              </p>

              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4 font-semibold">
                📌 {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-cyan-400 font-bold hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
              >
                View on GitHub →
              </a>

            </motion.div>

          ))}

        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
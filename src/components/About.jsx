// import { motion } from 'framer-motion';

// function About() {
//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0, x: -100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="py-12 bg-gradient-to-r from-white to-pink-50 dark:from-gray-900 dark:to-indigo-900 text-center"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text">About Me</h2>
//         <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
//           👋 Hi! I&apos;m Syeda Mahnoor Islam, a passionate web developer with a flair for creating stunning, modern web applications. I love turning ideas into beautiful digital experiences using cutting-edge technologies.
//         </p>
//       </div>
//     </motion.section>
//   );
// }

// export default About;
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

        <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-cyan-400 bg-clip-text">
          About Me
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
{` Salam, I'm Syeda Mahnoor Islam — a Frontend Web Developer focused on building modern, responsive, and user-friendly web applications.

I specialize in React.js, JavaScript, and TailwindCSS, creating clean UI architectures and integrating backend APIs to deliver complete real-world web solutions. My experience includes developing production-style applications such as eCommerce and ePharmacy platforms, implementing secure payment integrations, and handling dynamic data workflows.

Alongside development, I also work in Quality Assurance on a live ePharmacy system, where I perform functional testing, write test cases, and help ensure reliable production-level software performance. This gives me a strong advantage in building applications that are not only visually polished but also stable, tested, and user-focused.

I am passionate about turning ideas into scalable digital products and continuously improving my technical skills to deliver professional, high-quality solutions for clients and teams.`}
        </p>

      </div>
    </motion.section>
  );
}

export default About;
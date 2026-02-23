// import { motion } from 'framer-motion';

// function Contact() {
//   return (
//     <motion.section
//       id="contact"
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="py-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 text-center"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text">📞 Get In Touch</h2>
//         <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Let&apos;s create something amazing together! ✨</p>
//         <div className="space-y-3">
//           <p className="text-gray-700 dark:text-gray-300">📧 <span className="font-semibold text-purple-600 dark:text-pink-400">syedamahnoorislam@gmail.com</span></p>
//           <p className="text-gray-700 dark:text-gray-300">🐙 GitHub: <a href="https://github.com/SyedaMahnoorIslam" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-600 dark:text-cyan-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">SyedaMahnoorIslam</a></p>
//           <p className="text-gray-700 dark:text-gray-300">💼 LinkedIn: <a href="https://www.linkedin.com/in/syeda-mahnoor-islam-4ba443394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400">[SyedaMahnoorIslam]</a></p>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default Contact;

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 text-center"
    >
      <div className="container mx-auto px-4">

        {/* ===== HEADING ===== */}
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text">
          📞 Get In Touch
        </h2>

        {/* ===== PROFESSIONAL CTA ===== */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          I’m available for freelance, remote projects, or collaboration. Let’s build something impactful together!
        </p>

        {/* ===== CONTACT BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Email */}
          <motion.a
            href="mailto:syedamahnoorislam@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-pink-400 px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope /> Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/SyedaMahnoorIslam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/syeda-mahnoor-islam-4ba443394"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin /> LinkedIn
          </motion.a>

        </div>

      </div>
    </motion.section>
  );
}

export default Contact;
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-indigo-900 dark:via-purple-800 dark:to-cyan-900 text-white text-center py-6 shadow-2xl"
    >
      <p className="font-semibold">💖 Made with passion by Syeda Mahnoor Islam</p>
      <p className="text-sm mt-2">© 2026 All rights reserved. ✨</p>
    </motion.footer>
  );
}

export default Footer;
import { motion } from 'framer-motion';

function GirlBossCharacter() {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto mb-8"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative">
          <img 
            src="/images/profile.jpg" 
            alt="Syeda Mahnoor Islam" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Floating sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: ["#ec4899", "#a855f7", "#06b6d4", "#fbbf24", "#ff6b9d"][i % 5],
              right: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * -40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default GirlBossCharacter;
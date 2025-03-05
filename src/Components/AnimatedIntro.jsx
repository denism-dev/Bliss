import React from 'react'
import { motion } from 'framer-motion';
const AnimatedIntro = () => {
  return (
<motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-blue-800 font-bold text-xl py-4"
    >
      Building Tomorrow’s Software, Today.
    </motion.div>
  )
}

export default AnimatedIntro
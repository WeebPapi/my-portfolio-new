import React from "react"
import { motion } from "framer-motion"

interface FlickeringTextProps {
  children: React.ReactNode
}
const FlickeringText: React.FC<FlickeringTextProps> = ({ children }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.span>
  )
}

export default FlickeringText

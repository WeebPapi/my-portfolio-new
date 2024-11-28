import React from "react"
import { motion } from "framer-motion"

interface WhooshInProps {
  children: React.ReactNode
}

const variants = {
  start: {
    y: -300,
    opacity: 0,
    skew: "-250deg",
  },
  end: {
    y: 0,
    opacity: 1,
    skew: 0,
  },
}

const WhooshIn: React.FC<WhooshInProps> = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 20,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  )
}

export default WhooshIn

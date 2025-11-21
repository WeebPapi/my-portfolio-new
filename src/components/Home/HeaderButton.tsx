import React from "react"
import { motion } from "framer-motion"
import { usePageTransition } from "../../context/PageTransitionContext"

const HeaderButton: React.FC = () => {
  const { startTransition } = usePageTransition()

  return (
    <motion.button
      className="start-btn"
      onClick={() => startTransition("/projects")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      View My Work
    </motion.button>
  )
}

export default HeaderButton

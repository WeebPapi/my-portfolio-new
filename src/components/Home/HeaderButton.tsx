import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const HeaderButton: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.button
      className="start-btn"
      onClick={() => navigate("/projects")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      View My Work
    </motion.button>
  )
}

export default HeaderButton

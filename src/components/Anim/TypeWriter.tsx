import React, { CSSProperties } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  text: string
  stagger?: number
  style?: CSSProperties
  animate?: boolean
  onAnimationComplete?: () => void
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  style, 
  stagger=0.01, 
  animate=true,
  onAnimationComplete 
}) => {
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: stagger,
        delayChildren: 0.1,
        duration: 0.5 
      } 
    },
  }
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 10,
        stiffness: 100
      } 
    },
  }

  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      onAnimationComplete={onAnimationComplete}
      style={style} 
    >
      {text.split("").map((char: string, i: number) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  )
}

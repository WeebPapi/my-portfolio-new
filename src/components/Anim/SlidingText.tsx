import React, { CSSProperties, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SlidingTextProps {
  style?: CSSProperties
  text: string
}

const SlidingText: React.FC<SlidingTextProps> = ({ text, style }) => {
  const [currentText, setCurrentText] = useState(text)

  useEffect(() => {
    setCurrentText(text)
  }, [text])

  return (
    <div style={{ overflow: "hidden", ...style }}>
      {" "}
      <AnimatePresence mode="wait">
        <motion.p
        className="sliding-text"
          key={currentText}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "relative",
            whiteSpace: "nowrap",
            marginBottom: 0,
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: '160px',
          }}
          exit={{ y: 100, opacity: 0 }}
        >
          {currentText}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default SlidingText

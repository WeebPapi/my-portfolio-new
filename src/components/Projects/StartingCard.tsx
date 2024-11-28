import React from "react"
import {
  AnimatePresence,
  motion,

} from "framer-motion"
interface StartingCardProps {
 image: string
}
const StartingCard: React.FC<StartingCardProps> = ({image}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        exit={{ opacity: 0 }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
          transformOrigin: "top",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} style={{ objectFit: "contain", borderRadius: 20 }} />
      </motion.div>
    </AnimatePresence>
  )
}

export default StartingCard

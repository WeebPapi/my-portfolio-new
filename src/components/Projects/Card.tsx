import React from "react"
import { motion } from "framer-motion"
import ShowMeButton from "./ShowMeButton"

interface CardProps {
  hexFrom: string
  hexTo: string
  image: string
  id: number
}

const Card: React.FC<CardProps> = ({ hexFrom, hexTo, image, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeIn" },
      }}
      className="card-container"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(128deg, ${hexFrom} 0%, ${hexTo} 100%)`,
        transformOrigin: "top",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
      <ShowMeButton id={id} />
    </motion.div>
  )
}

export default Card

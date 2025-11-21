import React from "react"
import { motion } from "framer-motion"
import React, { useState } from "react"
import ShowMeButton from "./ShowMeButton"

interface CardProps {
  hexFrom: string
  hexTo: string
  image: string
  id: number
}

const Card: React.FC<CardProps> = ({ hexFrom, hexTo, image, id }) => {
  const [isLoaded, setIsLoaded] = useState(false)

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
        alt="Project preview"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          filter: isLoaded ? "none" : "blur(32px)",
          transition: "filter 0.4s ease",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      />
      <ShowMeButton id={id} />
    </motion.div>
  )
}

export default Card

import { Typography } from "antd"
import { Flex } from "antd"
import React, { useEffect, useRef } from "react"
import FlickeringText from "../Anim/FlickeringText"
import { Typewriter } from "../Anim/TypeWriter"
import { motion, useInView } from "framer-motion"

interface IntroductionProps {
  setActiveText: React.Dispatch<React.SetStateAction<number | null>>
}

const Introduction: React.FC<IntroductionProps> = ({ setActiveText }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
  useEffect(() => {
    if (isInView) setActiveText(999)
  }, [isInView])
  return (
    <motion.div ref={ref}>
      <Flex
        vertical
        align="center"
        style={{
          paddingTop: "20vh",
        }}
      >
        <Typography.Title style={{ fontSize: 48 }}>
          Welcome to my Web Developer Portfolio!
          <FlickeringText>_</FlickeringText>
        </Typography.Title>
        <Typewriter
          text="Where code meets creativity. Berlin-based React developer crafting
            digital experiences with modern precision. Every component. Every
            interaction. Every pixel perfected. From TypeScript elegance to
            state management mastery, transforming complex challenges into
            seamless solutions. More than a developer — an architect of digital
            experiences. Currently shaping tomorrow's web at CoolStack while
            pursuing academic excellence at SRH. Your vision, engineered
            beautifully"
        />
      </Flex>
    </motion.div>
  )
}

export default Introduction

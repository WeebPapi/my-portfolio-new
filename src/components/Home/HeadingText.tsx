import React, { CSSProperties } from "react"
import { Typography } from "antd"
import { motion } from "framer-motion"
import WhooshIn from "../Anim/WhooshIn"

interface HeadingTextProps {
  style?: CSSProperties
}

const HeadingText: React.FC<HeadingTextProps> = ({ style }) => {
  return (
    <motion.div
      style={{ ...style }}
      variants={{
        start: {
          opacity: 0,
        },
        end: {
          opacity: 1,

          transition: {
            duration: 2.5,
            staggerChildren: 0.4,
          },
        },
      }}
      initial="start"
      animate="end"
    >
      <WhooshIn>
        <Typography.Title
          style={{ fontSize: 38, fontWeight: 600, width: 210, marginBottom: 0 }}
        >
          Aleksandre Kapanadze
        </Typography.Title>
      </WhooshIn>
      <WhooshIn>
        <Typography.Paragraph
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginTop: 8,
            color: "#808080",
          }}
        >
          Web Developer
        </Typography.Paragraph>
      </WhooshIn>
      <WhooshIn>
        <Typography.Paragraph style={{ fontSize: 22, fontWeight: 600 }}>
          📍 Berlin, Germany
        </Typography.Paragraph>
      </WhooshIn>
    </motion.div>
  )
}

export default HeadingText

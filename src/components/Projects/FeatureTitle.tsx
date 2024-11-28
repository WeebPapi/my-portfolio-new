import { Typography } from "antd"
import { useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"

interface FeatureTitleProps {
  children: React.ReactNode
  desc: string
  setActiveText: React.Dispatch<React.SetStateAction<number | null>>
  id: number
}

const FeatureTitle: React.FC<FeatureTitleProps> = ({
  children,
  setActiveText,
  id,
  desc,
}) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: "-55% 0px -55% 0px" })
  useEffect(() => {
    if (isInView) setActiveText(id)
    else setActiveText(null)
  }, [isInView, id])
  return (
    <>
      <div ref={ref} style={{ marginBottom: "10vh" }}>
        <Typography.Title
          style={{
            fontSize: 36,
            margin: "28px 0",
            width: "80%",
            color: isInView ? "black" : "lightgray",
            transition: "0.2s ease-in",
          }}
        >
          {children}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            fontSize: 16,
            color: isInView ? "#8e8e8e" : "#D3D3D3",
            transition: "0.2s ease-in",
          }}
        >
          {desc}
        </Typography.Paragraph>
      </div>
    </>
  )
}

export default FeatureTitle

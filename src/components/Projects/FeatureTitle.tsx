import { Typography } from "antd"
import React, { useEffect, useRef, useState } from "react"

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
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)
        if (inView) {
          setActiveText(id)
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [id, setActiveText])
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

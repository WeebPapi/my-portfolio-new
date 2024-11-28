import { Flex, Typography } from "antd"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect } from "react"
import SlidingText from "../Anim/SlidingText"

const SecondaryText: React.FC = () => {
  const slidingTextData = ["HTML/CSS 💻", "JavaScript 📈", "React ⚛️"]
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [selectedText, setSelectedText] = React.useState(
    slidingTextData[currentIndex]
  )

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === 2) {
          setSelectedText(() => {
            return slidingTextData[0]
          })
          return 0
        } else {
          setSelectedText(() => {
            return slidingTextData[prev + 1]
          })
          return prev + 1
        }
      })
    }, 2000)

    return () => {
      clearInterval(textInterval)
    }
  }, [])

  return (
    <Flex justify="center" align="center" className="secondary-text-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          width: '80%',
          height: 'auto',
          display: "flex",
          alignItems: "center",
          flexDirection: 'column',
        }}
      >
        <Typography.Title
        className="secondary-text"
          style={{
            fontSize: '1.5rem',
            width: "100%",
            textAlign: 'center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Shaping the web with{' '}
          <AnimatePresence>
            <SlidingText style={{ marginLeft: 10 }} text={selectedText} />
          </AnimatePresence>
        </Typography.Title>
      </motion.div>
    </Flex>
  )
}

export default SecondaryText

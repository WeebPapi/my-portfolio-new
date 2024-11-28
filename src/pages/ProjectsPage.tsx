import React from "react"
import { Flex } from "antd"
import { motion, useScroll } from "framer-motion"
import FeatureTitle from "../components/Projects/FeatureTitle"
import Card from "../components/Projects/Card"
import ProjectCard from '../components/Projects/ProjectCard';
import image1 from "../assets/cardImage1.png"
import image2 from "../assets/cardImage2.png"
import image3 from "../assets/cardImage3.png"
import image4 from "../assets/cardImage4.png"
import Introduction from "../components/Projects/Introduction"
import StartingCard from "../components/Projects/StartingCard"
import startingCardImage from "../assets/startingCard.png"
import CTA from "../components/Projects/CTA"

const features = [
  {
    title: "SwiftSight Chrome Extension",
    desc: `Read smarter. Not harder. SwiftSight transforms your browsing experience with intelligent text enhancement, guiding your eyes naturally through every word. Precision controls. Personal preferences. Perfect focus.`,
    id: 0,
  },
  {
    title: "K&CO Law Firm Landing Page",
    desc: `Legal excellence. Reimagined. Where tradition meets innovation in law. K&CO delivers centuries of legal wisdom through a lens of modern sophistication. Precision. Purpose. Peace of mind.`,
    id: 1,
  },
  {
    title: "HooBank Modern Bank App Landing Page",
    desc: `Banking at the speed of life. Where financial freedom meets technological elegance. More than an app — it's your financial life, beautifully orchestrated. Smart features. Seamless security. Stunning simplicity.`,
    id: 2,
  },
  {
    title: "Recipe Database Website",
    desc: `Your culinary universe, curated. Where passionate cooking meets intelligent organization. Navigate global cuisines and dietary preferences with intuitive precision. Every meal. Every diet. Every craving answered.`,
    id: 3,
  },
]

const gradients = [
  {
    hexFrom: "#e0dff7",
    hexTo: "#0069cf",
  },
  {
    hexFrom: "#f8d1c3",
    hexTo: "#f36f05",
  },
  {
    hexFrom: "#f3eaf7",
    hexTo: "#9200cf",
  },
  {
    hexFrom: "#f6dcd6",
    hexTo: "#cf2600",
  },
  {
    hexFrom: "#dcf4d4",
    hexTo: "#00cf03",
  },
]

const images = [image1, image2, image3, image4]

const ProjectsPage: React.FC = () => {
  const [activeText, setActiveText] = React.useState<number | null>(null)
  const { scrollYProgress } = useScroll()

  return (
    <>
      <Flex
        justify="center"
        align="start"
        className="projects-page-container"
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            background: "black",
            height: 8,
            width: "100%",
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            transformOrigin: "left",
            zIndex: 40,
          }}
        ></motion.div>
        <Flex
          vertical
          align="center"
          style={{
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Introduction setActiveText={setActiveText} />
          <Flex
            vertical
            justify="center"
            gap={20}
            style={{
              width: "max-content",
              maxWidth: "100%",
              minHeight: "100vh",
              padding: "20vh 0",
            }}
          >
            <ul
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              {features.map((item) => (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  key={item.id}
                >
                  <FeatureTitle
                    desc={item.desc}
                    setActiveText={setActiveText}
                    id={item.id}
                  >
                    {item.title}
                  </FeatureTitle>
                </li>
              ))}
            </ul>
          </Flex>
        </Flex>
        <Flex
          style={{
            width: "50%",
            height: "100vh",
            position: "sticky",
            top: 0,
          }}
          justify="center"
          align="center"
        >
          <motion.div
            style={{
              width: "560px",
              aspectRatio: 1,
              background: "#180f4a",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {activeText !== 999 ? (
              activeText || activeText === 0 ? (
                <Card
                  hexFrom={gradients[activeText].hexFrom}
                  hexTo={gradients[activeText].hexTo}
                  image={images[activeText]}
                  id={features[activeText].id}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className="dots"
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </motion.div>
              )
            ) : (
              <StartingCard image={startingCardImage} />
            )}
          </motion.div>
        </Flex>
      </Flex>
      <Flex className="mobile-projects-container">
        {features.map((item) => (
          <ProjectCard key={item.id} title={item.title} desc={item.desc} id={item.id} />
        ))}
      </Flex>
      <Flex>
        <CTA />
      </Flex>
    </>
  )
}

export default ProjectsPage

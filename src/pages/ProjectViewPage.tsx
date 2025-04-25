import React, { useEffect, useState, useRef, useMemo, useCallback } from "react"
import { Carousel, Flex, Typography } from "antd"
import { useParams } from "react-router-dom"
import { projectData } from "../data/projectData"
import Badge from "../components/Badge"
import { motion } from "framer-motion"
import { CarouselRef } from "antd/es/carousel"
import ExternalLink from "../components/Projects/ExternalLink"
import { useMediaQuery } from "react-responsive"

const MobileCarousel = ({
  images,
  onSlideChange,
}: {
  images: string[]
  onSlideChange: (index: number) => void
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const scrollLeft = containerRef.current.scrollLeft
    const itemWidth = containerRef.current.offsetWidth
    const newIndex = Math.round(scrollLeft / itemWidth)
    onSlideChange(newIndex)
  }, [onSlideChange])

  return (
    <div className="mobile-carousel-container">
      <div
        className="mobile-carousel"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div key={index} className="mobile-carousel-item">
            <img src={image} alt={`Project image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectViewPage: React.FC = () => {
  const { projectId } = useParams()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [labels, setLabels] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  useEffect(() => {
    if (projectId && projectData) {
      const project = projectData[parseInt(projectId)]

      setTitle(project.title)
      setDesc(project.desc)

      const projectLabels = project.labels || []
      setLabels(projectLabels)

      const projectLinks = project.links || []
      setLinks(projectLinks)

      setImages(project.images)
      setTechnologies(project.technologies)

      setCurrentSlide(0)
      if (carouselRef.current) {
        carouselRef.current.goTo(0)
      }
    }
  }, [projectId])

  const currentLabel = useMemo(() => {
    if (labels.length === 0) return "No Label"
    return labels[currentSlide] || labels[0]
  }, [labels, currentSlide])

  const handleSlideChange = (current: number) => {
    setCurrentSlide(current)
  }

  return (
    <Flex
      style={{ width: "100%", minHeight: "100vh", padding: "1rem" }}
      vertical
      align="center"
    >
      {isMobile ? (
        <MobileCarousel images={images} onSlideChange={handleSlideChange} />
      ) : (
        <Carousel
          ref={carouselRef}
          adaptiveHeight
          className="project-view-carousel"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            borderRadius: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
          afterChange={handleSlideChange}
          beforeChange={(_, to) => setCurrentSlide(to)}
          dots={{ className: "control-dots" }}
          dotPosition="bottom"
          autoplay
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 1rem",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                  borderRadius: 30,
                }}
                src={image}
                alt={`Project image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      )}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          margin: "1rem 0",
        }}
      >
        <Typography.Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "lightgray",
            textAlign: "center",
            display: "block",
            width: "100%",
          }}
        >
          {currentLabel}
        </Typography.Text>
      </motion.div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "0.5rem",
          justifyContent: "center",
        }}
      >
        {technologies.map((tech, index) => (
          <Badge key={index} technology={tech} />
        ))}
      </div>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ margin: "5vh 0 3vh 0", maxWidth: 900 }}
      >
        <Typography.Title
          className="project-view-title"
          style={{ width: "100%" }}
        >
          {title}
        </Typography.Title>
        <Typography.Paragraph
          className="project-view-description"
          style={{ fontSize: 18, color: "#6B7280" }}
        >
          {desc}
        </Typography.Paragraph>
        <Flex
          className="project-view-links"
          gap={64}
          style={{ margin: "1rem 0 2rem 0", width: "100%" }}
        >
          <ExternalLink label="View the project on GitHub" link={links[0]} />
          <ExternalLink label="Visit the Website" link={links[1]} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProjectViewPage

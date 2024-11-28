import React, { useState, useRef } from 'react'
import { Flex } from 'antd'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Typewriter } from '../Anim/TypeWriter'
import SocialLink, { SocialPlatform } from './SocialLink'
import { socialLinks } from '../../data/socialLinks'
import { useMediaQuery } from 'react-responsive'

const ContactHeader:React.FC = () => {
  const [firstDone, setFirstDone] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  const texts = [
    'Want to commission a project?',
    'Get in touch through the following links'
  ]

  const parentVariants = {
    start: { opacity: 0 },
    end: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.1,
        staggerChildren: 0.3,
        duration: 0.5 
      } 
    },
  }

  return (
    <Flex 
      vertical 
      justify='center'
      align="center" 
      style={{ 
        width: "100%", 
        minHeight: "100vh", 
        position: "relative", 
        zIndex: 10,
        padding: isMobile ? '1rem' : 0
      }}
    >
      <motion.div
        style={{ 
          opacity: 1,
          translateZ: 0,
          willChange: 'transform'
        }}
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 100
        }}
      >
        <Typewriter 
          style={{ 
            fontSize: isMobile ? 32 : 48, 
            textAlign: 'center',
            lineHeight: 1.2,
            margin: isMobile ? '0 1rem' : 0
          }} 
          text={texts[0]} 
          stagger={0.05}
          animate={true}
          onAnimationComplete={() => {
             setFirstDone(true)
          }}
        />
      </motion.div>

      <motion.div
        style={{ 
          opacity: 1,
          translateZ: 0,
          willChange: 'transform',
          margin: isMobile ? '1rem 0' : '2rem 0'
        }}
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 100
        }}
      >
        <Typewriter 
          style={{ 
            fontSize: isMobile ? 14 : 16, 
            textAlign: 'center',
            margin: isMobile ? '0 1rem' : 0
          }} 
          text={texts[1]} 
          stagger={0.03}
          animate={firstDone}
        />
      </motion.div>
      <motion.div
        style={{ 
          opacity: 1,
          translateZ: 0,
          willChange: 'transform'
        }}
        variants={parentVariants}
        initial="start"
        animate="end"
        className={`w-full flex ${isMobile ? 'flex-col items-center' : 'justify-center flex-wrap'} ${isMobile ? 'mt-[10%] px-[5%]' : 'mt-[5%] px-[15%]'}`}
      >
      {socialLinks.map((platform) => (
        <SocialLink 
          key={platform.name} 
          platform={platform.name as SocialPlatform} 
          link={platform.url} 
          index={platform.index}
        />
      ))}
      </motion.div>
    </Flex>
  )
}

export default ContactHeader
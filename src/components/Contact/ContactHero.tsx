import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SECTION_HEIGHT = 1500

const ContactHero:React.FC = () => {
  const { scrollY } = useScroll()
  

  const zoom = useTransform(scrollY, [0, SECTION_HEIGHT], ['140%', '100%'])
  const yTranslate = useTransform(scrollY, [0, SECTION_HEIGHT], ['0%', '-20%'])

  return (
    <div 
      className='relative w-full' 
      style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`}}
    >
      <motion.div 
        className='sticky top-0 h-screen w-full' 
        style={{
          backgroundImage: `url(src/assets/contactHero.jpg)`, 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: zoom as unknown as string,
          y: yTranslate,
        }}
      />
    </div>
  )
}

export default ContactHero
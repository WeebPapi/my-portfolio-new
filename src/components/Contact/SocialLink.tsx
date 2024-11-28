import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { TbBrandFiverr } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { useMediaQuery } from 'react-responsive'

export type SocialPlatform = 'github' | 'linkedin' | 'fiverr' | 'upwork'  | 'mail'

interface SocialLinkProps {
  platform: SocialPlatform
  link: string
}

const platformConfig = {
  github: {
    color: '#24292e',
    hoverColor: '#333',
    icon: FaGithub,
    label: 'GitHub'
  },
  linkedin: {
    color: '#0077B5',
    hoverColor: '#0066A0',
    icon: FaLinkedin,
    label: 'LinkedIn'
  },
  fiverr: {
    color: '#1DBF73',
    hoverColor: '#19A659',
    icon: TbBrandFiverr,
    label: 'Fiverr'
  },
  upwork: {
    color: '#14A800',
    hoverColor: '#118400',
    icon: SiUpwork,
    label: 'Upwork'
  },
  mail: {
    color: '#fabc11',
    hoverColor: '#e3aa0e',
    icon: IoIosMail,
    label: 'Email'
  }
}

const SocialLink: React.FC<SocialLinkProps & { index: number }> = ({ platform, link, index }) => {
  const { color = '#000', hoverColor = '#000', icon: Icon = FaGithub, label = 'Unknown' } = platformConfig[platform] || {};
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const variants = {
    start: {
      y: -300,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.3,
      },
    },
  };

  return ( platformConfig[platform] &&
    <motion.a
      variants={variants}
      initial="start"
      animate="end"
      href={platform === 'mail' ? `mailto:${link}` : link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '0.25rem' : '0.5rem',
        padding: isMobile ? '0.75rem 1rem' : '0.75rem 1.25rem',
        borderRadius: 40,
        backgroundColor: color,
        color: 'white',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: isMobile ? 14 : 16,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease',
        width: isMobile ? '80%' : '30%',
        marginBottom: isMobile ? '1rem' : '2rem',
        marginRight: isMobile ? 0 : '5rem',
        cursor: 'pointer'
      }}
      whileHover={{ 
        backgroundColor: hoverColor,
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon style={{ fontSize: isMobile ? 20 : 24 }} />
      {label}
    </motion.a>
  )
}

export default SocialLink

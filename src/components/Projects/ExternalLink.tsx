import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Typography } from 'antd';

interface ExternalLinkProps {
    label: string
    link: string    
}
const ExternalLink:React.FC<ExternalLinkProps> = ({label, link}) => {
  return (
    <Typography.Link target='_blank' href={link} style={{ fontSize: 18, color: '#141cb3', backgroundColor: '#fdfdfd', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: 40, boxShadow: '22px 29px 72px -5px rgba(214,211,214,1)' }}><FaExternalLinkAlt /> {label}</Typography.Link>
  )
}

export default ExternalLink
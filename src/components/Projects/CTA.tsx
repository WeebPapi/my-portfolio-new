import React from 'react'
import { Button, Flex, Typography } from 'antd'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CTA:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', background: `url(src/assets/contactHero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '5vh 0'}} className="cta-container">
        <Flex vertical align="start">
        <Typography.Title style={{fontSize: '3rem', color: 'white', maxWidth: '90vw', textAlign: 'left'}} className="cta-title">Like what you see?</Typography.Title>
        <Typography.Paragraph style={{fontSize: '1.25rem', color: 'white', maxWidth: '90vw', textAlign: 'center'}} className="cta-paragraph">Let's work together!</Typography.Paragraph>
        <Button icon={<FaArrowRight />} onClick={() => {navigate('/contact')}} style={{marginTop: '2rem', backgroundColor: 'white', color: 'black', padding: '1rem 1.5rem', borderRadius: '30px', borderWidth: '0!important', fontSize: '1rem', fontWeight: 600}} className="cta-button">Get in touch</Button>
        </Flex>
    </div>
  )
}

export default CTA
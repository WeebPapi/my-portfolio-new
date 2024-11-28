import React from "react"
import { Flex } from "antd"
import ContactHeader from "../components/Contact/ContactHeader"

const ContactPage: React.FC = () => {
  return (
    <Flex justify="center" align="center" style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <ContactHeader />
    
    </Flex>
  )
}

export default ContactPage

import React from "react"
import { Flex } from "antd"
import HeadingText from "./HeadingText"
import HeaderButton from "./HeaderButton"

const Header: React.FC = () => {
  return (
    <Flex justify="center" align="center" gap={"large"} className="header-container">
      <HeadingText style={{ marginRight: "2.5rem" }} />
      <HeaderButton />
    </Flex>
  )
}

export default Header

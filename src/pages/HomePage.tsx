import React from "react"
import Header from "../components/Home/Header"
import { Divider } from "antd"

import SecondaryText from "../components/Home/SecondaryText"

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Divider style={{ margin: "2rem 0 6rem 0" }}/>
      <SecondaryText />
    </>
  )
}

export default HomePage

import { AnimatePresence } from "framer-motion"
import React from "react"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import PageTransition from "../components/Anim/PageTransition"
import Navbar from "../components/Navbar"

const MainLayout: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Navbar />
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

export default MainLayout

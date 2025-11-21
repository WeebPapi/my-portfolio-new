import React, { MouseEvent } from "react"
import { Menu } from "antd"
import MenuItem from "antd/es/menu/MenuItem"
import { Link, useLocation } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import { usePageTransition } from "../context/PageTransitionContext"

const Navbar: React.FC = () => {
  const location = useLocation()
  const { startTransition, isTransitioning } = usePageTransition()
  const menuItems = [
    { key: "1", label: "Home", path: "/" },
    { key: "2", label: "Projects", path: "/projects" },
    { key: "3", label: "Contact", path: "/contact" },
  ]

  const getSelectedKey = () => {
    const path = location.pathname
    if (path === "/") return "1"
    if (path.startsWith("/projects")) return "2"
    if (path.startsWith("/contact")) return "3"
    return undefined
  }

  const selectedKey = getSelectedKey()

  const handleNavClick =
    (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      if (location.pathname === path || isTransitioning) {
        return
      }
      startTransition(path)
    }

  return (
    <Menu
      mode="horizontal"
      selectedKeys={selectedKey ? [selectedKey] : []}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 40,
      }}
    >
      {location.pathname !== "/" && (
        <div className="goBack" style={{ width: "100%", display: "flex", justifyContent: "start" }}>
          <MenuItem
            onClick={() => startTransition(-1)}
            icon={<FaArrowLeft />}
            disabled={isTransitioning}
            style={{ color: "black", fontSize: 18, padding: "20px", fontWeight: "bold", float: "left" }}
          >
            Go Back
          </MenuItem>
        </div>
      )}
      {menuItems.map((item) => (
        <MenuItem key={item.key} style={{ color: "black", fontSize: 18, padding: "20px", fontWeight: "bold" }}>
          <Link className="link" to={item.path} onClick={handleNavClick(item.path)}>
            {item.label}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default Navbar
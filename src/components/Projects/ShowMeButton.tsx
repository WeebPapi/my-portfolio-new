import { Button } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

interface ShowMeButtonProps {
  id: number
}

const ShowMeButton: React.FC<ShowMeButtonProps> = ({ id }) => {
  const navigate = useNavigate()
  return (
    <Button
      style={{ position: "absolute", bottom: "5%", left: "85%" }}
      color="default"
      variant="solid"
      size="large"
      onClick={() => {
        navigate(`/projects/${id}`)
      }}
    >
      Show Me
    </Button>
  )
}

export default ShowMeButton

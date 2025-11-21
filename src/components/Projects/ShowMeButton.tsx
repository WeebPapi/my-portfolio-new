import { Button } from "antd"
import React from "react"
import { usePageTransition } from "../../context/PageTransitionContext"

interface ShowMeButtonProps {
  id: number
}

const ShowMeButton: React.FC<ShowMeButtonProps> = ({ id }) => {
  const { startTransition } = usePageTransition()
  return (
    <Button
      style={{ position: "absolute", bottom: "5%", left: "85%" }}
      color="default"
      variant="solid"
      size="large"
      onClick={() => {
        startTransition(`/projects/${id}`)
      }}
    >
      Show Me
    </Button>
  )
}

export default ShowMeButton

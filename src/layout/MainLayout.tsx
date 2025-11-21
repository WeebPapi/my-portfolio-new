import React, { useCallback, useMemo, useRef, useState } from "react"
import { NavigateOptions, Outlet, To, useNavigate } from "react-router-dom"
import PageTransition, { PageTransitionHandle } from "../components/Anim/PageTransition"
import Navbar from "../components/Navbar"
import { PageTransitionContext } from "../context/PageTransitionContext"

const waitForNextFrame = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve())
  })

const MainLayout: React.FC = () => {
  const navigate = useNavigate()
  const transitionRef = useRef<PageTransitionHandle>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionLockRef = useRef(false)

  const startTransition = useCallback(
    async (to: To | number, options?: NavigateOptions) => {
      if (transitionLockRef.current) {
        return
      }

      const overlay = transitionRef.current
      if (!overlay) {
        navigate(to, options)
        return
      }

      transitionLockRef.current = true
      setIsTransitioning(true)

      try {
        await overlay.animateOut()
        navigate(to, options)
        await waitForNextFrame()
        await overlay.animateIn()
      } finally {
        transitionLockRef.current = false
        setIsTransitioning(false)
      }
    },
    [navigate]
  )

  const contextValue = useMemo(
    () => ({
      startTransition,
      isTransitioning,
    }),
    [startTransition, isTransitioning]
  )

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <PageTransition ref={transitionRef}>
        <Navbar />
        <Outlet />
      </PageTransition>
    </PageTransitionContext.Provider>
  )
}

export default MainLayout

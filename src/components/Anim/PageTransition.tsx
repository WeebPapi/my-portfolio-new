import { motion, useAnimationControls } from "framer-motion"
import { forwardRef, ReactNode, useEffect, useImperativeHandle } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const TRANSITION = { duration: 0.45, ease: [0.645, 0.045, 0.355, 1] }

export type PageTransitionHandle = {
  animateOut: () => Promise<void>
  animateIn: () => Promise<void>
}

const PageTransition = forwardRef<PageTransitionHandle, PageTransitionProps>(({ children }, ref) => {
  const slideInControls = useAnimationControls()
  const slideOutControls = useAnimationControls()

  useImperativeHandle(ref, () => ({
    animateOut: () =>
      slideInControls.start({
        scaleY: 1,
        transition: TRANSITION,
      }),
    animateIn: async () => {
      slideInControls.set({ scaleY: 0 })
      slideOutControls.set({ scaleY: 1 })
      await slideOutControls.start({
        scaleY: 0,
        transition: TRANSITION,
      })
    },
  }))

  useEffect(() => {
    slideInControls.set({ scaleY: 0 })
    slideOutControls.set({ scaleY: 1 })
    slideOutControls.start({
      scaleY: 0,
      transition: TRANSITION,
    })
  }, [slideInControls, slideOutControls])

  return (
    <>
      <div className="page-transition__content">{children}</div>
      <motion.div className="slide-in" initial={{ scaleY: 0 }} animate={slideInControls} />
      <motion.div className="slide-out" initial={{ scaleY: 1 }} animate={slideOutControls} />
    </>
  )
})

PageTransition.displayName = "PageTransition"

export default PageTransition

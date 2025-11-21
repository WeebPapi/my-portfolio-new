import { createContext, useContext } from "react"
import { NavigateOptions, To } from "react-router-dom"

type PageTransitionContextValue = {
  startTransition: (to: To | number, options?: NavigateOptions) => Promise<void>
  isTransitioning: boolean
}

const noop = async () => {}

export const PageTransitionContext = createContext<PageTransitionContextValue>({
  startTransition: noop,
  isTransitioning: false,
})

export const usePageTransition = () => useContext(PageTransitionContext)


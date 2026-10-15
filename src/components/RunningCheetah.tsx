import React, { useEffect, useState } from "react"

// Side-on cheetah silhouette for the footer; the gallop and tail flick are CSS (.cheetah-run in index.css).
const frontLeg = "M71 24 L72 36 L70 46.5 L73.5 47.5"
const hindLeg = "M34 22 L39 34 L34.5 46.5 L38 47.5"

// Sprints in, slows to a stop on the wordmark, looks around flicking its tail, then bolts off. [phase, ms]
const routine = [
  ["in", 1600],
  ["rest", 3200],
  ["out", 1000],
  ["away", 8000],
] as const

const Leg: React.FC<{ className: string; d: string; width: number }> = ({ className, d, width }) => (
  <path
    className={className}
    d={d}
    fill="none"
    stroke="currentColor"
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const RunningCheetah: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Step -1 is a short off-screen wait so the first entrance comes soon after the page loads.
  const [step, setStep] = useState(-1)
  const [phase, duration] = step < 0 ? ["away", 1200] : routine[step]

  useEffect(() => {
    const next = setTimeout(() => setStep((step + 1) % routine.length), duration)
    return () => clearTimeout(next)
  }, [step, phase, duration])

  return (
    <svg viewBox="0 0 100 52" aria-hidden="true" data-phase={phase} className={`cheetah-run ${className}`}>
      <g className="torso">
        <Leg className="front far" d={frontLeg} width={2.6} />
        <Leg className="hind far" d={hindLeg} width={3} />
        <path
          fill="currentColor"
          d="M32 19C40 16 56 14 66 15C72 15.5 77 18 78 22C79 27 75 31 70 31C64 31 60 28 54 26C48 24.5 42 26 36 27.5C30 29 27 25 28 22C28.5 20.5 30 19.5 32 19Z"
        />
        <path
          className="head"
          fill="currentColor"
          d="M70 17C73 14 77 12.5 81 12.5L81.8 10.5L83.4 12.6C86.5 13 88.5 15 88 17C87.5 18.6 85 19 82.5 19.2C80 19.5 77 21.5 75 24Z"
        />
        <path
          className="tail"
          d="M30 21C22 21 15 25 10 29C7 31.5 4 31 3.5 28"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <Leg className="front" d={frontLeg} width={2.6} />
        <Leg className="hind" d={hindLeg} width={3} />
      </g>
    </svg>
  )
}

export default RunningCheetah

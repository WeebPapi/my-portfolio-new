import React, { useEffect, useRef, useState } from "react"
import sheet from "../assets/cheetah/cheetah-sheet.png"
import trail from "../assets/cheetah/trail-sheet.png"

// Pixel sprite: 24 frames of 65x33 in one strip, nose and ground line aligned across frames.
// 0-7 gallop, 8-10 brake, 11-13 push off, 14-17 breathe, 18-20 sit and look, 21-23 tail flick.
const FRAMES = 24
const CELL_W = 65

// Sprints in, brakes on the wordmark, looks around flicking its tail, then bolts off. [phase, ms]
const routine = [
  ["in", 1600],
  ["rest", 3200],
  ["out", 1000],
  ["away", 8000],
] as const
type Phase = (typeof routine)[number][0]

const gallop = (ms: number) =>
  Array.from({ length: Math.ceil(ms / 70) }, (_, i): [number, number] => [i % 8, 70])

// Sprite frames per phase as [frame, ms]; the last frame holds until the phase changes.
const frames: Record<Phase, [number, number][]> = {
  in: [...gallop(1200), [8, 130], [9, 130], [10, 140]],
  rest: [
    [14, 200], [15, 200], [16, 200], [17, 200],
    [18, 450], [19, 650], [18, 350],
    [14, 200], [21, 110], [22, 110], [23, 110], [22, 110], [21, 110], [14, 0],
  ],
  out: [[11, 90], [12, 90], [13, 90], ...gallop(800)],
  away: [[0, 0]],
}

const RunningCheetah: React.FC = () => {
  // Step -1 is a short off-screen wait so the first entrance comes soon after the page loads.
  const [step, setStep] = useState(-1)
  const [phase, duration] = step < 0 ? ["away" as const, 1200] : routine[step]
  const layer = useRef<HTMLDivElement>(null)
  const sprite = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const next = setTimeout(() => setStep((step + 1) % routine.length), duration)
    return () => clearTimeout(next)
  }, [step, duration])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    let lastSpark = 0

    // Splashes stay where they spawn, so the running cat leaves them behind.
    const spark = () => {
      if (!layer.current || !sprite.current) return
      const base = layer.current.getBoundingClientRect()
      const cat = sprite.current.getBoundingClientRect()
      const scale = cat.width / CELL_W
      const el = document.createElement("div")
      el.className = "cheetah-spark"
      el.style.backgroundImage = `url(${trail})`
      // Hind paws sit around x 17 on the ground line; the 30x26 splash is bottom-centred there.
      el.style.left = `${cat.left - base.left + (17 - 15) * scale}px`
      el.style.top = `${cat.top - base.top + (33 - 26) * scale}px`
      el.addEventListener("animationend", () => el.remove())
      layer.current.append(el)
    }

    const show = (i: number) => {
      const [frame, ms] = frames[phase][i]
      sprite.current?.style.setProperty("background-position", `${(frame / (FRAMES - 1)) * 100}% 0`)
      const now = performance.now()
      if (frame < 8 && phase !== "away" && now - lastSpark >= 140) {
        lastSpark = now
        spark()
      }
      if (i + 1 < frames[phase].length) timer = setTimeout(() => show(i + 1), ms)
    }
    show(0)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <div ref={layer} className="cheetah-layer absolute inset-0">
      <div
        ref={sprite}
        data-phase={phase}
        className="cheetah-run absolute bottom-0 left-0"
        style={{ backgroundImage: `url(${sheet})` }}
      />
    </div>
  )
}

export default RunningCheetah

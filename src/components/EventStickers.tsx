import React from "react"
import { Project } from "../data/projects"
import CheetahMark from "./CheetahMark"

// Hand-placed sticker spots: [left %, top %, rotation deg]. They keep the centre clear for the cheetah.
const sponsorSlots = [[20, 20, -9], [72, 17, 7], [20, 50, 5], [46, 14, 3]]
const nameSlot = [26, 80, 4]
const factSlots = [[54, 86, -4], [50, 32, 6]]
const awardSlot = [76, 68, -12]

const place = ([left, top, rotate]: number[]) =>
  ({ left: `${left}%`, top: `${top}%`, "--r": `${rotate}deg` }) as React.CSSProperties

// A sticker-bombed laptop lid: sponsors, the award and a few facts from the event.
// Decorative copy of information also given in text, so it is hidden from screen readers.
const EventStickers: React.FC<{ name: string; event: NonNullable<Project["event"]> }> = ({
  name,
  event,
}) => (
  <figure>
    <div aria-hidden="true" className="lid max-w-2xl">
      <CheetahMark className="absolute left-1/2 top-1/2 w-[12cqw] -translate-x-1/2 -translate-y-1/2 text-paper opacity-[0.08]" />
      {event.sponsors.map((sponsor, index) => (
        <span
          key={sponsor.name}
          style={place(sponsorSlots[index % sponsorSlots.length])}
          className={`sticker ${sponsor.wordmark ? "sticker-rect" : "sticker-pill"}`}
        >
          <img src={sponsor.logo} alt="" />
          {!sponsor.wordmark && sponsor.name}
        </span>
      ))}
      <span style={place(nameSlot)} className="sticker sticker-name">
        {name}
      </span>
      {event.facts.map((fact, index) => (
        <span key={fact} style={place(factSlots[index % factSlots.length])} className="sticker sticker-note">
          {fact}
        </span>
      ))}
      <span style={place(awardSlot)} className="sticker sticker-award">
        {/* Longer words get a smaller size so they stay inside the circle. */}
        <b style={{ fontSize: `${Math.min(6, 26 / event.award.big.length)}cqw` }}>{event.award.big}</b>
        {event.award.small}
      </span>
    </div>
    <figcaption className="mt-3 text-sm text-muted">
      Sponsors: {event.sponsors.map((sponsor) => sponsor.name).join(", ")}
    </figcaption>
  </figure>
)

export default EventStickers

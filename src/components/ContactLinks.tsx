import React from "react"
import { socialLinks } from "../data/socialLinks"

const ContactLinks: React.FC = () => (
  <ul className="border-t-2 border-ink">
    {socialLinks.map((link) => (
      <li key={link.label} className="border-b-2 border-ink">
        <a
          href={link.href}
          className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 px-1 py-5 transition-[background-color,color,padding] duration-200 hover:bg-ink hover:px-4 hover:text-paper focus-visible:bg-ink focus-visible:px-4 focus-visible:text-paper"
          {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <span className="w-24 font-mono text-xs uppercase tracking-[0.14em] opacity-70">
            {link.label}
          </span>
          <span className="break-all font-display text-[clamp(1.25rem,3.4vw,2.5rem)] font-semibold leading-tight tracking-tight">
            {link.text}
          </span>
          <span
            aria-hidden="true"
            className="ml-auto text-2xl text-accent transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-soft group-focus-visible:text-accent-soft"
          >
            ↗
          </span>
        </a>
      </li>
    ))}
  </ul>
)

export default ContactLinks

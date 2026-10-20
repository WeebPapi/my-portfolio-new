import React from "react"
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom"
import CheetahMark from "../components/CheetahMark"
import RunningCheetah from "../components/RunningCheetah"
import { socialLinks } from "../data/socialLinks"

const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
]

const asciiName = `888    d8P         d8888 8888888b.     d8888 888b    888        d8888 8888888b. 8888888888P 8888888888
888   d8P         d88888 888   Y88b   d88888 8888b   888       d88888 888  "Y88b      d88P  888
888  d8P         d88P888 888    888  d88P888 88888b  888      d88P888 888    888     d88P   888
888d88K         d88P 888 888   d88P d88P 888 888Y88b 888     d88P 888 888    888    d88P    8888888
8888888b       d88P  888 8888888P" d88P  888 888 Y88b888    d88P  888 888    888   d88P     888
888  Y88b     d88P   888 888      d88P   888 888  Y88888   d88P   888 888    888  d88P      888
888   Y88b   d8888888888 888     d8888888888 888   Y8888  d8888888888 888  .d88P d88P       888
888    Y88b d88P     888 888    d88P     888 888    Y888 d88P     888 8888888P" d8888888888 8888888888`

// Column where each letter starts on row r; the A's lean, so their edge moves left one column per row.
const letterStarts = (r: number) => [0, 19 - r, 25, 39 - r, 45, 64 - r, 70, 80, 92]

const MainLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
    >
      Skip to content
    </a>
    <header className="border-b-2 border-ink">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          viewTransition
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          {/* Head tilts on hover, like a curious cat. */}
          <CheetahMark className="h-6 w-6 text-accent transition-transform duration-300 group-hover:-rotate-12" />
          Alex Kapanadze
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                viewTransition
                className={({ isActive }) =>
                  `border-b-2 py-1 text-base transition-colors hover:border-ink ${
                    isActive ? "border-accent font-medium" : "border-transparent text-muted hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <Outlet />
    </main>
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 pt-10 text-sm text-paper/80">
        <p>Aleksandre Kapanadze · Berlin, Germany</p>
        <ul className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="underline decoration-paper/30 decoration-2 underline-offset-4 outline-accent-soft transition-colors hover:decoration-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* A small cheetah drops by on top of the wordmark now and then. */}
      <div aria-hidden="true" className="relative mt-6 h-10 motion-reduce:hidden sm:h-12">
        <RunningCheetah />
      </div>
      {/* Full-width ASCII wordmark (figlet "Colossal"); 1.5vw keeps its 102 columns inside the viewport. */}
      <pre
        aria-hidden="true"
        className="mx-auto w-fit max-w-full select-none overflow-hidden pb-6 font-mono text-[1.5vw] font-bold leading-none text-paper/45"
      >
        {/* A current runs down each letter row by row, then jumps to the next letter. */}
        {asciiName.split("\n").map((row, r) => {
          const starts = letterStarts(r)
          return (
            <React.Fragment key={r}>
              {starts.map((start, letter) => (
                <span
                  key={letter}
                  className="animate-current"
                  style={{ animationDelay: `${(letter * 8 + r) * 35}ms` }}
                >
                  {row.slice(start, starts[letter + 1])}
                </span>
              ))}
              {"\n"}
            </React.Fragment>
          )
        })}
      </pre>
    </footer>
    <ScrollRestoration />
  </div>
)

export default MainLayout

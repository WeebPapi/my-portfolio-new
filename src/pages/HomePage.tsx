import React, { useRef } from "react"
import { Link } from "react-router-dom"
import ContactLinks from "../components/ContactLinks"
import ProjectCard from "../components/ProjectCard"
import { featuredProjects, projects } from "../data/projects"
import { usePageTitle } from "../usePageTitle"
import portrait from "../assets/portrait.jpg"

const headline = ["Full-stack engineer", "building products", "with AI agents."]

const aiTools = [
  {
    name: "T3 Code",
    use: "Orchestrating tasks across ChatGPT, Claude and Cursor.",
  },
  { name: "Cursor and Grok", use: "Scaffolding and maintenance." },
  {
    name: "OpenAI",
    use: "Deeper technical analysis and security-sensitive backend work.",
  },
  { name: "Claude", use: "Frontend and design-heavy tasks." },
  {
    name: "Skills",
    use: "Reusable instructions agents load for recurring jobs, like code review or keeping changes small.",
  },
  {
    name: "Open-source repos",
    use: "Reference for agents: they study how established projects solve a problem before building.",
  },
]

const experience = [
  {
    title: "Freelance full-stack developer",
    place: "Client: ARCI",
    detail:
      "Built and deployed a defect-tracking web application for ARCI and its construction partner GRID.",
  },
  {
    title: "Frontend intern",
    place: "GeoPay",
    detail:
      "Built and maintained 10+ Georgian e-commerce platforms, with Stripe and Georgian bank SDK integrations.",
  },
]

const education = [
  {
    title: "BSc Web Development",
    place: "SRH University of Applied Sciences, Berlin · 2024–2028",
    detail: "BSDC Future of Tech 20% academic scholarship.",
  },
  {
    title: "React.js Development Diploma",
    place: "Skillwill Neo University · 2024",
  },
]

const SectionHeading: React.FC<{ number: string; children: React.ReactNode }> = ({
  number,
  children,
}) => (
  <h2 className="display-lg">
    <span className="mr-3 align-top font-mono text-base font-normal tracking-normal text-accent">
      {number}
    </span>
    {children}
  </h2>
)

const Timeline: React.FC<{
  heading: string
  items: { title: string; place: string; detail?: string }[]
}> = ({ heading, items }) => (
  <div>
    <h3 className="eyebrow">{heading}</h3>
    <ul className="mt-5 border-t-2 border-ink">
      {items.map((item) => (
        <li key={item.title} className="border-b border-line py-5">
          <h4 className="font-display text-2xl font-semibold tracking-tight">
            {item.title}
          </h4>
          <p className="text-base text-muted">{item.place}</p>
          {item.detail && <p className="mt-2 text-base">{item.detail}</p>}
        </li>
      ))}
    </ul>
  </div>
)

// How the ARCI work was wired: T3 Code hands tasks to agents, which read and write the Linear docs.
const WorkflowDiagram: React.FC = () => {
  const agents = [
    { name: "ChatGPT", y: 45 },
    { name: "Claude", y: 150 },
    { name: "Cursor", y: 255 },
  ]

  return (
    <svg
      viewBox="10 10 580 292"
      role="img"
      aria-label="Diagram: T3 Code orchestrates ChatGPT, Claude and Cursor. The agents read and write living project documentation in Linear through Linear MCP."
      className="w-full font-display"
    >
      <g fill="none" strokeWidth="2" strokeDasharray="6 4" className="animate-flow">
        {agents.map((agent) => (
          <React.Fragment key={agent.name}>
            <path d={`M150,150 C195,150 190,${agent.y} 235,${agent.y}`} className="stroke-accent-soft" />
            <path d={`M365,${agent.y} C410,${agent.y} 405,150 450,150`} className="stroke-paper/60" />
          </React.Fragment>
        ))}
      </g>
      <rect x="20" y="118" width="130" height="64" rx="8" className="fill-accent" />
      <text x="85" y="156" textAnchor="middle" className="fill-paper text-[19px] font-semibold">
        T3 Code
      </text>
      {agents.map((agent) => (
        <React.Fragment key={agent.name}>
          <rect x="235" y={agent.y - 26} width="130" height="52" rx="8" className="fill-ink stroke-paper" strokeWidth="2" />
          <text x="300" y={agent.y + 6} textAnchor="middle" className="fill-paper text-[17px] font-semibold">
            {agent.name}
          </text>
        </React.Fragment>
      ))}
      <rect x="450" y="118" width="130" height="64" rx="8" className="fill-paper" />
      <text x="515" y="147" textAnchor="middle" className="fill-ink text-[17px] font-semibold">
        Linear docs
      </text>
      <text x="515" y="167" textAnchor="middle" className="fill-ink font-mono text-[11.5px] uppercase tracking-wide">
        via Linear MCP
      </text>
      <text x="192" y="296" textAnchor="middle" className="fill-paper/70 font-mono text-[14px] uppercase tracking-wider">
        Tasks
      </text>
      <text x="408" y="296" textAnchor="middle" className="fill-paper/70 font-mono text-[14px] uppercase tracking-wider">
        Read + write
      </text>
    </svg>
  )
}

const HomePage: React.FC = () => {
  usePageTitle()
  const lens = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        // The lens follows the pointer and inverts whatever is under it.
        onPointerMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect()
          lens.current?.style.setProperty("--x", `${event.clientX - box.left}px`)
          lens.current?.style.setProperty("--y", `${event.clientY - box.top}px`)
        }}
        className="group/hero relative isolate overflow-hidden border-b-2 border-ink bg-paper"
      >
        <div className="container-page pb-14 pt-10 sm:pb-20 sm:pt-14">
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow">
              Aleksandre Kapanadze
              <br />
              Berlin, Germany
            </p>
            <img
              src={portrait}
              alt="Portrait of Aleksandre Kapanadze"
              width={128}
              height={128}
              className="h-20 w-20 shrink-0 rounded-full border-2 border-ink object-cover grayscale transition-[filter] duration-300 hover:grayscale-0 sm:h-28 sm:w-28"
            />
          </div>
          <h1 aria-label={headline.join(" ")} className="display-xl mt-6">
            {headline.map((line, index) => (
              <span
                key={line}
                aria-hidden="true"
                className={`animate-stamp block ${index === 2 ? "text-accent" : ""}`}
                style={{ animationDelay: `${300 + index * 220}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">
            I design, build and deploy web applications end to end: frontend,
            backend and deployment. Orchestrating AI coding agents is part of how
            I work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" viewTransition className="btn-primary animate-press [animation-delay:1100ms]">
              View projects
            </Link>
            <a href="#contact" className="btn-secondary animate-press [animation-delay:1250ms]">
              Get in touch
            </a>
          </div>
        </div>
        <div
          ref={lens}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-paper mix-blend-difference transition-transform duration-300 ease-out [translate:var(--x)_var(--y)] motion-safe:[@media(hover:hover)]:block motion-safe:[@media(hover:hover)]:group-hover/hero:scale-100"
        />
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading number="01">Selected work</SectionHeading>
          <Link to="/projects" viewTransition className="text-link">
            All {projects.length} projects →
          </Link>
        </div>
        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-paper [&_h2>span]:text-accent-soft">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading number="02">How I work with AI</SectionHeading>
            <p className="mt-6 max-w-md text-paper/80">
              I use several AI tools, each for the kind of work it suits, and
              T3 Code to coordinate them. Skills and open-source code keep
              their output grounded.
            </p>
            <dl className="mt-8 border-t border-paper/25">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="border-b border-paper/25 py-4 transition-[padding,background-color] duration-200 hover:bg-paper/10 hover:px-3"
                >
                  <dt className="font-display text-2xl font-semibold tracking-tight">
                    {tool.name}
                  </dt>
                  <dd className="text-paper/80">{tool.use}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="self-center rounded-xl border-2 border-paper/25 p-5 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-soft">
              In practice: ARCI Defect Tracker
            </p>
            <div className="mt-6 hidden sm:block">
              <WorkflowDiagram />
            </div>
            <p className="mt-6 text-paper/80">
              On the ARCI Defect Tracker, agents worked from living project
              documentation in Linear, and wrote and maintained that
              documentation themselves through Linear MCP.
            </p>
            <Link
              to="/projects/arci-defect-tracker"
              viewTransition
              className="mt-5 inline-block underline decoration-accent-soft decoration-2 underline-offset-4 outline-accent-soft"
            >
              Read the ARCI case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <SectionHeading number="03">Background</SectionHeading>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Timeline heading="Experience" items={experience} />
          <Timeline heading="Education" items={education} />
        </div>
      </section>

      <section id="contact" className="container-page pb-20 pt-6 sm:pb-28">
        <SectionHeading number="04">Contact</SectionHeading>
        <p className="mb-8 mt-5 max-w-md text-muted">
          Want to commission a project or discuss a role? Get in touch through
          any of these.
        </p>
        <ContactLinks />
      </section>
    </>
  )
}

export default HomePage

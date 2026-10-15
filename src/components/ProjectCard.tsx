import React from "react"
import { Link } from "react-router-dom"
import { Project, projects } from "../data/projects"

// Background, text colour and the stroke colour of the hollow number.
const posterColours = [
  "bg-ink text-paper [--stroke:theme(colors.paper)]",
  "bg-accent text-paper [--stroke:theme(colors.paper)]",
  "bg-sand text-ink [--stroke:theme(colors.ink)]",
]

// A project's cover: its first screenshot, or a typographic poster when it has none.
// The view-transition name lets the cover morph between the card and the project page.
export const ProjectCover: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = "",
}) => {
  const cover = project.images?.[0]
  const index = projects.indexOf(project)
  const style = { viewTransitionName: `cover-${project.slug}` }

  return cover ? (
    <div style={style} className={`overflow-hidden ${className}`}>
      <img
        src={cover.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  ) : (
    // Sizes inside the poster use container units, so it scales from a card to a page banner.
    <div
      aria-hidden="true"
      style={style}
      className={`overflow-hidden [container-type:inline-size] ${posterColours[index % posterColours.length]} ${className}`}
    >
      <div className="flex h-full flex-col justify-between p-[5cqw]">
        <span className="outline-text self-end font-display text-[18cqw] font-bold leading-[0.8]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="line-clamp-2 font-display text-[8cqw] font-semibold leading-[1.05] tracking-tight">
          {project.name}
        </span>
      </div>
    </div>
  )
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="lift group relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-surface has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-accent">
    <ProjectCover project={project} className="aspect-video w-full border-b-2 border-ink" />
    <div className="flex flex-1 flex-col gap-3 p-5">
      <p className="eyebrow">{project.type}</p>
      <h3 className="text-2xl">
        {/* The link's ::after covers the card, so the whole card is one click and one tab stop. */}
        <Link
          to={`/projects/${project.slug}`}
          viewTransition
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {project.name}
        </Link>
      </h3>
      <p className="text-base text-muted">{project.summary}</p>
      <p className="text-sm font-medium">{project.status}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <p aria-hidden="true" className="text-sm font-medium text-accent">
        View details{" "}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
          →
        </span>
      </p>
    </div>
  </article>
)

export default ProjectCard

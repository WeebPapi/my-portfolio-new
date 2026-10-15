import React from "react"
import { useSearchParams } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { categories, projects } from "../data/projects"
import { usePageTitle } from "../usePageTitle"

const filters = [{ id: undefined, label: "All" }, ...categories]

const ProjectsPage: React.FC = () => {
  usePageTitle("Projects")
  const [searchParams, setSearchParams] = useSearchParams()
  // An unknown ?category= value falls back to All.
  const active = categories.find(
    (category) => category.id === searchParams.get("category")
  )?.id
  const visible = active
    ? projects.filter((project) => project.categories.includes(active))
    : projects

  return (
    <div className="container-page py-10 sm:py-14">
      <h1 className="display-xl">
        <span className="block overflow-hidden pb-[0.1em]">
          <span className="animate-rise block">
            Projects
            <sup aria-hidden="true" className="ml-2 font-mono text-[0.22em] font-normal tracking-normal text-accent [vertical-align:2.4em]">
              {projects.length}
            </sup>
          </span>
        </span>
      </h1>
      <p className="mt-2 max-w-2xl text-lg text-muted">
        Client work, hackathon builds and personal projects. Recent and
        substantial work comes first; older projects are further down.
      </p>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-8 flex flex-wrap gap-2.5"
      >
        {filters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            aria-pressed={filter.id === active}
            onClick={() =>
              setSearchParams(filter.id ? { category: filter.id } : {}, {
                replace: true,
                preventScrollReset: true,
              })
            }
            className={`lift rounded-full border-2 border-ink px-4 py-1.5 text-base font-medium ${
              filter.id === active ? "bg-ink text-paper" : "bg-paper"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <h2 aria-live="polite" className="eyebrow mt-8">
        {visible.length === projects.length
          ? `${projects.length} projects`
          : `${visible.length} of ${projects.length} projects`}
      </h2>

      {visible.length ? (
        // Keyed by filter so the cards replay their staggered entrance when the filter changes.
        <ul key={active ?? "all"} className="mt-5 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li
              key={project.slug}
              className="animate-pop"
              style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-muted">No projects in this category yet.</p>
      )}
    </div>
  )
}

export default ProjectsPage

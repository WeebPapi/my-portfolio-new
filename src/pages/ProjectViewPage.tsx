import React from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { getProject, legacyIds, Project } from "../data/projects"
import { ProjectCover } from "../components/ProjectCard"
import EventStickers from "../components/EventStickers"
import { usePageTitle } from "../usePageTitle"
import ErrorPage from "./ErrorPage"

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="grid gap-3 border-t-2 border-ink py-8 md:grid-cols-[14rem_1fr] md:gap-8">
    <h2 className="eyebrow md:pt-1.5">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
)

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="max-w-prose list-disc space-y-2 pl-5 marker:text-accent">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
  usePageTitle(project.name)

  return (
    <article className="container-page py-12 sm:py-16">
      <Link to="/projects" viewTransition className="text-link text-base">
        ← All projects
      </Link>

      <header className="mt-8 pb-10">
        <p className="eyebrow">{project.type}</p>
        <h1 className="display-xl mt-3">
          <span className="block pb-[0.1em]">
            <span className="animate-stamp block">{project.name}</span>
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted sm:text-xl">
          {project.summary}
        </p>
        {project.links && (
          <ul className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <ProjectCover
        project={project}
        className="mb-12 aspect-video w-full rounded-xl border-2 border-ink sm:aspect-[21/9]"
      />

      <Section title="Overview">
        {project.overview.map((paragraph) => (
          <p key={paragraph} className="max-w-prose">
            {paragraph}
          </p>
        ))}
      </Section>

      <Section title="My contribution">
        <BulletList items={project.contribution} />
      </Section>

      {project.decisions && (
        <Section title="Key technical decisions">
          <BulletList items={project.decisions} />
        </Section>
      )}

      <Section title="Outcome and status">
        <p className="max-w-prose font-medium">{project.status}</p>
        <p className="max-w-prose">{project.outcome}</p>
        {project.ai && <p className="max-w-prose text-muted">{project.ai}</p>}
        <ul className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </Section>

      {project.event && (
        <Section title="At the event">
          <EventStickers name={project.name} event={project.event} />
        </Section>
      )}

      <Section title="Gallery">
        {project.images ? (
          <ul className="grid items-start gap-6 sm:grid-cols-2">
            {project.images.map((image) => (
              <li key={image.src}>
                <figure>
                  <a href={image.src} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-lg border border-line bg-sand"
                    />
                  </a>
                  <figcaption className="mt-2 text-sm text-muted">
                    {image.alt}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-prose rounded-lg border border-dashed border-line bg-surface px-5 py-4 text-muted">
            {project.noImagesNote ?? "No screenshots yet."}
          </p>
        )}
      </Section>
    </article>
  )
}

const ProjectViewPage: React.FC = () => {
  const { projectId } = useParams()
  const legacySlug = projectId && legacyIds.get(projectId)
  if (legacySlug) return <Navigate to={`/projects/${legacySlug}`} replace />

  const project = getProject(projectId)
  return project ? (
    <ProjectDetail project={project} />
  ) : (
    <ErrorPage
      title="Project not found"
      message="There is no project at this address. It may have been renamed or removed."
    />
  )
}

export default ProjectViewPage

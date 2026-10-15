import React from "react"
import { Link } from "react-router-dom"
import { usePageTitle } from "../usePageTitle"

interface ErrorPageProps {
  title?: string
  message?: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  title = "Page not found",
  message = "There is nothing at this address.",
}) => {
  usePageTitle(title)

  return (
    <div className="container-page py-16">
      <p aria-hidden="true" className="outline-text select-none font-display text-[clamp(7rem,28vw,20rem)] font-bold leading-[0.8] tracking-tighter">
        404
      </p>
      <h1 className="display-lg mt-8">{title}</h1>
      <p className="mt-4 max-w-prose text-lg text-muted">{message}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/projects" className="btn-primary">
          Browse all projects
        </Link>
        <Link to="/" className="btn-secondary">
          Go to the homepage
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage

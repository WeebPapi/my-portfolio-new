import { createBrowserRouter } from "react-router-dom"
import { createElement } from "react"
import HomePage from "../pages/HomePage"
import MainLayout from "../layout/MainLayout"
import ContactPage from "../pages/ContactPage"
import ProjectViewPage from "../pages/ProjectViewPage"
import ErrorPage from "../pages/ErrorPage"
import ProjectsPage from "../pages/ProjectsPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(MainLayout),
    children: [
      {
        index: true,
        element: createElement(HomePage),
      },
      {
        path: "/contact",
        element: createElement(ContactPage),
      },
      {
        path: "/projects",
        children: [
          {
            index: true,
            element: createElement(ProjectsPage),
          },
          {
            path: "/projects/:projectId",
            element: createElement(ProjectViewPage),
          },
        ],
      },

      {
        path: "*",
        element: createElement(ErrorPage),
      },
    ],
  },
])

import React from "react"
import ContactLinks from "../components/ContactLinks"
import { usePageTitle } from "../usePageTitle"

const ContactPage: React.FC = () => {
  usePageTitle("Contact")

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="display-xl">
        <span className="block pb-[0.1em]">
          <span className="animate-stamp block">Contact</span>
        </span>
      </h1>
      <p className="mt-4 max-w-prose text-lg text-muted">
        Want to commission a project or discuss a role? Get in touch through
        any of these.
      </p>
      <div className="mt-8">
        <ContactLinks />
      </div>
    </div>
  )
}

export default ContactPage

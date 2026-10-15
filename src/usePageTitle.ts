import { useEffect } from "react"

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} – Alex Kapanadze` : "Alex Kapanadze – Full-stack software engineer"
  }, [title])
}

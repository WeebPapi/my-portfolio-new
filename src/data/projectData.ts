import { images } from "./imagesData"

export const projectData = [
  {
    title: "SwiftSight – Bionic Reader for ADHD",
    images: images.swiftSight,
    labels: [
      "Modern Flat UI, allowing users to seamlessly control the bionic intensity",
      "Extension in action, dramatically enhancing reading experience",
      "Chrome context menu integration, allowing users to only apply the extension to selected text",
    ],
    desc: `SwiftSight is a Chrome extension developed with JavaScript, HTML, and CSS that enhances web text readability using bionic reading techniques. By highlighting key parts of words, it helps your brain naturally complete them, boosting reading speed and comprehension—especially beneficial for individuals with ADHD.

Technically, SwiftSight injects scripts into web pages to modify text content in real-time without reloading the page. It processes HTML elements like paragraphs, headings, and list items, calculating the portion of each word to highlight based on a user-defined boldness percentage. The extension manipulates the Document Object Model (DOM) to wrap words in span and strong tags with inline styles, ensuring compatibility with existing page styles.

User interactions are handled through Chrome's extension APIs, allowing features like one-click activation, adjustable boldness settings, and context menu options for transforming selected text. Preferences are saved using Chrome's storage sync, providing consistent settings across sessions.

SwiftSight showcases effective use of web technologies and Chrome extension development to provide an immediate and seamless improvement to the user's reading experience.`,
    technologies: ["JavaScript", "HTML", "CSS", "Manifest API"],
    links: [
      "https://github.com/WeebPapi/SwiftSight",
      "https://chromewebstore.google.com/detail/swiftsight-bionic-reader/hjppfcdfmjmpaobeiplfbocpbbpcjmie?authuser=1",
    ],
  },
  {
    title: "K&CO – Law Firm Landing Page",
    images: images.kco,
    labels: [
      "Modern landing page with smooth animations and snappy navigation",
      "Responsive design, ensuring a great user experience across devices",
    ],
    desc: `K&Co is a professional landing page for a law firm developed using React. The project leverages modern web development technologies to create an engaging and user-friendly website that effectively represents the firm's brand and services.

Technically, the application is built with standard React (not React Native), utilizing its component-based architecture to create reusable UI elements. The project focuses on responsive design, ensuring that the website displays correctly on various devices and screen sizes. Styling is handled using CSS, with attention to detail in typography, layout, and color schemes to convey a sense of professionalism and trustworthiness appropriate for a law firm.

The landing page includes sections such as an introduction to the firm, services offered, attorney profiles, testimonials, and contact information. Interactive elements and smooth navigation enhance the user experience, making it easy for potential clients to find the information they need.

This project demonstrates proficiency in front-end web development using React, showcasing skills in creating responsive layouts, managing state, and implementing best practices for clean and maintainable code. It highlights the ability to develop professional websites that meet client needs and provide a strong online presence.`,
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "React Router",
      "Material UI",
      "Framer Motion",
    ],
    links: ["https://github.com/WeebPapi/k-co", "https://k-co.vercel.app"],
  },
  {
    title: "HooBank – Modern Bank App Landing Page",
    images: images.hooBank,
    labels: [
      "Modern landing page with smooth animations and snappy navigation",
      "Responsive design, ensuring a great user experience across devices",
    ],
    desc: `HooBank is a modern bank website landing page mockup developed using React. The project showcases a sleek and contemporary design, replicating the look and feel of a cutting-edge financial institution's online presence. It emphasizes clean aesthetics, intuitive navigation, and responsiveness to provide an optimal user experience across various devices.

Technically, the application is built with standard React, utilizing its component-based architecture to create reusable and maintainable UI elements. The project implements modern web development practices, including responsive design to ensure the website adapts seamlessly to different screen sizes and devices. Styling is handled using CSS, with attention to detail in layout, typography, and color schemes to convey professionalism and trustworthiness appropriate for a banking institution.

HooBank includes sections typical of a banking website landing page, such as an engaging hero section with a compelling call-to-action, an overview of services offered (like online banking, loans, and investment options), customer testimonials to build credibility, and a contact section with links to customer support. Interactive elements and smooth scrolling enhance the user experience, making it easy for visitors to navigate and find relevant information.

This project demonstrates proficiency in front-end web development using React, showcasing skills in creating responsive layouts, designing modern user interfaces, and implementing best practices for clean and maintainable code. It highlights the ability to develop professional websites that effectively communicate brand identity and provide a strong digital presence for businesses in the financial sector.`,
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "React Router",
      "Bootstrap",
      "Framer Motion",
      "SASS",
    ],
    links: [
      "https://github.com/WeebPapi/bank-website",
      "https://bank-website-nu.vercel.app",
    ],
  },
  {
    title: "RecipeFinder – Recipe Database Website",
    images: images.recipeFinder,
    labels: [
      "A modern recipe database website, utilizing spoonacular Rest API with filtration and saving functionality",
      "Filter recipes by cuisine, diet, and more",
      "Save recipes for later",
      "View saved recipes",
    ],
    desc: `RecipeFinder is a web application built with React that allows users to browse, filter, and save recipes. It utilizes Redux for state management, Axios for handling HTTP requests, React Router for client-side routing, and integrates with the Spoonacular API to fetch comprehensive recipe data.

Users can search for recipes based on various criteria such as ingredients, dietary restrictions, and cuisine types. The application displays detailed information for each recipe, including ingredients, cooking instructions, and nutritional facts. Users also have the option to save their favorite recipes for easy access later.

Technically, RecipeFinder leverages Redux to maintain a consistent and predictable application state, ensuring efficient data flow between components. Axios is used to perform asynchronous API calls to the Spoonacular API, retrieving up-to-date recipe information. React Router facilitates seamless navigation between different views, such as the home page, search results, and saved recipes.

This project demonstrates proficiency in modern web development practices, including API integration, advanced state management, and dynamic client-side routing. It highlights skills in building interactive and user-friendly applications using React and related technologies.`,
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "React Router",
      "Redux",
      "Rest API",
    ],
    links: [
      "https://github.com/WeebPapi/recipe-database",
      "https://recipe-database-alpha.vercel.app",
    ],
  },
]

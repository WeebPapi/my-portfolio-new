import prepWise1 from "../assets/prepWise/prepWise1.png"
import prepWise2 from "../assets/prepWise/prepWise2.png"
import prepWise3 from "../assets/prepWise/prepWise3.png"
import figPro1 from "../assets/figPro/figPro1.png"
import figPro2 from "../assets/figPro/figPro2.png"
import swiftSight1 from "../assets/swiftSight/swiftSight1.png"
import swiftSight2 from "../assets/swiftSight/swiftSight2.png"
import swiftSight3 from "../assets/swiftSight/swiftSight3.png"
import realInvestment1 from "../assets/realInvestment/realInvestment1.png"
import realInvestment2 from "../assets/realInvestment/realInvestment2.png"
import achuke1 from "../assets/achuke/achuke1.png"
import achuke2 from "../assets/achuke/achuke2.png"
import tbcVoiceAgent1 from "../assets/tbcVoiceAgent/tbcVoiceAgent1.png"
import tbcVoiceAgent2 from "../assets/tbcVoiceAgent/tbcVoiceAgent2.png"
import tbcVoiceAgent3 from "../assets/tbcVoiceAgent/tbcVoiceAgent3.png"
import canals2 from "../assets/canals/canals2.jpg"
import canalsUi1 from "../assets/canals/canalsUi1.jpg"
import canalsUi2 from "../assets/canals/canalsUi2.jpg"
import canalsTeam from "../assets/canals/canalsTeam.jpg"
import canalsWinners from "../assets/canals/canalsWinners.jpg"
import canalsWorking from "../assets/canals/canalsWorking.jpg"
import canalsBanner from "../assets/canals/canalsBanner.jpg"
import canalsSwag from "../assets/canals/canalsSwag.jpg"
import localLoop1 from "../assets/localLoop/localLoop1.png"
import localLoop2 from "../assets/localLoop/localLoop2.png"
import localLoop3 from "../assets/localLoop/localLoop3.png"
import localLoopLive1 from "../assets/localLoop/localLoopLive1.png"
import localLoopLive2 from "../assets/localLoop/localLoopLive2.png"
import localLoopLive3 from "../assets/localLoop/localLoopLive3.png"
import localLoopTeam from "../assets/localLoop/localLoopTeam.jpg"
import localLoopPitch from "../assets/localLoop/localLoopPitch.jpg"
import localLoopGroup from "../assets/localLoop/localLoopGroup.jpg"
import localLoopWinners from "../assets/localLoop/localLoopWinners.png"
import boschLogo from "../assets/sponsors/bosch.svg"
import awsLogo from "../assets/sponsors/aws.svg"
import mongodbLogo from "../assets/sponsors/mongodb.svg"
import cursorLogo from "../assets/sponsors/cursor.svg"
import btuLogo from "../assets/sponsors/btu.svg"
import solanaLogo from "../assets/sponsors/solana.svg"

export const categories = [
  { id: "client", label: "Client Work" },
  { id: "ai", label: "AI" },
  { id: "hackathon", label: "Hackathons" },
  { id: "web", label: "Web & Tools" },
] as const

export type Category = (typeof categories)[number]["id"]

export interface Project {
  /** Stable identifier, used in the URL: /projects/<slug>. Never change it once published. */
  slug: string
  name: string
  type: string
  status: string
  /** One or two sentences for the card. */
  summary: string
  categories: Category[]
  /** Technology tags. Cards show the first four. */
  tags: string[]
  overview: string[]
  contribution: string[]
  decisions?: string[]
  outcome: string
  /** How AI relates to the project: part of the product, or part of how it was built. */
  ai?: string
  /** Screenshots. The first one is the card cover. */
  images?: { src: string; alt: string }[]
  /** Shown in place of screenshots when there are none. */
  noImagesNote?: string
  /** Hackathon details, shown as stickers on a laptop lid. A wordmark logo already contains the name. */
  event?: {
    award: { big: string; small: string }
    sponsors: { name: string; logo: string; wordmark?: boolean }[]
    facts: string[]
  }
  links?: { label: string; href: string }[]
}

// Array order is display order. To add a project, add one entry here.
export const projects: Project[] = [
  {
    slug: "arci-defect-tracker",
    name: "ARCI Defect Tracker",
    type: "Freelance client work",
    status: "Private, built and deployed",
    summary:
      "Defect-tracking web application for a Georgian architectural company and its construction partner, from first report to final verification.",
    categories: ["client"],
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase", "Railway"],
    overview: [
      "ARCI is a Georgian architectural company. I built a complete defect-tracking web application for ARCI and its construction partner GRID.",
      "It coordinates the whole life of a defect between the two companies: reporting, repairs, completion evidence and ARCI's final verification.",
    ],
    contribution: [
      "I owned the frontend, the backend and the deployment.",
      "The stack includes React and TypeScript, NestJS, PostgreSQL, Supabase and Railway.",
    ],
    decisions: [
      "I ran the work through T3 Code, orchestrating coding agents across the project.",
      "The project documentation lived in Linear and was treated as living documentation. Agents had access to it for context on each task.",
      "The agents also wrote and maintained that documentation themselves through Linear MCP.",
    ],
    outcome:
      "Built and deployed for the client. This write-up stays high level: the repository, the internal documentation and the application's screens are private.",
    ai: "Developed with AI coding agents. The application itself is not an AI product.",
    noImagesNote:
      "Screenshots are not published. The application holds private client data.",
  },
  {
    slug: "tbc-voice-agent",
    name: "TBC Voice Agent",
    type: "Personal AI proof of concept",
    status: "Local proof of concept, synthetic data",
    summary:
      "Synthetic outbound collections voice assistant in English and Georgian. Policy is deterministic code; the LLM only classifies and words replies.",
    categories: ["ai"],
    tags: ["Python", "FastAPI", "React", "TypeScript", "OpenAI", "ElevenLabs"],
    overview: [
      "A proof of concept for an outbound collections call handled by a voice assistant. It has a React and TypeScript console and a Python and FastAPI backend, and uses OpenAI and ElevenLabs for the English and Georgian voice paths.",
      "It runs locally against mock services and synthetic data.",
    ],
    contribution: [
      "Personal project: I built the console, the backend and the call orchestrator.",
      "The flow includes identity verification, a hardship handoff and CRM writes.",
    ],
    decisions: [
      "A custom orchestrator separates deterministic disclosure and outcome policy from the LLM. The model classifies what was said and words the reply; it does not decide policy.",
      "CRM writes are retry-safe, so retrying a failed request does not record the same outcome twice.",
      "The project includes mock services and automated tests, so it runs without any real customer systems.",
    ],
    outcome:
      "A local proof of concept using synthetic data. It is an independent personal project: it was not commissioned or endorsed by TBC Bank and is not deployed in production.",
    ai: "AI is part of the product: LLM classification and wording, plus synthesised voice.",
    images: [
      { src: tbcVoiceAgent1, alt: "A completed synthetic call: the customer reports hardship, the call is escalated, a mock specialist transfer is accepted and the outcome is written to the CRM" },
      { src: tbcVoiceAgent2, alt: "The Georgian console asking a synthetic customer to verify their identity, beside the operator event timeline" },
      { src: tbcVoiceAgent3, alt: "The English console after identity verification, with the policy decision to deliver a payment reminder" },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/tbc-voice-agent" },
    ],
  },
  {
    slug: "canals",
    name: "Canals",
    type: "Hackathon, team project",
    status: "1st place, BCX26 Berlin, June 2026",
    summary:
      "EV journey-planning demo that won Bosch ConnectedExperience 2026. I proposed the core user story and owned orchestration, integration and frontend polish.",
    categories: ["hackathon"],
    tags: ["EV routing", "Integrations", "Frontend"],
    overview: [
      "Canals is an EV journey-planning demo built by a team during the 20-hour Bosch ConnectedExperience hackathon (BCX26) in Berlin in June 2026. It took first place.",
    ],
    contribution: [
      "Proposed the core user story the demo was built around.",
      "Owned orchestration and the integration glue between the parts of the system.",
      "Handled the frontend polish.",
    ],
    decisions: [
      "Connected routing, cached charger behaviour and cloud-ready integrations inside the 20 hours.",
    ],
    outcome:
      "1st place at BCX26. Canals was a team project; the contribution listed here is my own part of it.",
    images: [
      { src: canalsUi2, alt: "Asked for the nearest fast charger, Canals answers from its local cache and marks the recommended station on the map" },
      { src: canalsUi1, alt: "The Canals in-car UI after planning Frankfurt to Berlin by voice: 176 charging stations cached along the route for offline use" },
      { src: canalsTeam, alt: "The Canals team with their first-place prizes and AWS swag, in front of their whiteboard" },
      { src: canalsWinners, alt: "Winners and organisers of Bosch ConnectedExperience 2026 in Berlin" },
      { src: canalsWorking, alt: "The Canals team at work during the hackathon" },
      { src: canals2, alt: "Whiteboard sketch from the hackathon: driver scenarios, and a flow that answers from cached EV charging data when the car is offline" },
      { src: canalsBanner, alt: "The Bosch ConnectedExperience 26 banner, powered by MongoDB and AWS" },
      { src: canalsSwag, alt: "Taking a break with two AWS bags after the win, above Berlin" },
    ],
    event: {
      award: { big: "1st", small: "place" },
      sponsors: [
        { name: "Bosch", logo: boschLogo },
        { name: "AWS", logo: awsLogo, wordmark: true },
        { name: "MongoDB", logo: mongodbLogo },
      ],
      facts: ["20 hours", "Berlin · June 2026"],
    },
  },
  {
    slug: "localloop",
    name: "LocalLoop",
    type: "Hackathon",
    status: "Cursor Track Winner, Cursor Tbilisi Hackathon, July 2026",
    summary:
      "Working Solana MVP built in three hours, with real devnet receipts and host payouts. One of three top teams in the Cursor track.",
    categories: ["hackathon"],
    tags: ["React", "TypeScript", "Express", "Solana", "Phantom"],
    overview: [
      "LocalLoop is a local B2B rewards network, built as a Solana MVP in three hours at the Cursor Tbilisi Hackathon in July 2026, using React and TypeScript, Express and the Phantom wallet. An advertiser funds a campaign, a nearby host business verifies customer visits, and the customer redeems a reward.",
      "It has two front ends. The product walkthrough (the live demo link) is a browser-only mock. A separate live layer runs against an Express server that holds the shared state, verifies wallet signatures and posts real Solana devnet receipts.",
    ],
    contribution: [
      "Built a working MVP within the three-hour limit.",
      "In the live layer, funding is authorised with a wallet signature, the server records a memo on devnet, and the host's payout is a real devnet transfer rather than a mocked transaction.",
    ],
    outcome:
      "Selected as one of the three top teams in the hackathon's Cursor track. It runs on Solana devnet and is not a mainnet product.",
    images: [
      { src: localLoop1, alt: "LocalLoop demo page for the Develop the Night campaign, with advertiser, host and customer tabs" },
      { src: localLoop2, alt: "Nearby rewards: four offers pairing a local business with a host business" },
      { src: localLoop3, alt: "A reward pass showing one of three verified visits" },
      { src: localLoopLive1, alt: "Live layer: the advertiser's confirmed funding-proof receipt, a memo posted on Solana devnet" },
      { src: localLoopLive2, alt: "Live layer: the host's earnings after redemption, a confirmed 0.005 SOL payout on Solana devnet" },
      { src: localLoopLive3, alt: "The payout transaction on Solana Explorer: Success, Finalized, on devnet" },
      { src: localLoopWinners, alt: "The Cursor Track winners page, listing LocalLoop among the winning teams" },
      { src: localLoopTeam, alt: "The LocalLoop team in Cursor caps at the hackathon" },
      { src: localLoopPitch, alt: "Presenting LocalLoop at the Cursor Tbilisi AI Hackathon" },
      { src: localLoopGroup, alt: "Participants of the Cursor Tbilisi AI Hackathon at BTU" },
    ],
    event: {
      award: { big: "Winner", small: "Cursor track" },
      sponsors: [
        { name: "Cursor", logo: cursorLogo },
        { name: "Solana", logo: solanaLogo },
        { name: "BTU", logo: btuLogo, wordmark: true },
      ],
      facts: ["3 hours", "Tbilisi · July 2026"],
    },
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/localloop" },
      { label: "Live demo (product walkthrough)", href: "https://localloop-murex.vercel.app" },
    ],
  },
  {
    slug: "achuke",
    name: "Achuke",
    type: "Hackathon, team project",
    status: "Hacktoberfest 2025, 48 hours",
    summary:
      "Gift-planning platform built in 48 hours. I led the React web application and defined the Supabase and Postgres schema.",
    categories: ["hackathon"],
    tags: ["React", "Supabase", "PostgreSQL"],
    overview: [
      "Achuke is a gift-planning platform built by a team during the 48-hour Hacktoberfest 2025 hackathon.",
    ],
    contribution: [
      "Led the React web application.",
      "Defined the Supabase and Postgres schema.",
      "Built the authentication, profile and wishlist flows.",
    ],
    outcome: "Built within the 48-hour hackathon.",
    images: [
      { src: achuke1, alt: "Achuke home page hero in Georgian, with product images of a phone, earbuds and trainers" },
      { src: achuke2, alt: "Gift filter bubbles for price, colour, material and reviews, above the partners section" },
    ],
    links: [{ label: "Live demo", href: "https://achuqe.vercel.app" }],
  },
  {
    slug: "real-investment",
    name: "Real Investment",
    type: "Hackathon",
    status: "Prize winner",
    summary:
      "Fintech dashboard with scroll-driven animation and a 3D property explorer. Recognised for MVP UI/UX and technical execution.",
    categories: ["hackathon"],
    tags: ["Next.js", "Tailwind", "GSAP", "Three.js"],
    overview: [
      "Real Investment is a fintech dashboard built with Next.js and Tailwind for a hackathon.",
    ],
    contribution: [
      "A Next.js and Tailwind dashboard interface.",
      "GSAP scroll animations and a Three.js view for exploring properties.",
    ],
    outcome:
      "Hackathon prize winner, recognised for MVP UI/UX and technical execution.",
    images: [
      { src: realInvestment1, alt: "Investment management section beside a list of active property raises with projected returns" },
      { src: realInvestment2, alt: "The Three.js 3D apartment-building explorer" },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/realinvestment" },
      { label: "Live demo", href: "https://git-realinvestment.vercel.app" },
    ],
  },
  {
    slug: "prepwise",
    name: "PrepWise",
    type: "Personal project",
    status: "Live demo",
    summary:
      "Voice interview practice. A Vapi voice agent runs the interview, Gemini writes the feedback, and Firebase handles sign-in and saved sessions.",
    categories: ["ai", "web"],
    tags: ["Next.js", "Tailwind", "Gemini", "Vapi", "Firebase", "shadcn/ui", "Zod"],
    overview: [
      "PrepWise is a web application for practising job interviews. A user creates an interview for a role or set of skills, takes it as a spoken conversation with a voice agent, and gets written feedback afterwards.",
      "A dashboard lists past interviews and their feedback.",
    ],
    contribution: [
      "Built the Next.js application, including the API routes behind it.",
      "Added Firebase email and password authentication and stored interviews and feedback.",
      "Connected the Vapi voice agent for the interview and Google Gemini for the feedback.",
    ],
    decisions: [
      "Next.js handles both the interface and the backend API logic, so there is no separate server.",
      "Voice and feedback are separate services: Vapi runs the conversation and Gemini analyses the responses.",
      "Zod is used for schema validation.",
    ],
    outcome:
      "A working demo: sign-up, interview generation, voice interviews and stored feedback.",
    ai: "AI is part of the product: a Vapi voice agent conducts the interview and Google Gemini generates the feedback.",
    images: [
      { src: prepWise1, alt: "PrepWise dashboard with a banner to start an AI practice interview" },
      { src: prepWise2, alt: "Interview cards for behavioural and technical interviews, each with its tech stack and a Take Interview button" },
      { src: prepWise3, alt: "A front-end interview ready to start, with the AI interviewer and candidate panels and a Call button" },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/interview-prep-app" },
      { label: "Live demo", href: "https://interview-prep-app-six.vercel.app/" },
    ],
  },
  {
    slug: "figpro",
    name: "FigPro",
    type: "Personal project",
    status: "Live demo",
    summary:
      "Collaborative design canvas. Liveblocks syncs edits between users, Fabric.js provides the canvas tools, and designs export to PDF.",
    categories: ["web"],
    tags: ["Next.js", "TypeScript", "Liveblocks", "Fabric.js", "Tailwind", "Radix UI", "jsPDF"],
    overview: [
      "FigPro is a design canvas that several people can edit at the same time. It has shape and text tools, a layers list, a properties panel, comments and PDF export.",
    ],
    contribution: [
      "Built the canvas editor on Fabric.js: creating shapes, inserting text and manipulating objects.",
      "Used Liveblocks to sync the canvas and show who else is present, including cursors and comment threads.",
      "Built the interface with Radix UI and Tailwind, and added PDF export with jsPDF.",
    ],
    decisions: [
      "Changes go through Liveblocks' presence and storage APIs, so every client renders the same canvas state during concurrent edits.",
    ],
    outcome:
      "A working demo of real-time collaboration on a shared canvas. It is a learning-scale project, not a replacement for a production design tool.",
    images: [
      { src: figPro1, alt: "FigPro editor with a rectangle and a text object on the canvas, a layers list and a design panel" },
      { src: figPro2, alt: "FigPro canvas with a comment thread and a live chat bubble" },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/figma-clone" },
      { label: "Live demo", href: "https://figma-clone-plum-five.vercel.app" },
    ],
  },
  {
    slug: "swiftsight",
    name: "SwiftSight",
    type: "Chrome extension",
    status: "Published on the Chrome Web Store",
    summary:
      "Chrome extension that applies bionic-reading emphasis to web pages, with adjustable boldness and a context-menu option for selected text.",
    categories: ["web"],
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs"],
    overview: [
      "SwiftSight is a Chrome extension that bolds the first part of each word on a page, a technique known as bionic reading. I built it as a reading aid with ADHD readers in mind.",
    ],
    contribution: [
      "Built the extension in plain JavaScript, HTML and CSS.",
      "Built the popup for switching the reader on and off and setting how much of each word is bold.",
      "Added a context-menu option that applies the effect to selected text only.",
    ],
    decisions: [
      "A content script rewrites text in paragraphs, headings and list items in place, so the page does not reload.",
      "Words are wrapped in span and strong tags with inline styles so the page's own styles keep working.",
      "Preferences are saved with Chrome's storage sync, so they persist between sessions.",
    ],
    outcome: "Published on the Chrome Web Store.",
    images: [
      { src: swiftSight3, alt: "A web article with the first part of each word in bold" },
      { src: swiftSight1, alt: "The SwiftSight popup with a word-boldness slider at 30% and at 50%" },
      { src: swiftSight2, alt: "A Wikipedia article with bionic-reading emphasis applied" },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/WeebPapi/SwiftSight" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/swiftsight-bionic-reader/hjppfcdfmjmpaobeiplfbocpbbpcjmie",
      },
    ],
  },
]

const featuredSlugs = ["arci-defect-tracker", "tbc-voice-agent", "canals"]

// Old links used the project's array position (/projects/0). This mapping is fixed:
// never remap or extend it, so reordering the catalogue cannot change where an old link goes.
// 3 (K&CO), 4 (HooBank) and 5 (RecipeFinder) were removed with those projects and now show "Project not found".
export const legacyIds = new Map([
  ["0", "prepwise"],
  ["1", "figpro"],
  ["2", "swiftsight"],
])

export const getProject = (slug?: string) =>
  projects.find((project) => project.slug === slug)

export const featuredProjects = featuredSlugs.flatMap(
  (slug) => getProject(slug) ?? []
)

if (import.meta.env.DEV) {
  const slugs = projects.map((project) => project.slug)
  console.assert(new Set(slugs).size === slugs.length, "Duplicate project slug")
  for (const slug of [...featuredSlugs, ...legacyIds.values()]) {
    console.assert(slugs.includes(slug), `Unknown project slug: ${slug}`)
  }
}

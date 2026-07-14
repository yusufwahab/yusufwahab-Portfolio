// Real project data only. No invented metrics, dates, or outcomes —
// gaps (e.g. missing screenshots, missing GitHub links) are left empty
// rather than fabricated. See BUILD_SPEC.md §6 and §7.

import classenceCover from '../assets/projects/classence/cover.png'
import agronovaCover from '../assets/projects/agronova/cover.png'
import classencePrepCover from '../assets/projects/classence-prep/cover.png'
import trustBridgeCover from '../assets/projects/trustbridge/cover.png'
import linearCover from '../assets/projects/linear-recreation/cover.png'
import weatherCover from '../assets/projects/weather-app/cover.png'
import weatherGallery2 from '../assets/projects/weather-app/gallery-2.png'
import weatherGallery3 from '../assets/projects/weather-app/gallery-3.png'
import traxsCover from '../assets/projects/traxs/cover.png'
import veraCover from '../assets/projects/vera/cover.png'
import voiceiqCover from '../assets/projects/voiceiq/cover.png'
import personaCover from '../assets/projects/persona/cover.png'
import swiftSettleCover from '../assets/projects/swift-settle/cover.png'
import rentstackCover from '../assets/projects/rentstack/cover.png'

export const CATEGORIES = ['All', 'Realtime & Data', 'AI & ML', 'Fintech Infra', 'Web Platforms']

// ── The six flagship products (home "systems board") ──────────────
const newProjects = [
  {
    slug: 'traxs',
    name: 'Traxs',
    tagline: 'Lagos urban mobility intelligence dashboard',
    oneLiner: 'Realtime bus network visualization, route analytics, and USSD-based driver simulation.',
    overview:
      "Traxs is a realtime intelligence dashboard for Lagos's urban bus network. It visualizes live vehicle positions and route performance on a map, streams passenger and mobility events through a serverless pipeline, and lets operators ask natural-language questions that are answered against live data. A USSD-based driver simulation models how drivers without smartphones can still feed the system.",
    liveUrl: 'https://traxs-three.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['Realtime & Data'],
    stackTags: ['React 19', 'Vite', 'Zustand v5', 'react-leaflet', 'WebSocket', 'AWS Lambda', 'DynamoDB', 'Bedrock'],
    hoverMetric: '22 Lambda functions · 6 DynamoDB tables',
    architecture: [
      { layer: 'Frontend', tool: 'React 19, Vite, react-router-dom v7', purpose: 'App shell & routing' },
      { layer: 'Frontend', tool: 'Zustand v5', purpose: 'Client state management' },
      { layer: 'Frontend', tool: 'react-leaflet + Leaflet', purpose: 'Live map & route visualization' },
      { layer: 'Frontend', tool: 'Recharts', purpose: 'Route analytics charts' },
      { layer: 'Frontend', tool: 'Native WebSocket', purpose: 'Realtime dashboard updates' },
      { layer: 'Frontend', tool: 'Tailwind v4, react-hot-toast, lucide-react', purpose: 'Styling, notifications, icons' },
      { layer: 'API', tool: 'API Gateway (HTTP + WebSocket)', purpose: 'Realtime & REST entry point' },
      { layer: 'Compute', tool: '22 AWS Lambda functions', purpose: 'Business logic, serverless compute' },
      { layer: 'Data', tool: 'DynamoDB (6 tables)', purpose: 'Primary data store' },
      { layer: 'Data', tool: 'S3', purpose: 'Raw event archive' },
      { layer: 'Messaging', tool: 'SNS', purpose: 'Route alerts (pub/sub)' },
      { layer: 'Messaging', tool: 'Kinesis', purpose: 'Passenger event stream ingestion' },
      { layer: 'Scheduling', tool: 'EventBridge', purpose: '5-minute mobility snapshot jobs' },
      { layer: 'AI', tool: 'Amazon Bedrock / Claude Haiku', purpose: 'Natural-language answers grounded in live data' },
      { layer: 'Infra', tool: 'CloudFormation via Serverless Framework', purpose: 'Infrastructure as code' },
      { layer: 'Infra', tool: 'CloudWatch', purpose: 'Logging & monitoring' },
    ],
    highlights: [
      'Realtime WebSocket updates for live bus positions and route state',
      '5-minute EventBridge snapshot jobs for mobility trend data',
      'Bedrock-grounded natural-language answers over live operational data',
      'USSD-based driver simulation for feature-phone drivers',
      '22 Lambda functions across a fully serverless AWS backend',
    ],
    gallery: [{ src: traxsCover, alt: 'Traxs Lagos mobility intelligence dashboard' }],
    codeSnippet: {
      language: 'yaml',
      caption: 'Illustrative — EventBridge schedule pattern used for mobility snapshots',
      code: `functions:
  mobilitySnapshot:
    handler: handlers/snapshot.run
    events:
      - schedule: rate(5 minutes)
    environment:
      TABLE_NAME: \${self:custom.snapshotsTable}`,
    },
  },
  {
    slug: 'vera',
    name: 'VERA',
    tagline: 'AI-powered financial trust verification platform',
    oneLiner: 'Fraud-ring detection and entity trust scoring via network analysis, with consequences executed through real payment infra.',
    overview:
      "VERA is a financial trust verification platform that scores the trustworthiness of financial entities. It combines graph analysis over a network of transactions and relationships with anomaly detection to surface fraud rings, then acts on those findings — financial consequences are executed through Squad's payment infrastructure rather than just flagged in a report.",
    liveUrl: 'https://vera-delta-seven.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['AI & ML', 'Fintech Infra'],
    stackTags: ['React 18', 'Vite', 'TanStack Query', 'D3.js', 'FastAPI', 'PostgreSQL', 'Neo4j AuraDB', 'Redis'],
    hoverMetric: 'Isolation Forest + graph analysis',
    architecture: [
      { layer: 'Frontend', tool: 'React 18, Vite, Tailwind CSS', purpose: 'App shell & styling' },
      { layer: 'Frontend', tool: 'TanStack Query', purpose: 'Data fetching & caching' },
      { layer: 'Frontend', tool: 'D3.js', purpose: 'Graph/network visualization' },
      { layer: 'Backend', tool: 'FastAPI (Python)', purpose: 'REST API' },
      { layer: 'Backend', tool: 'SQLAlchemy, Pydantic', purpose: 'ORM & schema validation' },
      { layer: 'Data', tool: 'PostgreSQL', purpose: 'Transaction records' },
      { layer: 'Data', tool: 'Neo4j AuraDB', purpose: 'Entity relationship graph' },
      { layer: 'Data', tool: 'Redis', purpose: 'Job queue' },
      { layer: 'AI/ML', tool: 'scikit-learn Isolation Forest', purpose: 'Anomaly / fraud scoring' },
      { layer: 'AI/ML', tool: 'Groq LLM API', purpose: 'LLM-assisted analysis' },
      { layer: 'Infra', tool: 'DigitalOcean App Platform', purpose: 'Backend hosting' },
      { layer: 'Infra', tool: 'Vercel', purpose: 'Frontend hosting' },
      { layer: 'Infra', tool: 'Celery workers', purpose: 'Async background processing' },
    ],
    highlights: [
      'Fraud-ring detection via graph analysis over entity relationships',
      'Entity trust scoring combining network analysis with Isolation Forest anomaly scoring',
      "Financial consequences executed through Squad's real payment infrastructure",
      'Async job processing via Celery workers backed by Redis',
    ],
    gallery: [{ src: veraCover, alt: 'VERA financial trust verification platform' }],
    codeSnippet: {
      language: 'python',
      caption: 'Illustrative — anomaly scoring shape used for entity trust scoring',
      code: `from sklearn.ensemble import IsolationForest

model = IsolationForest(contamination=0.05, random_state=42)
model.fit(entity_feature_matrix)

anomaly_score = model.decision_function(entity_features)
is_flagged = model.predict(entity_features) == -1`,
    },
  },
  {
    slug: 'voiceiq',
    name: 'VoiceIQ',
    tagline: 'AI-powered churn intelligence platform',
    oneLiner: 'Turns realtime voice/WhatsApp/SMS conversations into explainable churn-risk signals with next-best-actions.',
    overview:
      'VoiceIQ turns realtime voice, WhatsApp, and SMS conversations into explainable churn-risk signals for call center agents, pairing each signal with a next-best-action recommendation rather than a black-box score. It was built for the AI4Telco Hackathon during Microsoft AI Skills Week Lagos 2026.',
    liveUrl: 'https://voice-iq-brown.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['AI & ML'],
    stackTags: ['React', 'JavaScript', 'Python', 'FastAPI'],
    hoverMetric: 'Realtime voice/WhatsApp/SMS → churn signal',
    architecture: [
      { layer: 'Frontend', tool: 'React, JavaScript', purpose: 'Agent-facing dashboard UI' },
      { layer: 'Backend', tool: 'Python, FastAPI', purpose: 'REST API & conversation processing' },
    ],
    highlights: [
      'Ingests realtime voice, WhatsApp, and SMS conversation data',
      'Produces explainable churn-risk signals rather than an opaque score',
      'Surfaces next-best-action recommendations for call center agents',
      'Built for the AI4Telco Hackathon, Microsoft AI Skills Week Lagos 2026',
    ],
    gallery: [{ src: voiceiqCover, alt: 'VoiceIQ churn intelligence platform' }],
  },
  {
    slug: 'persona',
    name: 'PERSONA',
    tagline: 'User modeling and recommendation system',
    oneLiner: 'Builds a structured psychological profile from review history to power review simulation and agentic recommendation.',
    overview:
      "PERSONA builds a structured psychological profile of a user from their review history, then uses that profile to power two things: review simulation — a predicted rating, a reasoning trace, and a generated review written in the user's own voice — and agentic recommendation — ranked items with per-item explanations and a full agent step trace. It was built for the DSN × Bluechip Tech LLM Agent Challenge at the Data & AI Summit Hackathon 3.0.",
    liveUrl: 'https://persona-eight-flax.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['AI & ML'],
    stackTags: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI'],
    hoverMetric: 'Dual-task agent with full reasoning trace',
    architecture: [
      { layer: 'Frontend', tool: 'React, TypeScript, Tailwind CSS', purpose: 'App UI' },
      { layer: 'Backend', tool: 'Python, FastAPI', purpose: 'Agent orchestration & REST API' },
    ],
    highlights: [
      'Builds a structured psychological profile from a user’s review history',
      'Review simulation: predicted rating + reasoning trace + generated review in the user’s voice',
      'Agentic recommendation: ranked items with per-item explanations',
      'Full agent step trace exposed for both tasks',
      'Built for the DSN × Bluechip Tech LLM Agent Challenge, Data & AI Summit Hackathon 3.0',
    ],
    gallery: [{ src: personaCover, alt: 'PERSONA user modeling and recommendation system' }],
  },
  {
    slug: 'swift-settle',
    name: 'Swift Settle',
    tagline: 'Financial identity platform for gig workers',
    oneLiner: 'Realtime earnings tracking, instant settlement, and behavior-driven credit scoring on Nomba’s payment rails.',
    overview:
      "Swift Settle is a financial identity platform for gig workers, built on Nomba's payment rails. It tracks earnings in realtime, settles funds instantly to a bank account, derives a behavior-driven credit score that can auto-approve micro-loans, and gives workers a way to request payouts with a lightweight admin approval flow on the other end.",
    liveUrl: 'https://swift-settle.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['Fintech Infra'],
    stackTags: ['React 19', 'Vite', 'React Router 7', 'Recharts', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Nomba'],
    hoverMetric: 'Instant settlement · behavior-driven credit score',
    architecture: [
      { layer: 'Frontend', tool: 'React 19, Vite, React Router 7', purpose: 'App shell & routing' },
      { layer: 'Frontend', tool: 'Recharts, Tailwind v4', purpose: 'Earnings charts & styling' },
      { layer: 'Backend', tool: 'Node.js / Express', purpose: 'REST API' },
      { layer: 'Data', tool: 'PostgreSQL via Supabase', purpose: 'Primary data store' },
      { layer: 'Payments', tool: 'Nomba', purpose: 'Payment rails / instant settlement' },
      { layer: 'Comms', tool: 'Brevo', purpose: 'Transactional email' },
    ],
    highlights: [
      'Realtime earnings tracking for gig workers',
      'Instant settlement to a bank account via Nomba',
      'Behavior-driven credit score with auto-approved micro-loans',
      'Worker-initiated payout requests with a lightweight admin approval flow',
    ],
    gallery: [{ src: swiftSettleCover, alt: 'Swift Settle financial identity platform for gig workers' }],
  },
  {
    slug: 'rentstack',
    name: 'RentStack',
    tagline: 'Virtual-account-powered rent collection platform',
    oneLiner: 'Every tenant gets a dedicated bank account; transfers auto-reconcile against tenant and cycle.',
    overview:
      "RentStack is a rent collection platform for Nigerian landlords, built on Nomba's payment infrastructure. Every tenant is issued a dedicated virtual bank account number; incoming transfers auto-reconcile against the correct tenant and payment cycle, replacing a landlord's WhatsApp thread of bank alerts with a single dashboard.",
    liveUrl: 'https://rent-stack.vercel.app/',
    githubUrl: null,
    featured: true,
    status: 'Live',
    categories: ['Fintech Infra'],
    stackTags: ['React 19', 'Vite', 'React Router 7', 'Recharts', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Nomba'],
    hoverMetric: 'Dedicated virtual account per tenant',
    architecture: [
      { layer: 'Frontend', tool: 'React 19, Vite, React Router 7', purpose: 'App shell & routing' },
      { layer: 'Frontend', tool: 'Recharts, Tailwind v4', purpose: 'Landlord dashboard charts & styling' },
      { layer: 'Backend', tool: 'Node.js / Express', purpose: 'REST API' },
      { layer: 'Data', tool: 'PostgreSQL via Supabase', purpose: 'Primary data store' },
      { layer: 'Payments', tool: 'Nomba', purpose: 'Virtual account issuance & reconciliation' },
      { layer: 'Comms', tool: 'Brevo', purpose: 'Transactional email' },
    ],
    highlights: [
      'Dedicated virtual bank account number issued per tenant',
      'Transfers auto-reconcile against tenant and payment cycle',
      'One landlord dashboard replacing manual bank-alert tracking',
      "Built on Nomba's payment infrastructure",
    ],
    gallery: [{ src: rentstackCover, alt: 'RentStack virtual-account rent collection dashboard' }],
  },
]

// ── Carried over from the existing site (§7 — same template, real copy/images) ──
const existingProjects = [
  {
    slug: 'classence',
    name: 'Classence',
    tagline: 'Attendance Management',
    oneLiner: 'Full-stack attendance platform with single-tap check-ins and real-time admin tracking.',
    overview:
      'Classence is a full-stack attendance platform for institutions. It supports single-tap check-ins, gives administrators real-time visibility into attendance as it happens, keeps digital signature logs, and exports reports.',
    liveUrl: 'https://classence-frontend.vercel.app',
    githubUrl: 'https://github.com/yusufwahab/classenceFrontend',
    featured: false,
    status: 'Live',
    categories: ['Web Platforms'],
    stackTags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'React.js, Tailwind CSS', purpose: 'UI layer & styling' },
      { layer: 'Backend', tool: 'Node.js, Express', purpose: 'REST API' },
    ],
    highlights: [
      'Single-tap check-ins for attendance capture',
      'Real-time admin tracking dashboard',
      'Digital signature logs',
      'Exportable attendance reports',
    ],
    gallery: [{ src: classenceCover, alt: 'Classence attendance management dashboard' }],
  },
  {
    slug: 'agronova',
    name: 'AgroNova',
    tagline: 'AI Farm Management',
    oneLiner: 'Agricultural intelligence platform combining AI pest detection, weather forecasting, and yield analytics.',
    overview:
      'AgroNova is an agricultural intelligence platform that combines AI-driven pest detection, hyper-local weather forecasting, and yield analytics to help farmers make better decisions.',
    liveUrl: 'https://agrinova-pi.vercel.app',
    githubUrl: 'https://github.com/yusufwahab/agrinova',
    featured: false,
    status: 'Live',
    categories: ['AI & ML', 'Web Platforms'],
    stackTags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'React.js, Tailwind CSS', purpose: 'UI layer & styling' },
      { layer: 'Backend', tool: 'Node.js, Express', purpose: 'REST API' },
    ],
    highlights: [
      'AI pest detection',
      'Hyper-local weather forecasting',
      'Yield analytics for farmers',
    ],
    gallery: [{ src: agronovaCover, alt: 'AgroNova AI farm management dashboard' }],
  },
  {
    slug: 'classence-prep',
    name: 'Classence Prep',
    tagline: 'EdTech AI Prep Platform',
    oneLiner: 'Exam prep platform with interactive CBT tests and an AI companion for personalised study recommendations.',
    overview:
      'Classence Prep is an exam prep platform with interactive computer-based tests (CBT) and an AI companion that tracks performance and delivers personalised study recommendations.',
    liveUrl: 'https://classenceprep.vercel.app',
    githubUrl: 'https://github.com/yusufwahab/classence-prep',
    featured: false,
    status: 'Live',
    categories: ['AI & ML', 'Web Platforms'],
    stackTags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'React, JavaScript, Tailwind CSS', purpose: 'UI layer & styling' },
      { layer: 'Backend', tool: 'Node.js', purpose: 'API & AI companion logic' },
    ],
    highlights: [
      'Interactive CBT-style exam tests',
      'AI companion tracks performance over time',
      'Personalised study recommendations',
    ],
    gallery: [{ src: classencePrepCover, alt: 'Classence Prep AI exam prep platform' }],
  },
  {
    slug: 'trustbridge',
    name: 'TrustBridge',
    tagline: 'Data Access Platform',
    oneLiner: 'Lets users monitor and control how companies use their personal data.',
    overview:
      'TrustBridge lets users monitor and control how companies use their personal data — built around transparency, user control, and privacy compliance.',
    liveUrl: 'https://trust-bridge-tawny.vercel.app/',
    githubUrl: 'https://github.com/yusufwahab/TrustBridge',
    featured: false,
    status: 'Live',
    categories: ['Web Platforms'],
    stackTags: ['React', 'JavaScript', 'Tailwind CSS'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'React, JavaScript, Tailwind CSS', purpose: 'UI layer & styling' },
    ],
    highlights: [
      'User-facing controls over third-party data access',
      'Built around transparency and privacy compliance',
    ],
    gallery: [{ src: trustBridgeCover, alt: 'TrustBridge data access platform' }],
  },
  {
    slug: 'linear-recreation',
    name: 'Linear.app Recreation',
    tagline: 'Homepage Recreation',
    oneLiner: 'Pixel-accurate recreation of the Linear.app homepage with video integration and smooth transitions.',
    overview:
      'A pixel-accurate recreation of the Linear.app homepage, including video integration, smooth transitions, and interactive elements — a front-end craft exercise in matching a highly polished reference design.',
    liveUrl: 'https://linear-app-recreate.vercel.app/',
    githubUrl: 'https://github.com/yusufwahab/Linear-App-Recreate',
    featured: false,
    status: 'Live',
    categories: ['Web Platforms'],
    stackTags: ['HTML', 'CSS', 'JavaScript'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'HTML, CSS, JavaScript', purpose: 'Static front-end build' },
    ],
    highlights: [
      'Pixel-accurate recreation of the Linear.app homepage',
      'Video integration',
      'Smooth transitions and interactive elements',
    ],
    gallery: [{ src: linearCover, alt: 'Linear.app homepage recreation' }],
  },
  {
    slug: 'weather-app',
    name: 'Weather App',
    tagline: 'Atmospheric Monitoring',
    oneLiner: 'Consumes a public weather API for real-time weather data, handling loading and error states gracefully.',
    overview:
      'A weather application that consumes a public weather API for real-time weather data, with graceful handling of loading states and error conditions.',
    liveUrl: 'https://ecx-weather-app.vercel.app/',
    githubUrl: 'https://github.com/yusufwahab/ECX-WEATHER-APP',
    featured: false,
    status: 'Live',
    categories: ['Web Platforms'],
    stackTags: ['HTML', 'CSS', 'JavaScript', 'API'],
    hoverMetric: null,
    architecture: [
      { layer: 'Frontend', tool: 'HTML, CSS, JavaScript', purpose: 'Static front-end build' },
      { layer: 'Data', tool: 'Public weather API', purpose: 'Real-time weather data' },
    ],
    highlights: [
      'Consumes a public weather API for real-time data',
      'Graceful loading and error states',
    ],
    gallery: [
      { src: weatherCover, alt: 'Weather application interface' },
      { src: weatherGallery2, alt: 'Weather application interface, alternate view' },
      { src: weatherGallery3, alt: 'Weather application interface, alternate view' },
    ],
  },
]

export const projects = [...newProjects, ...existingProjects]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug) {
  const idx = projects.findIndex((p) => p.slug === slug)
  const previous = idx > 0 ? projects[idx - 1] : projects[projects.length - 1]
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : projects[0]
  return { previous, next: nextProject }
}

// Pulled directly from the stacks used across shipped projects — no
// proficiency scores or invented tools. See BUILD_SPEC.md §4.1 (C) and §4.4.

export const capabilities = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter', 'Dart'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Python'],
  },
  {
    label: 'Data & AI',
    items: ['PostgreSQL', 'DynamoDB', 'Neo4j AuraDB', 'Redis', 'Amazon Bedrock', 'scikit-learn'],
  },
  {
    label: 'Cloud & Infra',
    items: ['AWS Lambda', 'API Gateway', 'Kinesis', 'EventBridge', 'DigitalOcean', 'Supabase'],
  },
]

// More granular version for /about — same categories, full detail.
export const technicalCapabilities = [
  {
    label: 'Frontend',
    items: [
      'React (18/19)',
      'Next.js',
      'TypeScript',
      'Vite',
      'React Router',
      'Zustand',
      'TanStack Query',
      'Redux',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'D3.js',
      'react-leaflet / Leaflet',
    ],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Expo', 'React Navigation', 'Flutter', 'Dart'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI (Python)', 'Python', 'SQLAlchemy', 'Pydantic', 'REST API design'],
  },
  {
    label: 'Data & AI',
    items: [
      'PostgreSQL',
      'DynamoDB',
      'Neo4j AuraDB (graph)',
      'Redis',
      'Amazon Bedrock (Claude Haiku)',
      'Groq LLM API',
      'scikit-learn (Isolation Forest)',
      'Celery (async workers)',
    ],
  },
  {
    label: 'Cloud & Infra',
    items: [
      'AWS Lambda',
      'API Gateway (HTTP + WebSocket)',
      'Kinesis',
      'EventBridge',
      'SNS',
      'S3',
      'CloudWatch',
      'CloudFormation / Serverless Framework',
      'DigitalOcean App Platform',
      'Vercel',
      'Supabase',
    ],
  },
  {
    label: 'Payments & Comms',
    items: ['Nomba', 'Squad', 'Brevo', 'Formspree'],
  },
]

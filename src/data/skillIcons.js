// Maps skill labels to a real brand mark (Simple Icons via react-icons,
// MIT/CC0 licensed) — rendered monochrome via currentColor so this stays
// a restrained typographic list, not a colorful badge wall. Tools with no
// accurate public icon (internal AWS services, Nigerian fintech APIs,
// small libraries) simply render as text — nothing is invented.
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiReactrouter,
  SiTanstack,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiD3,
  SiLeaflet,
  SiExpo,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiSqlalchemy,
  SiPydantic,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiRedis,
  SiScikitlearn,
  SiCelery,
  SiDigitalocean,
  SiVercel,
  SiSupabase,
  SiServerless,
  SiBrevo,
  SiFormspree,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

// Ordered so more specific matches (e.g. "React Native") are tested
// before broader ones (e.g. "React").
const ICON_RULES = [
  [/react native/i, SiReact],
  [/react router/i, SiReactrouter],
  [/tanstack|react query/i, SiTanstack],
  [/^react\b/i, SiReact],
  [/next\.?js/i, SiNextdotjs],
  [/typescript/i, SiTypescript],
  [/vite/i, SiVite],
  [/redux/i, SiRedux],
  [/tailwind/i, SiTailwindcss],
  [/framer/i, SiFramer],
  [/d3\.js/i, SiD3],
  [/leaflet/i, SiLeaflet],
  [/expo/i, SiExpo],
  [/flutter/i, SiFlutter],
  [/\bdart\b/i, SiDart],
  [/node\.?js/i, SiNodedotjs],
  [/express/i, SiExpress],
  [/fastapi/i, SiFastapi],
  [/python/i, SiPython],
  [/sqlalchemy/i, SiSqlalchemy],
  [/pydantic/i, SiPydantic],
  [/postgresql/i, SiPostgresql],
  [/mongodb/i, SiMongodb],
  [/neo4j/i, SiNeo4J],
  [/redis/i, SiRedis],
  [/scikit-learn/i, SiScikitlearn],
  [/celery/i, SiCelery],
  [/aws lambda/i, FaAws],
  [/digitalocean/i, SiDigitalocean],
  [/vercel/i, SiVercel],
  [/supabase/i, SiSupabase],
  [/serverless framework/i, SiServerless],
  [/brevo/i, SiBrevo],
  [/formspree/i, SiFormspree],
]

export function getSkillIcon(label) {
  const rule = ICON_RULES.find(([pattern]) => pattern.test(label))
  return rule ? rule[1] : null
}

# BUILD SPEC — Portfolio Revamp
**For: AI Coding Assistant**
**Migration:** Vanilla HTML/CSS/JS → React + Vite + Tailwind CSS
**Owner:** Full-stack / cloud systems engineer — six shipped products spanning realtime data, AI/ML, fintech infra, and applied LLM work

---

## 0. PROJECT BRIEF (read this first)

This is a **revamp**, not a from-scratch build — a working vanilla site with existing copy, skills and project history already exists. Two jobs, in order:

1. **Migrate** the current site's content/structure into a proper React + Vite + Tailwind codebase.
2. **Upgrade** it — new visual language, new information architecture, and six new project case studies added (full list + stacks in §6).

Tone: this is an engineer's portfolio, not a marketing page. It should read as **credible, technical, and precise** — the kind of site a hiring manager or CTO looks at and immediately trusts the person can build real infrastructure. No gradients. No icon soup — use a glyph only where it does real functional work (external-link arrow, menu toggle, close button), never as decoration. No stock "hero illustration" cliché.

---

## 1. TECH STACK & PACKAGES

```
npm create vite@latest . -- --template react
npm install tailwindcss @tailwindcss/vite (After installing, in vite.config.js: import tailwindcss from '@tailwindcss/vite', in index.css: @import "tailwindcss"; in index.html: <link href="/src/style.css" rel="stylesheet">)
npm install framer-motion react-router-dom clsx
npm install @studio-freight/lenis
npm install react-intersection-observer
npm install react-syntax-highlighter        # for code/config snippets in case studies
npm install recharts                        # for the few places real metrics deserve a chart
```

Keep the dependency list lean. Every library above earns its place: routing, motion, smooth scroll, scroll-reveal, syntax-highlighted snippets, and one small charting lib for genuine data (not decoration).

---

## 2. DESIGN SYSTEM

**Direction: "systems console," not "creative studio."** The person builds dashboards, realtime pipelines and cloud infrastructure — the site's visual language should feel like a well-designed internal tool: precise grid, monospace accents for anything technical (stack names, routes, metrics), restrained color.

**Palette** (CSS variables, Tailwind theme extension):
- `--bg` `#0B0C0E` — near-black base (dark-first design)
- `--surface` `#141517` — card/panel background, one step up from base
- `--text` `#EDEDED` — primary text
- `--text-dim` `#8C8F94` — secondary/meta text
- `--accent` `#5FE3A3` — single accent, a restrained signal-green (terminal/status-light feel — nods to "systems operational" without being neon or gamer-y). Use ONLY for links, active states, status dots, key metrics.
- `--line` `#242629` — hairline borders

Optional: a light-mode variant (`--bg #FAFAF9`, `--text #14171A`, same accent slightly darkened for contrast) toggled via a simple button in the nav, persisted to `localStorage`. Not required for v1 — flag it to the user as an easy add-on if time allows.

**Typography:**
- Headings: a clean, confident grotesk (e.g. "Inter" or "General Sans"), tight tracking, no serif — this isn't an editorial/campaign site, it's a technical one
- Monospace: "JetBrains Mono" or "IBM Plex Mono" — used for stack tags, route paths, metrics, nav labels, and section eyebrows (small uppercase labels above headings)
- Body: same grotesk as headings, comfortable line-height (1.6+)

**Motion principles:**
- Reveal-on-scroll: fade up 16px, staggered 60ms per item — subtler than a consumer/marketing site, this audience reads motion-heavy sites as unserious if overdone
- Hover on project cards: no scale/tilt gimmicks — a hairline border brightens to accent, and a small accent status-dot pulses once
- Page transitions: fast 200ms crossfade, no slide — feels like navigating a tool, not flipping a magazine
- Respect `prefers-reduced-motion` everywhere
- No confetti, no bouncy easing, no parallax for parallax's sake — this site's "wow" comes from clarity and craft, not spectacle

**Layout:**
- Max content width 1140px, 12-col grid on desktop
- Generous but not excessive whitespace — this is a working portfolio, density is a feature (recruiters scan)
- Breakpoints: mobile <640px, tablet 640–1024px, desktop >1024px

---

## 3. SITE MAP

```
/                    Home
/work                Project index (all case studies, filterable)
/work/:slug          Individual project case study (6 of these)
/about               Bio, background, technical capabilities
/lab                 Interactive Terminal — the engaging/"game" page
/contact             Contact + resume
```

**Nav** (sticky, background blurs on scroll): wordmark/initials on the left, `Work / About / Lab / Contact` on the right, plus a small live status dot + "Available for work" (or current status) text — a nice authentic touch that reinforces the "systems" theme. No hamburger-menu icon on mobile if avoidable — use a plain text "Menu" toggle instead, in keeping with the no-icon-soup rule; if a glyph is truly needed for the open/close state, use one minimal line-based glyph, nothing more.

**Footer:** short signature line, quick links, contact/socials as plain text links (not icon buttons), last-updated or "currently building" note.

---

## 4. PAGE-BY-PAGE BREAKDOWN

### 4.1 `/` — HOME

**Section A — Hero**
- Left-aligned, not centered. Small monospace eyebrow: `Full-stack & Cloud Systems Engineer`. Large headline — a precise one-liner about what he builds (not a slogan — something like describing the range across realtime systems, AI/ML products, and fintech infra). Sub-paragraph: 2-3 sentences, plain and factual.
- Two CTAs: `View Work →` (accent, primary) and `About →` (text link, secondary).
- No large hero image/illustration — instead, a live-feeling element: a small monospace "terminal strip" widget showing a rotating one-line status (`$ deploying traxs... done in 2.4s` / `$ 6 projects shipped` / `$ status: all systems operational`) — subtle typewriter effect, low visual weight, reinforces the engineering identity without being a gimmick.

**Section B — Featured Work (Systems Board)**
- This is the signature moment of the homepage: present the 6 projects as a **status-board grid** (like an internal ops dashboard), not a typical image-card portfolio grid.
- Each tile: project name, one-line description, a small accent status dot ("Live"), and a row of monospace stack tags (e.g. `React 19` `AWS Lambda` `DynamoDB`). No screenshots on this view — keep it text/data-driven and dense, like a real dashboard.
- On hover: hairline border brightens, a thin accent underline draws beneath the project name, and one extra metric line fades in (e.g. Traxs → `22 Lambda functions · 6 DynamoDB tables`; VERA → `Isolation Forest + graph analysis`).
- Click → `/work/:slug` case study.
- Below the grid: `View all work →` to `/work` (in case more get added later that don't fit above the fold).

**Section C — Capabilities strip**
- Four grouped columns, plain text lists, monospace labels: `Frontend` / `Backend` / `Data & AI` / `Cloud & Infra` — pull the real technologies from the six projects (React/Vite/Tailwind/Zustand/Recharts/D3; Node/Express/FastAPI/Python; PostgreSQL/DynamoDB/Neo4j/Redis; AWS Lambda/API Gateway/Kinesis/EventBridge/Bedrock, DigitalOcean, Supabase). No proficiency bars, no icon logos — just clean typographic lists. This alone should read as more credible than a badge wall.

**Section D — About teaser**
- Short paragraph + `Read more →` to `/about`.

**Section E — Lab teaser**
- One line inviting exploration: something like "Prefer the command line?" → `Open the terminal →` to `/lab`. Keep this understated, not a big flashy banner.

**Section F — Contact CTA**
- Simple closing band: current availability status + `Get in touch →`.

---

### 4.2 `/work` — PROJECT INDEX

- Same status-board tile style as the homepage section, but the full set, with filter chips at top: `All / Realtime & Data / AI & ML / Fintech Infra`. Filtering animates grid reflow (Framer Motion `layout` prop).
- Consider a secondary compact "list view" toggle (table-style: name / one-liner / stack / link) for users who want to scan fast — nice detail for a technical audience, easy with a simple state toggle.

---

### 4.3 `/work/:slug` — PROJECT CASE STUDY (× 6)

Each of the six gets the same template, populated per §6. Structure:

1. **Header** — project name, one-line pitch, live link (`Visit live →`, opens the real deployed URL), monospace stack-tag row.
2. **Overview** — 2-4 sentences: what it is, who it's for, what problem it solves.
3. **Architecture** — this is the centerpiece for this audience. Present the frontend/backend/infra stack as a clean two- or three-column table (Layer / Tool / Purpose), pulled directly from the details provided — don't compress this into prose, engineers reading a portfolio want the real stack table. Use `react-syntax-highlighter` for one small illustrative snippet if relevant (e.g. a config or API shape) — optional per project, only if it adds real signal.
4. **Highlights / what it does** — 3-5 short bullet points on the standout mechanics (e.g. Traxs: realtime WebSocket updates, 5-minute EventBridge snapshot jobs, Bedrock-grounded natural language answers; VERA: fraud-ring detection via graph analysis + Isolation Forest scoring; PERSONA: dual-task agent with full reasoning trace).
5. **Gallery** — user-supplied screenshots go here (2-4 images per project), simple lightbox on click (Framer Motion `layoutId` shared-element transition), no carousel autoplay.
6. **Footer nav** — `← Previous project` / `Next project →` for easy browsing between case studies.

---

### 4.4 `/about` — BIO & CAPABILITIES

- Narrow reading column for the bio text (carry over/refresh the existing bio content from the current site — ask the user for the latest version rather than inventing one).
- A **technical capabilities** section, same plain-text/monospace-tag approach as the homepage strip, but with more detail (specific tools, not just categories).
- Optional: a short "how I work" or "what I care about" section if the current site has this — preserve tone from the existing copy, just restyle.
- Resume download link (`Download résumé →` — plain text, not a button-with-icon).

---

### 4.5 `/lab` — THE INTERACTIVE TERMINAL (the engaging/"game" page)

This is the standout, memorable page — built to match the engineer identity rather than feel bolted-on.

- A full-screen, centered **fake interactive terminal** component. On load, it types out a welcome message and a `help` hint via a typewriter effect.
- Visitor can type real commands into an input styled as a terminal prompt. Support a small fixed command set:
  - `help` → lists available commands
  - `whoami` → short bio blurb
  - `ls projects` → lists the 6 project slugs
  - `cat <project-slug>` → prints that project's one-liner + stack tags inline, with a `open <project-slug>` hint to navigate to the full case study
  - `skills` → prints the capabilities list
  - `contact` → prints contact info / opens `/contact`
  - `clear` → clears the terminal
  - unrecognized input → a dry, in-character "command not found" response with a `help` nudge
- Command history navigable with ↑/↓ arrows (nice authentic touch, not hard to implement).
- Keep the whole thing keyboard-first but fully usable on mobile too — mobile shows the same terminal with the OS's native keyboard triggered by tapping the input; commands can also be tapped from a small suggestion row above the keyboard for touch users who don't want to type.
- This page doubles as a fun way to explore the portfolio without ever feeling like a distraction from the "serious engineer" tone — it reinforces it.

---

### 4.6 `/contact`

- Plain, fast. Name/email/message form (client-side validation; flag to the user that real submission needs a backend — Formspree or a simple serverless function — rather than silently faking success).
- Contact details and social/profile links as a clean text list (GitHub, LinkedIn, email) — no icon row.
- Current availability status repeated here.

---

## 5. RESPONSIVE & ACCESSIBILITY CHECKLIST

- Status-board grid: 3 columns desktop → 2 tablet → 1 mobile, tiles keep their density (don't over-simplify to giant cards on mobile — this audience appreciates information density even on small screens, within reason).
- Terminal page on mobile: input stays pinned above the keyboard, output area scrolls independently, tap targets ≥44px for the suggested-command chips.
- Color contrast: verify accent-green on dark background and dark-on-light (if light mode is added) both meet WCAG AA — signal-green on near-black needs a contrast check, don't assume.
- All case-study images have real descriptive `alt` text.
- Terminal is fully usable via keyboard alone; screen-reader users get an `aria-live` region announcing command output.
- `prefers-reduced-motion` disables the typewriter effects (show text instantly instead) and all non-essential transitions.

---

## 6. PROJECTS TO ADD (content source — condense into the template above, don't paste verbatim)

**1. Traxs** — `https://traxs-three.vercel.app/`
Lagos urban mobility intelligence dashboard. Realtime bus network visualization, route analytics, USSD-based driver simulation.
- Frontend: React 19, Vite, react-router-dom v7, Zustand v5, react-leaflet + Leaflet, Recharts, native WebSocket, Tailwind v4, react-hot-toast, lucide-react
- Backend/Infra: API Gateway (HTTP + WebSocket), 22 AWS Lambda functions, DynamoDB (6 tables), S3 (raw event archive), SNS (route alerts), Kinesis (passenger event stream), EventBridge (5-min mobility snapshots), Amazon Bedrock/Claude Haiku (natural-language answers grounded in live data), CloudFormation via Serverless Framework, CloudWatch
- Category: Realtime & Data

**2. VERA** — `https://vera-delta-seven.vercel.app/`
AI-powered financial trust verification platform — fraud-ring detection, entity trust scoring via network analysis, financial consequences executed through Squad's payment infra.
- Frontend: React 18, Vite, TanStack Query, D3.js graph visualization, Tailwind CSS
- Backend: FastAPI (Python), SQLAlchemy, Pydantic
- Data: PostgreSQL (transactions), Neo4j AuraDB (graph), Redis (job queue)
- AI/ML: scikit-learn Isolation Forest, Groq LLM API
- Infra: DigitalOcean App Platform, Vercel, Celery workers
- Category: AI & ML / Fintech Infra

**3. VoiceIQ** — `https://voice-iq-brown.vercel.app/`
AI-powered churn intelligence platform (built for the AI4Telco Hackathon, Microsoft AI Skills Week Lagos 2026). Turns realtime voice/WhatsApp/SMS conversations into explainable churn-risk signals with next-best-actions for call center agents.
- Stack: React, JavaScript, Python, FastAPI
- Category: AI & ML

**4. PERSONA** — `https://persona-eight-flax.vercel.app/`
User modeling and recommendation system (built for the DSN × Bluechip Tech LLM Agent Challenge, Data & AI Summit Hackathon 3.0). Builds a structured psychological profile from review history to power (A) review simulation — predicted rating, reasoning trace, generated review in the user's voice — and (B) agentic recommendation — ranked items with per-item explanations and full agent step trace.
- Backend: Python, FastAPI
- Frontend: React, TypeScript, Tailwind CSS
- Category: AI & ML

**5. Swift Settle** — `https://swift-settle.vercel.app/`
Financial identity platform for gig workers, built on Nomba's payment rails: realtime earnings tracking, instant settlement to a bank account, behavior-driven credit score with auto-approved micro-loans, worker-initiated payout requests with a lightweight admin approval flow.
- Frontend: React 19, Vite, React Router 7, Recharts, Tailwind v4
- Backend: Node.js/Express, PostgreSQL via Supabase, Nomba, Brevo
- Category: Fintech Infra

**6. RentStack** — `https://rent-stack.vercel.app/`
Virtual-account-powered rent collection platform for Nigerian landlords, built on Nomba's payment infrastructure. Every tenant gets a dedicated bank account number; transfers auto-reconcile against tenant and cycle; landlords get one dashboard instead of a WhatsApp thread of bank alerts.
- Frontend: React 19, Vite, React Router 7, Recharts, Tailwind v4
- Backend: Node.js/Express, PostgreSQL via Supabase, Nomba, Brevo
- Category: Fintech Infra

---

## 7. MIGRATION NOTES FOR THE ASSISTANT

- Start by reading the existing vanilla site's HTML/CSS/JS in full — inventory every existing project, skill, and bio detail before writing any new component, so nothing from the current site is silently dropped.
- Carry over any existing project case studies not listed in §6 into the same new case-study template, using their current copy/images.
- Do not invent metrics, employer names, or outcomes for any project that aren't in the provided details or the existing site — where a detail is missing (e.g. exact launch dates, team size), leave it out rather than fabricating it.
- Once scaffolding is done, confirm the folder structure below before building pages:

```
src/
  assets/            # real screenshots per project
  components/
    layout/          # Navbar, Footer, PageTransition, StatusDot
    home/            # Hero, SystemsBoard, CapabilitiesStrip
    work/            # ProjectCard, ProjectFilterBar, ArchitectureTable, Lightbox
    lab/             # Terminal, TerminalLine, CommandSuggestions
  pages/             # Home, Work, ProjectDetail, About, Lab, Contact
  data/              # projects.js (the 6 projects above, structured), skills.js
  hooks/             # useTypewriter, useReducedMotion, useCommandHistory
  styles/            # tailwind.css, fonts
```

---


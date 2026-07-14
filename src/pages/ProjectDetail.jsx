import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('python', python)
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'
import ArchitectureTable from '../components/work/ArchitectureTable'
import Lightbox from '../components/work/Lightbox'
import StatusDot from '../components/layout/StatusDot'
import Reveal from '../components/layout/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/work" replace />

  const { previous, next } = getAdjacentProjects(slug)

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-20">
      {/* Header */}
      <Reveal>
        <p className="eyebrow mb-3">{project.tagline}</p>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{project.name}</h1>
          <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
            <StatusDot pulse />
            {project.status}
          </span>
        </div>
        <p className="mb-6 max-w-2xl text-base text-[var(--text-dim)]">{project.oneLiner}</p>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener"
            className="font-mono text-sm text-[var(--accent)] hover:underline"
          >
            Visit live →
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
              className="font-mono text-sm text-[var(--text-dim)] hover:text-[var(--text)]"
            >
              GitHub →
            </a>
          )}
        </div>
        <div className="mb-16 flex flex-wrap gap-1.5">
          {project.stackTags.map((tag) => (
            <span key={tag} className="border border-[var(--line)] px-2 py-0.5 font-mono text-xs text-[var(--text-dim)]">
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Overview */}
      <Reveal>
        <section className="mb-16 max-w-2xl">
          <p className="eyebrow mb-3">Overview</p>
          <p className="text-base leading-relaxed text-[var(--text)]">{project.overview}</p>
        </section>
      </Reveal>

      {/* Architecture */}
      <Reveal>
        <section className="mb-16">
          <p className="eyebrow mb-3">Architecture</p>
          <ArchitectureTable rows={project.architecture} />
        </section>
      </Reveal>

      {/* Code snippet, optional */}
      {project.codeSnippet && (
        <Reveal>
          <section className="mb-16">
            <p className="eyebrow mb-3">{project.codeSnippet.caption}</p>
            <div className="overflow-x-auto border border-[var(--line)] text-sm">
              <SyntaxHighlighter
                language={project.codeSnippet.language}
                style={oneDark}
                customStyle={{ margin: 0, background: 'var(--surface)', padding: '1.25rem' }}
              >
                {project.codeSnippet.code}
              </SyntaxHighlighter>
            </div>
          </section>
        </Reveal>
      )}

      {/* Highlights */}
      <Reveal>
        <section className="mb-16 max-w-2xl">
          <p className="eyebrow mb-3">Highlights</p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-[var(--text)]">
                <span className="mt-1 text-[var(--accent)]">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Gallery */}
      <Reveal>
        <section className="mb-16">
          <p className="eyebrow mb-3">Gallery</p>
          {project.gallery.length > 0 ? (
            <Lightbox images={project.gallery} />
          ) : (
            <p className="text-sm text-[var(--text-dim)]">Screenshots pending — not yet supplied.</p>
          )}
        </section>
      </Reveal>

      {/* Footer nav */}
      <nav className="flex items-center justify-between border-t border-[var(--line)] pt-8" aria-label="Project navigation">
        <Link to={`/work/${previous.slug}`} className="font-mono text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
          ← {previous.name}
        </Link>
        <Link to={`/work/${next.slug}`} className="font-mono text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
          {next.name} →
        </Link>
      </nav>
    </div>
  )
}

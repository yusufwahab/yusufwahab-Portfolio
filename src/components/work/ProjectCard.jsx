import { Link } from 'react-router-dom'
import clsx from 'clsx'
import StatusDot from '../layout/StatusDot'

export default function ProjectCard({ project, dense = false }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group relative block border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--accent)]"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="relative inline-block text-sm font-semibold text-[var(--text)]">
          {project.name}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
        </h3>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)]">
          <StatusDot pulse />
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[var(--text-dim)]">{project.oneLiner}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stackTags.slice(0, dense ? 3 : 6).map((tag) => (
          <span
            key={tag}
            className="border border-[var(--line)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--text-dim)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.hoverMetric && (
        <p
          className={clsx(
            'mt-3 max-h-0 overflow-hidden font-mono text-[0.7rem] text-[var(--accent)]',
            'opacity-0 transition-all duration-200 group-hover:max-h-6 group-hover:opacity-100'
          )}
        >
          {project.hoverMetric}
        </p>
      )}
    </Link>
  )
}

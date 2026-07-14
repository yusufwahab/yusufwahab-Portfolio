import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatusDot from '../layout/StatusDot'

export default function ProjectListRow({ project }) {
  return (
    <motion.div layout>
      <Link
        to={`/work/${project.slug}`}
        className="group grid grid-cols-1 gap-2 border-b border-[var(--line)] py-4 transition-colors hover:border-[var(--accent)] sm:grid-cols-[1fr_2fr_1fr_auto] sm:items-center sm:gap-4"
      >
        <span className="text-sm font-semibold text-[var(--text)]">{project.name}</span>
        <span className="text-sm text-[var(--text-dim)]">{project.oneLiner}</span>
        <span className="font-mono text-xs text-[var(--text-dim)]">{project.stackTags.slice(0, 3).join(' · ')}</span>
        <span className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)]">
          <StatusDot />
          {project.status}
        </span>
      </Link>
    </motion.div>
  )
}

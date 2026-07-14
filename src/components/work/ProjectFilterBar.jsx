import clsx from 'clsx'
import { CATEGORIES } from '../../data/projects'

export default function ProjectFilterBar({ active, onChange, view, onViewChange }) {
  return (
    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={clsx(
              'border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors',
              active === cat
                ? 'border-[var(--accent)] text-[var(--accent)]'
                : 'border-[var(--line)] text-[var(--text-dim)] hover:text-[var(--text)]'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex gap-2 font-mono text-xs uppercase tracking-widest">
        <button
          type="button"
          onClick={() => onViewChange('grid')}
          className={clsx('border px-3 py-1.5', view === 'grid' ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-[var(--line)] text-[var(--text-dim)]')}
        >
          Grid
        </button>
        <button
          type="button"
          onClick={() => onViewChange('list')}
          className={clsx('border px-3 py-1.5', view === 'list' ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-[var(--line)] text-[var(--text-dim)]')}
        >
          List
        </button>
      </div>
    </div>
  )
}

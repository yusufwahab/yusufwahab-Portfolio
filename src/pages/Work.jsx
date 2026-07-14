import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/work/ProjectCard'
import ProjectListRow from '../components/work/ProjectListRow'
import ProjectFilterBar from '../components/work/ProjectFilterBar'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Work() {
  const [category, setCategory] = useState('All')
  const [view, setView] = useState('grid')
  const reduced = useReducedMotion()

  const filtered =
    category === 'All' ? projects : projects.filter((p) => p.categories.includes(category))

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-20">
      <p className="eyebrow mb-3">Work</p>
      <h1 className="mb-10 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
        All projects, filter by category, or scan the list view.
      </h1>

      <ProjectFilterBar active={category} onChange={setCategory} view={view} onViewChange={setView} />

      {view === 'grid' ? (
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div>
          {filtered.map((project) => (
            <ProjectListRow key={project.slug} project={project} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-[var(--text-dim)]">No projects in this category.</p>
      )}
    </div>
  )
}

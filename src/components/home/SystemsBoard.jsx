import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../work/ProjectCard'
import Reveal from '../layout/Reveal'

export default function SystemsBoard() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="mx-auto max-w-[1140px] px-6 py-20">
      <Reveal>
        <p className="eyebrow mb-3">Systems board</p>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mb-10 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          Shipped products, live right now.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} index={i} as={motion.div}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal index={featured.length}>
        <div className="mt-10">
          <Link to="/work" className="font-mono text-sm text-[var(--accent)] hover:underline">
            View all work →
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import SystemsBoard from '../components/home/SystemsBoard'
import CapabilitiesStrip from '../components/home/CapabilitiesStrip'
import Reveal from '../components/layout/Reveal'
import StatusDot from '../components/layout/StatusDot'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <>
      <Hero />
      <SystemsBoard />
      <CapabilitiesStrip />

      <section className="mx-auto max-w-[1140px] px-6 py-20">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">About</p>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--text-dim)]">
              Full-stack software engineer, self-taught, currently studying Metallurgical &amp; Materials
              Engineering at the University of Lagos, bringing an engineer's rigour to every product shipped.
            </p>
            <Link to="/about" className="mt-4 inline-block font-mono text-sm text-[var(--accent)] hover:underline">
              Read more →
            </Link>
          </Reveal>

          <Reveal index={1}>
            <p className="eyebrow mb-3">Lab</p>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--text-dim)]">
              Prefer the command line?
            </p>
            <Link to="/lab" className="mt-4 inline-block font-mono text-sm text-[var(--accent)] hover:underline">
              Open the terminal →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-sm text-[var(--text-dim)]">
            <StatusDot pulse />
            <span>{profile.availability}</span>
          </div>
          <Link
            to="/contact"
            className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}

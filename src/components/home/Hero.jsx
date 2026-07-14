import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../../hooks/useTypewriter'
import { heroCopy, terminalStatusLines, profile } from '../../data/profile'

function TerminalStrip() {
  const [lineIndex, setLineIndex] = useState(0)
  const { output, done } = useTypewriter(terminalStatusLines[lineIndex], { speed: 26 })

  useEffect(() => {
    if (!done) return undefined
    const t = setTimeout(() => {
      setLineIndex((i) => (i + 1) % terminalStatusLines.length)
    }, 1800)
    return () => clearTimeout(t)
  }, [done])

  return (
    <div className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 font-mono text-xs text-[var(--text-dim)]">
      <span className="text-[var(--accent)]">●</span>
      <span>{output}</span>
      <span className="animate-pulse text-[var(--accent)] motion-reduce:animate-none">▏</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1140px] px-6 pb-16 pt-20 sm:pt-28">
      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[1fr_220px] sm:gap-12 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="eyebrow mb-5">{heroCopy.eyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
            {heroCopy.headline}
          </h1>

          <p className="mt-[3px] max-w-xl text-base leading-relaxed text-[var(--text-dim)]">{heroCopy.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/work"
              className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View Work →
            </Link>
            <Link to="/about" className="text-sm font-medium text-[var(--text-dim)] hover:text-[var(--text)]">
              About →
            </Link>
          </div>
        </div>

        <img
          src={profile.portrait}
          alt={profile.fullName}
          className="order-first aspect-[4/5] w-full max-w-[220px] border border-[var(--line)] object-cover sm:order-last sm:max-w-none lg:max-w-none"
        />
      </div>

      <div className="mt-12">
        <TerminalStrip />
      </div>
    </section>
  )
}

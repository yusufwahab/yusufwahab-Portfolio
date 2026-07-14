import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1140px] px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm text-[var(--text)]">{profile.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
              Full-stack software engineer — web &amp; mobile. Currently building — always open to new work.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <span className="eyebrow mb-1">Site</span>
              <Link to="/work" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                Work
              </Link>
              <Link to="/about" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                About
              </Link>
              <Link to="/lab" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                Lab
              </Link>
              <Link to="/contact" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                Contact
              </Link>
            </nav>

            <div className="flex flex-col gap-2">
              <span className="eyebrow mb-1">Elsewhere</span>
              <a href={profile.github} target="_blank" rel="noopener" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                LinkedIn
              </a>
              <a href={profile.twitter} target="_blank" rel="noopener" className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                X / Twitter
              </a>
              <a href={`mailto:${profile.email}`} className="text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-6 font-mono text-xs text-[var(--text-dim)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {profile.fullName}. All rights reserved.</span>
          <span>Currently building.</span>
        </div>
      </div>
    </footer>
  )
}

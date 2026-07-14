import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import StatusDot from './StatusDot'
import { useTheme } from '../../hooks/useTheme'
import { profile } from '../../data/profile'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/lab', label: 'Lab' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b transition-colors duration-200',
        scrolled ? 'border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
        <NavLink to="/" className="font-mono text-sm font-semibold tracking-tight text-[var(--text)]">
          {profile.name}
        </NavLink>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  'font-mono text-xs uppercase tracking-widest transition-colors',
                  isActive ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] hover:text-[var(--text)]'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 sm:flex">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)]">
            <StatusDot pulse />
            <span>{profile.availability}</span>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>

        <button
          type="button"
          className="font-mono text-xs uppercase tracking-widest text-[var(--text)] sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-[var(--line)] bg-[var(--bg)] sm:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.to} className="border-b border-[var(--line)] last:border-b-0">
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'block px-6 py-4 font-mono text-sm uppercase tracking-widest',
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-dim)]'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)]">
                <StatusDot pulse />
                <span>{profile.availability}</span>
              </div>
              <button
                type="button"
                onClick={toggle}
                className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]"
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

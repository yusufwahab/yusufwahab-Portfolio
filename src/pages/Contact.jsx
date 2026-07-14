import { useState } from 'react'
import StatusDot from '../components/layout/StatusDot'
import Reveal from '../components/layout/Reveal'
import { profile } from '../data/profile'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqegljaj'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  function validate(data) {
    const next = {}
    if (!data.get('name')?.toString().trim()) next.name = 'Name is required.'
    const email = data.get('email')?.toString().trim() || ''
    if (!email) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.'
    if (!data.get('message')?.toString().trim()) next.message = 'Message is required.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-20">
      <Reveal>
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="mb-4 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          Get in touch
        </h1>
        <div className="mb-12 flex items-center gap-2 font-mono text-sm text-[var(--text-dim)]">
          <StatusDot pulse />
          <span>{profile.availability}</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">Reach me directly</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={`mailto:${profile.email}`} className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener" className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  GitHub: {profile.github.replace('https://', '')}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  LinkedIn: {profile.linkedin.replace('https://www.', '')}
                </a>
              </li>
              <li>
                <a href={profile.twitter} target="_blank" rel="noopener" className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  X / Twitter: {profile.twitter.replace('https://', '')}
                </a>
              </li>
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener" className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={profile.resumeUrl} download className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
                  Download résumé →
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal index={1}>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-y border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-fit border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-[var(--text-dim)]">
              {status === 'success' && "Message sent! I'll get back to you soon."}
              {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  )
}

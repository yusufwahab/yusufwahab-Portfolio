import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bio, experience, achievements, aboutStats, profile } from '../data/profile'
import { technicalCapabilities } from '../data/skills'
import { getSkillIcon } from '../data/skillIcons'
import Reveal from '../components/layout/Reveal'

export default function About() {
  const [lightbox, setLightbox] = useState(null) // { achievementIndex, imageIndex }
  return (
    <div className="mx-auto max-w-[1140px] px-6 py-20">
      <Reveal>
        <p className="eyebrow mb-3">About</p>
        <h1 className="mb-12 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          {profile.fullName}
        </h1>
      </Reveal>

      {/* Bio — narrow reading column */}
      <div className="mb-16 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-[160px_1fr]">
        <Reveal>
          <img
            src={profile.portrait}
            alt={profile.fullName}
            className="aspect-[4/5] w-full max-w-[160px] border border-[var(--line)] object-cover"
          />
        </Reveal>

        <div>
          {bio.map((p, i) => (
            <Reveal key={i} index={i}>
              <p className="mb-4 text-base leading-relaxed text-[var(--text)]">{p}</p>
            </Reveal>
          ))}

          <Reveal index={bio.length}>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[var(--line)] pt-6">
              {aboutStats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-lg font-semibold text-[var(--accent)]">{s.value}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)]">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal index={bio.length + 1}>
            <a
              href={profile.resumeUrl}
              download
              className="mt-8 inline-block font-mono text-sm text-[var(--accent)] hover:underline"
            >
              Download résumé →
            </a>
          </Reveal>
        </div>
      </div>

      {/* Technical capabilities */}
      <section className="mb-20">
        <Reveal>
          <p className="eyebrow mb-8">Technical capabilities</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technicalCapabilities.map((group, i) => (
            <Reveal key={group.label} index={i}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">{group.label}</h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => {
                  const Icon = getSkillIcon(item)
                  return (
                    <li key={item} className="flex items-center gap-2 font-mono text-sm text-[var(--text)]">
                      {Icon && <Icon className="h-3.5 w-3.5 shrink-0 text-[var(--text-dim)]" aria-hidden="true" />}
                      <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <Reveal>
          <p className="eyebrow mb-8">Experience</p>
        </Reveal>
        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <Reveal key={job.company} index={i}>
              <article className="grid grid-cols-1 gap-6 border border-[var(--line)] p-6 sm:grid-cols-[200px_1fr]">
                <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">{job.date}</span>
                  <span className="text-base font-semibold text-[var(--text)]">{job.company}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">{job.focus}</span>
                  <p className="text-sm text-[var(--text-dim)]">{job.about}</p>
                  {job.badge && (
                    <span className="w-fit border border-[var(--line)] px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)]">
                      {job.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="mb-3 text-base font-semibold text-[var(--text)]">{job.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed text-[var(--text-dim)]">
                        <span className="text-[var(--text-dim)]">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <Reveal>
          <p className="eyebrow mb-8">Achievements</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} index={i}>
              <article className="border border-[var(--line)]">
                <button
                  type="button"
                  onClick={() => setLightbox({ achievementIndex: i, imageIndex: 0 })}
                  aria-label={a.images[0].alt}
                  className="relative block aspect-video w-full cursor-pointer"
                  style={
                    a.coverAsBackground
                      ? {
                          backgroundImage: `url(${a.images[0].src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : undefined
                  }
                >
                  {!a.coverAsBackground && (
                    <img src={a.images[0].src} alt={a.images[0].alt} className="h-full w-full object-cover" />
                  )}
                  {a.images.length > 1 && (
                    <span className="absolute bottom-2 right-2 border border-[var(--line)] bg-[var(--bg)]/85 px-2 py-0.5 font-mono text-[0.65rem] text-[var(--text-dim)]">
                      +{a.images.length - 1} photos
                    </span>
                  )}
                </button>
                <div className="p-4">
                  <h3 className="mb-2 text-sm font-semibold text-[var(--text)]">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-dim)]">{a.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img
              src={achievements[lightbox.achievementIndex].images[lightbox.imageIndex].src}
              alt={achievements[lightbox.achievementIndex].images[lightbox.imageIndex].alt}
              className="max-h-[75vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="max-w-lg text-center text-sm text-[var(--text-dim)]">
              {achievements[lightbox.achievementIndex].images[lightbox.imageIndex].alt}
            </p>

            {achievements[lightbox.achievementIndex].images.length > 1 && (
              <div className="flex items-center gap-6 font-mono text-sm text-white" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="cursor-pointer hover:text-[var(--accent)]"
                  onClick={() =>
                    setLightbox((l) => {
                      const total = achievements[l.achievementIndex].images.length
                      return { ...l, imageIndex: (l.imageIndex - 1 + total) % total }
                    })
                  }
                >
                  ← Prev
                </button>
                <span className="text-[var(--text-dim)]">
                  {lightbox.imageIndex + 1} / {achievements[lightbox.achievementIndex].images.length}
                </span>
                <button
                  type="button"
                  className="cursor-pointer hover:text-[var(--accent)]"
                  onClick={() =>
                    setLightbox((l) => {
                      const total = achievements[l.achievementIndex].images.length
                      return { ...l, imageIndex: (l.imageIndex + 1) % total }
                    })
                  }
                >
                  Next →
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-6 top-6 cursor-pointer font-mono text-sm text-white"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

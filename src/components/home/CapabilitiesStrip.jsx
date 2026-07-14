import { capabilities } from '../../data/skills'
import Reveal from '../layout/Reveal'

export default function CapabilitiesStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1140px] px-6 py-16">
        <Reveal>
          <p className="eyebrow mb-10">Capabilities</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {capabilities.map((group, i) => (
            <Reveal key={group.label} index={i}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--text)]">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

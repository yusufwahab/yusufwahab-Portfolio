import { SUGGESTED_COMMANDS } from './commands'

export default function CommandSuggestions({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 border-t border-[var(--line)] bg-[var(--bg)] p-3 sm:hidden">
      {SUGGESTED_COMMANDS.map((cmd) => (
        <button
          key={cmd}
          type="button"
          onClick={() => onSelect(cmd)}
          className="min-h-[44px] border border-[var(--line)] px-3 font-mono text-xs text-[var(--text-dim)] active:border-[var(--accent)] active:text-[var(--accent)]"
        >
          {cmd}
        </button>
      ))}
    </div>
  )
}

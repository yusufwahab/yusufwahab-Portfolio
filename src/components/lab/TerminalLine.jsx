export default function TerminalLine({ type, content }) {
  if (type === 'input') {
    return (
      <p className="text-sm text-[var(--text)]">
        <span className="text-[var(--accent)]">guest@abdulwahab</span>
        <span className="text-[var(--text-dim)]">:~$ </span>
        {content}
      </p>
    )
  }

  return <p className="whitespace-pre-wrap text-sm text-[var(--text-dim)]">{content}</p>
}

import clsx from 'clsx'

export default function StatusDot({ pulse = false, className }) {
  return (
    <span className={clsx('relative inline-flex h-2 w-2', className)}>
      {pulse && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60 motion-reduce:animate-none" />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
    </span>
  )
}

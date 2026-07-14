import Terminal from '../components/lab/Terminal'

export default function Lab() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[900px] flex-col justify-center px-6 py-16">
      <p className="eyebrow mb-3 text-center">Lab</p>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
        Prefer the command line?
      </h1>
      <Terminal />
    </div>
  )
}

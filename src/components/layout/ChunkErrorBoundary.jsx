import { Component } from 'react'

const RELOAD_FLAG = 'chunk-reload-attempted'

function isChunkLoadError(error) {
  const message = String(error?.message || '')
  return /Failed to fetch dynamically imported module|Importing a module script failed|Loading chunk .* failed/i.test(
    message
  )
}

/**
 * After a redeploy, a tab that's been open still references old,
 * now-missing JS chunk files (route code-splitting). Clicking into a
 * lazy-loaded page then throws with no recovery, leaving a blank page
 * until the user manually reloads. This catches that specific failure
 * and reloads once automatically instead.
 */
export default class ChunkErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    if (isChunkLoadError(error) && !sessionStorage.getItem(RELOAD_FLAG)) {
      sessionStorage.setItem(RELOAD_FLAG, '1')
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto flex min-h-[60vh] max-w-[1140px] flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-mono text-sm text-[var(--text-dim)]">Something went wrong loading this page.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="cursor-pointer border border-[var(--accent)] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]"
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

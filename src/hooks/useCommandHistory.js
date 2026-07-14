import { useRef, useState } from 'react'

/**
 * Tracks submitted terminal commands and lets the caller navigate
 * them with ArrowUp / ArrowDown, matching a real shell's history.
 */
export function useCommandHistory() {
  const [history, setHistory] = useState([])
  const cursorRef = useRef(-1)

  function push(entry) {
    setHistory((prev) => [...prev, entry])
    cursorRef.current = -1
  }

  function previous(current) {
    if (history.length === 0) return current
    const nextCursor = cursorRef.current === -1 ? history.length - 1 : Math.max(0, cursorRef.current - 1)
    cursorRef.current = nextCursor
    return history[nextCursor]
  }

  function next() {
    if (cursorRef.current === -1) return ''
    const nextCursor = cursorRef.current + 1
    if (nextCursor >= history.length) {
      cursorRef.current = -1
      return ''
    }
    cursorRef.current = nextCursor
    return history[nextCursor]
  }

  return { history, push, previous, next }
}

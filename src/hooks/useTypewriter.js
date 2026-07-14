import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Types out `text` one character at a time. When the user has
 * prefers-reduced-motion enabled, the full text is shown instantly.
 */
export function useTypewriter(text, { speed = 28, startDelay = 0 } = {}) {
  const reduced = useReducedMotion()
  const [output, setOutput] = useState(reduced ? text : '')
  const [done, setDone] = useState(reduced)
  const idxRef = useRef(0)

  useEffect(() => {
    idxRef.current = 0
    setDone(reduced)
    setOutput(reduced ? text : '')

    if (reduced || !text) return undefined

    let timeoutId
    let intervalId

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        idxRef.current += 1
        setOutput(text.slice(0, idxRef.current))
        if (idxRef.current >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay, reduced])

  return { output, done }
}

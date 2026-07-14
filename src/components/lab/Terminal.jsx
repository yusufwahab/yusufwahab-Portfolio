import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TerminalLine from './TerminalLine'
import CommandSuggestions from './CommandSuggestions'
import { runCommand } from './commands'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useCommandHistory } from '../../hooks/useCommandHistory'
import { profile } from '../../data/profile'

const WELCOME = `Welcome to ${profile.name}'s terminal.\nType \`help\` to see available commands.`

let lineId = 0
function nextId() {
  lineId += 1
  return lineId
}

export default function Terminal() {
  const navigate = useNavigate()
  const { output: welcomeOutput } = useTypewriter(WELCOME, { speed: 18 })
  const [log, setLog] = useState([])
  const [value, setValue] = useState('')
  const history = useCommandHistory()
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [log, welcomeOutput])

  function appendLines(lines, type = 'output') {
    setLog((prev) => [...prev, ...lines.map((content) => ({ id: nextId(), type, content }))])
  }

  function submit(command) {
    appendLines([command], 'input')
    history.push(command)

    const result = runCommand(command, { navigate })

    if (result.clear) {
      setLog([])
      return
    }

    appendLines(result.lines, 'output')

    if (result.navigateTo) {
      setTimeout(() => navigate(result.navigateTo), 900)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const command = value
      setValue('')
      if (command.trim()) submit(command)
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setValue(history.previous(value))
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setValue(history.next())
    }
  }

  return (
    <div
      className="flex h-[70vh] flex-col border border-[var(--line)] bg-[var(--surface)] font-mono"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        <span className="ml-2 text-xs text-[var(--text-dim)]">guest@abdulwahab: lab</span>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-1 overflow-y-auto p-4" aria-live="polite">
        <TerminalLine type="output" content={welcomeOutput} />
        {log.map((line) => (
          <TerminalLine key={line.id} type={line.type} content={line.content} />
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-[var(--line)] px-4 py-3">
        <label htmlFor="terminal-input" className="text-[var(--accent)]">
          guest@abdulwahab<span className="text-[var(--text-dim)]">:~$</span>
        </label>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal command input"
          className="flex-1 bg-transparent text-sm text-[var(--text)] outline-none"
        />
      </div>

      <CommandSuggestions onSelect={(cmd) => submit(cmd)} />
    </div>
  )
}

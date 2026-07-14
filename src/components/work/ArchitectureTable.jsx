export default function ArchitectureTable({ rows }) {
  return (
    <div className="overflow-x-auto border border-[var(--line)]">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--line)] bg-[var(--surface)]">
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">Layer</th>
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">Tool</th>
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row.layer}-${row.tool}-${i}`} className="border-b border-[var(--line)] last:border-b-0">
              <td className="px-4 py-3 align-top font-mono text-xs text-[var(--accent)]">{row.layer}</td>
              <td className="px-4 py-3 align-top text-sm text-[var(--text)]">{row.tool}</td>
              <td className="px-4 py-3 align-top text-sm text-[var(--text-dim)]">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { projects } from '../../data/projects'
import { technicalCapabilities } from '../../data/skills'
import { profile, bio } from '../../data/profile'

const COMMAND_LIST = ['help', 'whoami', 'ls projects', 'cat <project-slug>', 'skills', 'contact', 'clear']

export function runCommand(raw, { navigate }) {
  const input = raw.trim()
  const lower = input.toLowerCase()

  if (lower === '') return { lines: [] }

  if (lower === 'help') {
    return {
      lines: [
        'Available commands:',
        ...COMMAND_LIST.map((c) => `  ${c}`),
      ],
    }
  }

  if (lower === 'whoami') {
    return { lines: [`${profile.fullName}: ${profile.role}`, ...bio] }
  }

  if (lower === 'ls projects') {
    return {
      lines: [
        'Slugs:',
        ...projects.map((p) => `  ${p.slug}`),
        '',
        'Run `cat <project-slug>` for details, or `open <project-slug>` to view the case study.',
      ],
    }
  }

  if (lower.startsWith('cat ')) {
    const slug = input.slice(4).trim().toLowerCase()
    const project = projects.find((p) => p.slug === slug)
    if (!project) {
      return { lines: [`cat: ${slug}: no such project. Run \`ls projects\` to see valid slugs.`] }
    }
    return {
      lines: [
        `${project.name}: ${project.oneLiner}`,
        project.stackTags.join(' · '),
        `open ${project.slug}  →  view full case study`,
      ],
    }
  }

  if (lower.startsWith('open ')) {
    const slug = input.slice(5).trim().toLowerCase()
    const project = projects.find((p) => p.slug === slug)
    if (!project) {
      return { lines: [`open: ${slug}: no such project. Run \`ls projects\` to see valid slugs.`] }
    }
    return {
      lines: [`Opening /work/${slug}...`],
      navigateTo: `/work/${slug}`,
      navigate,
    }
  }

  if (lower === 'skills') {
    return {
      lines: technicalCapabilities.flatMap((group) => [`${group.label}:`, `  ${group.items.join(', ')}`]),
    }
  }

  if (lower === 'contact') {
    return {
      lines: [
        `Email: ${profile.email}`,
        `GitHub: ${profile.github}`,
        `LinkedIn: ${profile.linkedin}`,
        'Opening /contact...',
      ],
      navigateTo: '/contact',
      navigate,
    }
  }

  if (lower === 'clear') {
    return { lines: [], clear: true }
  }

  return {
    lines: [`command not found: ${input}`, 'not sure that one exists outside a shell prompt. Try `help`.'],
  }
}

export const SUGGESTED_COMMANDS = ['help', 'whoami', 'ls projects', 'skills', 'contact', 'clear']

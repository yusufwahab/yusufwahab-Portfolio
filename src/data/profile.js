// Carried over verbatim in substance from the existing site's copy —
// restyled, not rewritten with invented facts. See BUILD_SPEC.md §4.4, §7.

import resumeFile from '../assets/resume/Abdulwahab_Yusuf_CV.pdf'
import portrait from '../assets/profile/portrait.jpg'
import hackathonImg from '../assets/achievements/hackathon-win.jpg'
import beMintImg from '../assets/achievements/be-mint.jpeg'
import ecxImg from '../assets/achievements/ecx.jpg'
import allonPitchImg from '../assets/achievements/allon-hackathon-pitch.jpg'
import allonPrizeImg from '../assets/achievements/allon-hackathon-prize.jpg'
import msftWinnerImg from '../assets/achievements/microsoft-ai-skills-winner.jpg'
import msftStageImg from '../assets/achievements/microsoft-ai-skills-stage.jpg'
import ecocyclersImg from '../assets/achievements/ecocyclers-bemint-hackathon.jpg'
import bemintTeamImg from '../assets/achievements/bemint-hackathon-team.jpg'

export const profile = {
  name: 'Abdulwahab Yusuf',
  fullName: 'Abdulwahab Boluwatife Yusuf',
  role: 'Software Engineer, Full-stack Web & Mobile',
  availability: 'Available for work',
  email: 'yabvil25@gmail.com',
  github: 'https://github.com/yusufwahab',
  linkedin: 'https://www.linkedin.com/in/abdulwahab-yusuf-285703265',
  twitter: 'https://x.com/abdulwahab2504',
  whatsapp: 'https://wa.me/message/2LCRAVINZ3PNI1',
  resumeUrl: resumeFile,
  portrait,
}

export const heroCopy = {
  eyebrow: 'Software Engineer, Full-stack Web & Mobile App Dev.',
  headline: 'I build software that has to hold up in the real world.',
  sub: "Full-stack engineer working end to end across web, mobile, and applied AI/ML, self-taught and focused on shipping things that work. I've launched Classence, an all-inclusive personalized learning platform, plus several other live products spanning realtime dashboards, AI tools, and fintech.",
}

// Bio text carried over from the existing site's Contact/About copy.
export const bio = [
  "I'm a software engineer focused on full-stack web and mobile app development, skilled in React, Next.js, TypeScript, Node.js, Python, PostgreSQL, React Native, and Flutter. I'm currently studying Metallurgical & Materials Engineering at the University of Lagos. I crossed disciplines by choice, and I bring an engineer's rigour to every line of code I write.",
  "Self-taught from the ground up, I build complete digital products, from pixel-perfect frontends and robust backends to cross-platform mobile apps. I've won two hackathons, shipped real products, and I'm always open to new opportunities, collaborations, or just a good conversation about tech.",
]

export const experience = [
  {
    date: '2025 – Present',
    company: 'RAOATECH',
    focus: 'Software & App Development',
    about: 'Providing cutting-edge desktop and mobile applications to help organisations become top players in their industries.',
    badge: 'Part-time',
    title: 'Software Developer',
    bullets: [
      'Developed a cross-platform mobile application using React Native and Expo, delivering a responsive and consistent experience across iOS and Android',
      'Designed and implemented backend services, including APIs and database management, to power core application functionality',
      'Built and integrated scalable endpoints, ensuring seamless communication between the mobile app and server',
      'Leveraged Expo tools for efficient development and deployment, while maintaining clean, optimized, and well-structured code through collaboration and code reviews',
    ],
  },
  {
    date: '2025',
    company: 'AVZDAX',
    focus: 'Peace-Tech & Security',
    about: 'A peace-tech security company building technology-driven solutions for safety and conflict prevention.',
    badge: 'Part-time',
    title: 'Software Developer',
    bullets: [
      'Designed and implemented responsive web applications using React and Node.js',
      'Optimised database queries and improved overall application performance',
      'Integrated third-party APIs for endpoint connection and user authentication',
      'Conducted code reviews with a small dev team to ensure best practices',
    ],
  },
  {
    date: '2024 – 2025',
    company: 'Freelance',
    focus: 'Frontend Development',
    about: 'Independent client work delivering responsive, accessible, and performant web applications.',
    badge: 'Contract',
    title: 'Frontend Developer',
    bullets: [
      'Developed interactive UIs using React and Tailwind CSS',
      'Implemented state management using Redux for scalable frontend applications',
      'Improved SEO and accessibility compliance of web applications',
      'Delivered features within Agile sprint deadlines',
    ],
  },
  {
    date: '2023 – 2024',
    company: 'Real Awesome',
    focus: 'Education',
    about: 'A school focused on equipping students with practical skills in technology and software development.',
    badge: 'Part-time',
    title: 'Frontend Tutor',
    bullets: [
      'Tutored students in HTML, CSS, JavaScript, and frontend fundamentals',
      'Guided learners through debugging and UI/UX problem-solving sessions',
      'Assisted in building responsive interfaces and integrating APIs',
      'Taught layout systems using CSS Grid and Flexbox',
    ],
  },
]

export const achievements = [
  {
    title: '5x Hackathon Winner',
    description:
      'First place in five separate hackathons for innovative software solutions, competing against teams across Nigeria and delivering production-ready products under tight deadlines.',
    coverAsBackground: true,
    images: [
      {
        src: msftStageImg,
        alt: 'On stage with the winning team at Microsoft AI Skills Week Lagos 2026',
      },
      { src: hackathonImg, alt: '5x Hackathon Winner' },
      {
        src: msftWinnerImg,
        alt: 'Team holding the Winner banner at the Microsoft AI Skills Hackathon 2026, AI Skills Week Lagos',
      },
      {
        src: allonPrizeImg,
        alt: 'Team with solar panel hackathon prizes at the AllOn Renewable Energy Hackathon',
      },
      {
        src: allonPitchImg,
        alt: 'Team pitching at the AllOn 10th Anniversary Renewable Energy Hackathon',
      },
      {
        src: ecocyclersImg,
        alt: 'EcoCyclers team hackathon pitch closing slide, powered by Be-Mint 2.0',
      },
      {
        src: bemintTeamImg,
        alt: 'Team standing in front of Be-MINT sustainable development through STEM/AI/T education banners',
      },
    ],
  },
  {
    title: 'President, Be-Mint Empowerment Program',
    description: 'Led initiatives to empower participants and drive measurable program impact across the organisation.',
    images: [{ src: beMintImg, alt: 'President, Be-Mint Empowerment Program' }],
  },
  {
    title: 'UNILAG Engineering Coding Challenge (ECX)',
    description: 'Competed university-wide, demonstrating strong technical and problem-solving skills among engineering peers.',
    images: [{ src: ecxImg, alt: 'UNILAG Engineering Coding Challenge' }],
  },
]

// Real stats carried over from the existing site (shown on /about, not
// invented for the new hero — the new hero has no stats block per spec).
export const aboutStats = [
  { value: '5+', label: 'Years Building' },
  { value: '20+', label: 'Projects Shipped' },
  { value: 'Web & Mobile', label: 'Fullstack + App Dev' },
]

export const terminalStatusLines = [
  '$ status: all systems operational',
  '$ 6 projects shipped',
  '$ deploying traxs... done in 2.4s',
  '$ whoami → full-stack software engineer, web & mobile',
]

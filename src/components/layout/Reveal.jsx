import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Fade-up-16px scroll reveal. Pass `index` to stagger a group of
 * items by 60ms each, per the design spec's motion principles.
 */
export default function Reveal({ children, index = 0, as: Component = motion.div, className }) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  if (reduced) {
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    )
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
    >
      {children}
    </Component>
  )
}

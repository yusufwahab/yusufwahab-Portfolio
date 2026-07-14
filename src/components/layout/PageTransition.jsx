import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function PageTransition({ children }) {
  const reduced = useReducedMotion()

  if (reduced) return children

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

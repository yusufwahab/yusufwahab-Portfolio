import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ images }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            layoutId={`gallery-${img.src}`}
            onClick={() => setOpenIndex(i)}
            className="block overflow-hidden border border-[var(--line)] text-left"
          >
            <img src={img.src} alt={img.alt} className="aspect-video w-full object-cover" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.img
              layoutId={`gallery-${images[openIndex].src}`}
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close image"
              className="absolute right-6 top-6 font-mono text-sm text-white"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

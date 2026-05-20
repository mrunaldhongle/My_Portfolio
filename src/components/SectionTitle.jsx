import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="mb-10 max-w-2xl"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{subtitle}</p>
      <h2 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-slate-100 sm:text-5xl">{title}</h2>
    </motion.div>
  )
}

import { motion } from 'framer-motion'

// ── Logo imports ───────────────────────────────────────────────────────────
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.webp'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
// ── Experience data with logos ─────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    company: 'Make A Difference',
    role: 'Impact Organizer',
    duration: '2023 - 2026',
    description: 'Led community initiatives and social impact projects, coordinating team efforts and driving meaningful change.',
    logo: logo1,
    tech: ['Leadership', 'Management', 'Communication'],
  },
  {
    id: 2,
    company: 'Planitt Solution',
    role: 'Junior Software Developer',
    duration: '2026 - Present',
    description: 'Developed full-stack web applications using MERN stack, implementing responsive designs and optimizing performance.',
    logo: logo2,
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 3,
    company: 'ICEICO Technology',
    role: 'Web Developer & Digital Marketing Intern',
    duration: '2025 - 2026',
    description: 'Designed and deployed responsive websites, executed digital marketing strategies, and improved SEO rankings.',
    logo: logo3,
    tech: ['HTML/CSS', 'SEO', 'Digital Marketing'],
  },
  {
    id: 4,
    company: 'The Youthopian Force',
    role: 'Content Strategist',
    duration: '2025',
    description: 'Crafted engaging content for youth programs, managed social media presence, and coordinated marketing campaigns.',
    logo: logo4,
    tech: ['Content Strategy', 'Social Media', 'Canva'],
  },
  {
    id: 5,
    company: 'Gray Corporate',
    role: 'UI Designer',
    duration: '2025',
    description: 'Analyzed complex datasets, created visualization dashboards, and provided actionable business insights.',
    logo: logo5,
    tech: ['Python', 'Tableau', 'Power BI', 'SQL'],
  },
  {
    id: 6,
    company: 'Uphill Technologies',
    role: 'Software Developer Intern',
    duration: '2024',
    description: 'Built scalable applications using modern tech stack, collaborated with cross-functional teams on innovative projects.',
    logo: logo6, // fallback — replace with logo6 when available
    tech: ['React.js', 'Tailwind', 'Next.js', 'Firebase'],
  },
]

// ── Animation variants ─────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

// ── Component ──────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section className="relative pt-20 md:pt-28 pb-10 md:pb-12 overflow-hidden">
      <div className="w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-0.5 w-20 mx-auto bg-slate-300 dark:bg-slate-600 rounded-full"
          />
        </motion.div>

        {/* Cards Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="flex flex-col gap-5"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative w-full"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-slate-200/50 dark:bg-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

              {/* Card */}
              <div className="relative p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">

                {/* Left accent bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-[70%] rounded-r-full bg-slate-400 dark:bg-slate-500 transition-all duration-400" />

                {/* Logo */}
                <div className="flex-shrink-0 ml-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/10 backdrop-blur-md shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Left text: Company, Role, Duration */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white truncate mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base font-semibold mb-1">
                    {exp.role}
                  </p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                    {exp.duration}
                  </p>
                </div>

                {/* Right: Description + Tags */}
                <div className="flex-[1.4] min-w-0">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-slate-100/30 dark:bg-white/3 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

// ── Logo imports ───────────────────────────────────────────────────────────
import logo1 from '../assets/Activity1.png'
import logo2 from '../assets/Activity2.png'
import logo3 from '../assets/Activity3.png'
import logo4 from '../assets/Activity4.png'
import logo5 from '../assets/Activity5.png'
// ── Activities data ─────────────────────────────────────────────
const activities = [
  {
    id: 1,
    title: 'SRC',
    organization: 'Public Relation Officer Head',
    duration: '2025',
    description: 'Lead PR efforts for the Student Representative Council, managing communication between students and faculty, and organizing campus-wide engagement initiatives.',
    logo: logo1,
  },
  {
    id: 2,
    title: 'Sports Coordinator',
    organization: 'Kho-kho, Skipper, Athletic',
    duration: '2025',
    description: 'Coordinated Kho-Kho, Skipper, Athletic events and activities for the college fest.',
    logo: logo2,
  },
  {
    id: 3,
    title: 'Volunteer',
    organization: 'NSS (National Service Scheme)',
    duration: '2023 - 2024',
    description: 'Participated in community service projects, blood donation camps, and environmental awareness drives.',
    logo: logo3,
  },
  {
    id: 4,
    title: 'ACM Member',
    organization: 'ACM Student Chapter',
    duration: '2025 - 2026',
    description: 'Engaged in discussions on the latest trends in technology, artificial intelligence, and machine learning, and attended several talks and workshops organized by the chapter',
    logo: logo4,
  },
  {
    id: 5,
    title: 'Event cordinator',
    organization: 'Emergicon ',
    duration: '2025 - 2026',
    description: 'Orgnized a interdepartmental event on behalf of college',
    logo: logo5,
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
export default function ExtraCurricular() {
  return (
    <section className="relative pt-10 md:pt-12 pb-20 md:pb-28 overflow-hidden">
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
            Extra Curricular Activities
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
          {activities.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative w-full cursor-pointer"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-slate-200/50 dark:bg-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

              {/* Card */}
              <div className="relative p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-xl shadow-soft flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">

                {/* Left accent bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-[70%] rounded-r-full bg-slate-400 dark:bg-slate-500 transition-all duration-400" />

                {/* Logo */}
                <div className="flex-shrink-0 ml-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <img
                      src={item.logo}
                      alt={item.organization}
                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Left text: Title, Organization, Duration */}
                <div className="flex-[1.2] min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white truncate mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base font-semibold mb-1">
                    {item.organization}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {item.duration}
                  </p>
                </div>

                {/* Middle: Description */}
                <div className="flex-[1.5] min-w-0">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
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

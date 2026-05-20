import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { services } from '../data/portfolioData'

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Wait for animations to settle
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          
          // Add a temporary glow/highlight effect to the specific box
          const card = element.children[0]
          if (card) {
            card.classList.add('ring-4', 'ring-cyan-400', 'dark:ring-cyan-500', 'scale-[1.02]')
            setTimeout(() => {
              card.classList.remove('ring-4', 'ring-cyan-400', 'dark:ring-cyan-500', 'scale-[1.02]')
            }, 1500)
          }
        }
      }, 400)
    }
  }, [location])

  const getCategorySlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }

  return (
    <section className="bg-slate-50 px-6 py-0 dark:bg-slate-950 sm:px-8 lg:px-10 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Services Section */}
        <SectionTitle title="Services" subtitle="What I deliver" />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const categorySlug = getCategorySlug(service.title)
            
            return (
              <motion.div
                key={service.title}
                id={categorySlug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex scroll-mt-24"
              >
                <Card className="flex flex-col h-full w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-end">
                    <Link
                      to={`/projects/${categorySlug}`}
                      aria-label={`View ${service.title} projects`}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white group"
                    >
                      <FiArrowUpRight className="text-lg transition-transform group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="flex-grow mt-6">
                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={`/projects/${categorySlug}`}
                      className="flex items-center justify-center w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                    >
                      View Projects
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
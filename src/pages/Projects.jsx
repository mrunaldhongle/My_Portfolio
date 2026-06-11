import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import { featuredProjects, contactInfo } from '../data/portfolioData'

export default function Projects() {
  return (
    <main className="bg-[#f0efec] text-slate-950 transition-colors duration-300 dark:bg-[#25150f] dark:text-slate-100 min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle title="Projects" subtitle="Featured work" />

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          <section className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft dark:border-[#4f3a2b] dark:bg-[#3d291e]">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Portfolio overview</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">Designing modern products with strong code and meaningful impact.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">Explore curated projects that showcase responsive UI, efficient backends, and data-driven features. Each example demonstrates user-centered solutions built with modern web technologies.</p>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-[#4f3a2b] dark:bg-[#2f1f16] dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-[#3d291e]">
              <FiArrowRight className="h-4 w-4" />
              View All Projects
            </a>
          </section>

          <section className="grid gap-4">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft dark:border-[#4f3a2b] dark:bg-[#3d291e]">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">What I build</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Full-Stack Applications</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">I build intelligent web applications, machine learning solutions, and scalable full-stack platforms using Python, React, Node.js, and modern AI technologies..</p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft dark:border-[#4f3a2b] dark:bg-[#3d291e]">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">MY APPROACH</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Problem Solving Through
Technology & Innovation</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">I approach challenges with a blend of technical expertise and creative thinking, leveraging the latest tools and methodologies to deliver innovative solutions.</p>
            </div>
          </section>
        </div>

        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-[#4f3a2b] dark:bg-[#3d291e]"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{project.tech.join(' • ')}</p>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:border-[#4e3d31] dark:bg-[#2f1f16] dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 dark:border-[#4e3d31] dark:bg-[#2f1f16]">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 dark:border-[#4e3d31] dark:text-slate-100 dark:hover:bg-[#3d2a22]">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#6F4E37] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7f5b45]">
                    Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

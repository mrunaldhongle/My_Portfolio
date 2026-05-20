import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { galleryCards } from '../data/portfolioData'

export default function Gallery() {
  return (
    <section className="bg-slate-50 px-6 py-0 dark:bg-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="My Gallery" subtitle="Blogs, memories, achievements" />
        <div className="grid gap-6 xl:grid-cols-3">
          {galleryCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/gallery/${item.id}`} className="group block h-full outline-none">
                <Card className="overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full overflow-hidden rounded-[32px] bg-slate-100 dark:bg-slate-800">
                    <div className="relative flex-grow p-8 transition duration-500 group-hover:scale-[1.01]">
                      <div className="relative mb-6 h-48 overflow-hidden rounded-[28px] bg-slate-200 dark:bg-slate-700">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-950 dark:text-white transition-colors">{item.title}</h3>
                      <p className="mt-4 text-slate-600 dark:text-slate-300">{item.subtitle}</p>
                      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{item.feature}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

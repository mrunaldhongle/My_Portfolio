import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryCards } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
)

export default function GalleryDetail() {
  const { id } = useParams()
  const selectedCard = galleryCards.find(card => card.id === id)
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  if (!selectedCard) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gallery not found</h2>
      </div>
    )
  }

  return (
    <section className="bg-slate-50 px-6 py-12 dark:bg-slate-950 sm:px-8 lg:px-10 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <Link to="/gallery" className="inline-flex items-center gap-2 mb-8 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeftIcon />
          <span className="font-medium">Back to Gallery</span>
        </Link>
        
        <SectionTitle title={selectedCard.title} subtitle={selectedCard.subtitle} />
        
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {selectedCard.details?.map((detail, index) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col overflow-hidden transition-all duration-300 border group bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-3xl hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <h3 className="absolute text-2xl md:text-3xl font-bold text-white bottom-6 left-6 right-6">
                  {detail.title}
                </h3>
              </div>
              <div className="flex-grow p-6 md:p-8 flex flex-col items-start">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {detail.description}
                </p>
                {detail.expandedContent && (
                  <div className="w-full">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedItems[detail.id] ? 'auto' : 0, 
                        opacity: expandedItems[detail.id] ? 1 : 0,
                        marginTop: expandedItems[detail.id] ? 16 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {detail.expandedContent}
                      </p>
                    </motion.div>
                    <button 
                      onClick={() => toggleExpand(detail.id)}
                      className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 focus:outline-none"
                    >
                      {expandedItems[detail.id] ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

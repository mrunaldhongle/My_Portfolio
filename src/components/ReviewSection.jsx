
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReviewCard from './ReviewCard'
import AddReviewModal from './AddReviewModal'

const STORAGE_KEY = 'portfolio_reviews_v5' // Change this version (e.g. to v4) whenever you edit DEFAULT_REVIEWS to see changes!

const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: 'Vedant Dhande',
    role: 'CEO of Codvyn',
    comment:
      'Awesome work in designing and media production. Really creative.',
    rating: 5,
    colorIndex: 0,
  },
  {
    id: 2,
    name: 'Maddy',
    role: 'Software Developper',
    comment:
      'He always helps and guides me in my web development journey. His career pathway and services are truly great and very helpful. Highly recommended!',
    rating: 5,
    colorIndex: 1,
  },
  {
    id: 3,
    name: 'Piyush Tembhekar',
    role: 'CEO of Planitt Solution',
    comment:
      'He is very dedicated to his work and always tries to improve himself. The quality of work he delivers is excellent. His way of working is also commendable.',
    rating: 5,
    colorIndex: 2,
  },
  {
    id: 4,
    name: 'Parth Shende',
    role: 'CTO, Technical Delivery in Planitt Solution',
    comment:
      'A true problem-solver who loves diving deep into complex challenges. His attention to detail is outstanding, and he always pushes boundaries to deliver exceptional quality in everything he does.',
    rating: 5,
    colorIndex: 3,
  },
  {
    id: 5,
    name: 'Om Shrikhande',
    role: 'Software Developer',
    comment:
      'He is a very bright and enthusiastic developer who is always eager to learn and improve. His creativity and problem-solving skills are excellent. A great team player!',
    rating: 5,
    colorIndex: 4,
  }
  
]

function loadReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) {
        const userAddedReviews = parsed.filter(r => r.id > 1000)
        return [...DEFAULT_REVIEWS, ...userAddedReviews]
      }
    }
  } catch (_) {}
  return DEFAULT_REVIEWS
}

function saveReviews(reviews) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  } catch (_) {}
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState(loadReviews)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    saveReviews(reviews)
  }, [reviews])

  const handleAddReview = (newReview) => {
    const colorIndex = reviews.length % 8
    setReviews((prev) => [...prev, { ...newReview, colorIndex }])
  }

  // Duplicate reviews for seamless infinite loop
  const track = [...reviews, ...reviews]

  return (
    <section className="relative bg-white dark:bg-slate-950 px-0 py-20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-slate-100/60 dark:bg-slate-800/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-slate-200/40 dark:bg-slate-700/10 blur-3xl" />
      </div>

      {/* Section heading */}
      <div className="relative mx-auto mb-14 max-w-3xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
        >
          Reviews
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white"
        >
          What My Friends Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300"
        >
          Trusted by clients for delivering modern web experiences, creative solutions, and
          professional project execution.
        </motion.p>
      </div>

      {/* Carousel */}
      <style>{`
        @keyframes review-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-marquee {
          animation: review-scroll 40s linear infinite;
          will-change: transform;
        }
        .review-marquee:hover {
          animation-play-state: paused;
        }
        .review-track-wrapper {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative review-track-wrapper overflow-hidden"
      >
        <div className="flex gap-5 md:gap-6 w-max review-marquee">
          {track.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[85vw] sm:w-[42vw] lg:w-[30vw] xl:w-[26vw]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Add Review Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative mt-14 flex justify-center px-6"
      >
        <motion.button
          id="add-review-btn"
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.04, boxShadow: '0 16px 36px rgba(0,0,0,0.14)' }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm shadow-lg transition-all duration-300"
        >
         
          Add Review
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AddReviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </section>
  )
}

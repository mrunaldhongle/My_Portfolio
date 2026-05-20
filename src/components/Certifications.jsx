import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'

// ── Direct Vite asset imports ──────────────────────────────────────────────
import cert1Img from '../assets/certificate1.jpg.jpeg'
import cert2Img from '../assets/certificate2.jpeg'
import cert5Img from '../assets/certificate5.jpeg'
import cert3Img from '../assets/certificate3.png'
import cert4Img from '../assets/certificate4.png'
import cert3Pdf from '../assets/certificate3.pdf'
import cert4Pdf from '../assets/certificate4.pdf'

// ── Certificate data using real assets ────────────────────────────────────
const certificationsData = [
  {
    id: 1,
    title: 'Data Science & Analytics',
    organization: 'HP LIFE ONLINE COURSES',
    image: cert1Img,
    url: cert1Img,
    isPdf: false,
  },
  {
    id: 2,
    title: 'Data Analysis By Microsoft',
    organization: 'Microsoft and LinkedIn Learning',
    image: cert2Img,
    url: cert2Img,
    isPdf: false,
  },
  {
    id: 3,
    title: 'Python for Data Science',
    organization: 'NPTEL IIT Madras',
    image: cert3Img,   // use closest image as preview
    url: cert3Pdf,
    isPdf: true,
  },
  {
    id: 4,
    title: 'Data Base Management System',
    organization: 'NPTEL IIT Kharagpur',
    image: cert4Img,   // use closest image as preview
    url: cert4Pdf,
    isPdf: true,
  },
  {
    id: 5,
    title: 'Python Essential 1',
    organization: 'CISCO',
    image: cert5Img,
    url: cert5Img,
    isPdf: false,
  },
]

// ── Modal Component ────────────────────────────────────────────────────────
function CertificateModal({ cert, isOpen, onClose }) {
  if (!cert) return null
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 220 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl">
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white transition"
              >
                <FiX size={20} />
              </motion.button>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Image preview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-contain rounded-2xl"
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-medium mb-6">
                    {cert.organization}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition text-center text-sm"
                    >
                      <FiExternalLink size={16} />
                      {cert.isPdf ? 'Open PDF' : 'View Full Certificate'}
                    </motion.a>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm"
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Certifications Carousel ────────────────────────────────────────────────
export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Duplicate for seamless infinite loop
  const duplicatedCerts = [...certificationsData, ...certificationsData]

  return (
    <section className="relative pt-10 md:pt-12 pb-10 md:pb-12 overflow-hidden">
      <style>
        {`
          @keyframes cert-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .cert-marquee {
            animation: cert-scroll 35s linear infinite;
          }
          .cert-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

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
            Certifications &amp; Achievements
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-0.5 w-20 mx-auto bg-slate-300 dark:bg-slate-600 rounded-full"
          />
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Carousel Track */}
          <div className="flex gap-6 md:gap-8 w-max cert-marquee">
            {duplicatedCerts.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 w-[85vw] sm:w-[42vw] lg:w-[28vw] transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Card wrapper */}
                <div className="group h-full relative">
                  {/* Card */}
                  <div className="relative h-full p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-xl overflow-hidden">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Image */}
                    <div className="relative mb-4 rounded-xl overflow-hidden h-44 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {cert.isPdf && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 text-xs font-bold bg-slate-900 text-white rounded">PDF</div>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        {cert.organization}
                      </p>

                      {/* Button */}
                      <motion.button
                        onClick={() => setSelectedCert(cert)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold transition"
                      >
                        View Certificate
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}

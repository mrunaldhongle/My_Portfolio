
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

function StarInput({ value, onChange }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className="text-2xl transition-transform hover:scale-110 focus:outline-none"
          aria-label={`Rate ${star} stars`}
        >
          <span
            className={
              star <= (hovered || value)
                ? 'text-yellow-400'
                : 'text-slate-300 dark:text-slate-600'
            }
          >
            ★
          </span>
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-sm text-slate-500 dark:text-slate-400 self-center">
          {value === 1 ? 'Poor' : value === 2 ? 'Fair' : value === 3 ? 'Good' : value === 4 ? 'Very Good' : 'Excellent'}
        </span>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 dark:focus:border-violet-500 transition'

export default function AddReviewModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', role: '', comment: '', rating: 0 })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.role.trim()) e.role = 'Designation is required.'
    if (!form.comment.trim() || form.comment.trim().length < 20)
      e.comment = 'Comment must be at least 20 characters.'
    if (form.rating === 0) e.rating = 'Please select a star rating.'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 500)) // brief feedback delay
    onSubmit({ ...form, id: Date.now() })
    setForm({ name: '', role: '', comment: '', rating: 0 })
    setErrors({})
    setSubmitting(false)
    onClose()
  }

  const handleClose = () => {
    setForm({ name: '', role: '', comment: '', rating: 0 })
    setErrors({})
    onClose()
  }

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
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
              {/* Top accent — site theme */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-950 dark:bg-slate-100 rounded-t-[32px]" />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-white transition"
              >
                <FiX size={18} />
              </motion.button>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="mb-7">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Share Your Experience
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                    Your feedback means the world. Let others know what it was like!
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Rating <span className="text-rose-500">*</span>
                    </label>
                    <StarInput
                      value={form.rating}
                      onChange={(v) => {
                        setForm((p) => ({ ...p, rating: v }))
                        setErrors((p) => ({ ...p, rating: undefined }))
                      }}
                    />
                    {errors.rating && (
                      <p className="mt-1.5 text-xs text-rose-500">{errors.rating}</p>
                    )}
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={form.name}
                      onChange={handleChange('name')}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Designation / Role <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="review-role"
                      type="text"
                      placeholder="e.g. Product Manager at TechCorp"
                      value={form.role}
                      onChange={handleChange('role')}
                      className={inputClass}
                    />
                    {errors.role && (
                      <p className="mt-1.5 text-xs text-rose-500">{errors.role}</p>
                    )}
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Review <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="review-comment"
                      rows={4}
                      placeholder="Share your honest experience (at least 20 characters)…"
                      value={form.comment}
                      onChange={handleChange('comment')}
                      className={`${inputClass} resize-none`}
                    />
                    <div className="flex justify-between items-start mt-1">
                      {errors.comment ? (
                        <p className="text-xs text-rose-500">{errors.comment}</p>
                      ) : (
                        <span />
                      )}
                      <p className="text-xs text-slate-400 dark:text-slate-500 ml-auto">
                        {form.comment.length} chars
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm shadow-md transition disabled:opacity-60"
                    >
                      {submitting ? (
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                      ) : null}
                      {submitting ? 'Submitting…' : 'Submit Review'}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={handleClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

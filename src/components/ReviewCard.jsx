function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-0.5 text-lg">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? 'text-yellow-400'
              : 'text-slate-300 dark:text-slate-600'
          }
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewCard({ review }) {
  const { name, role, rating = 5, comment } = review

  return (
    <div className="group relative h-full flex flex-col p-7 rounded-[28px] border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-500">
      {/* Subtle inner glass shimmer */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/50 via-transparent to-slate-50/20 dark:from-white/5 dark:to-slate-800/10 pointer-events-none" />

      {/* ── TOP: Profile row ── */}
      <div className="relative flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {/* Avatar — black/white/gray theme */}
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 text-base font-bold shadow-sm ring-2 ring-slate-100 dark:ring-slate-800">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
              {name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{role}</p>
          </div>
        </div>

        {/* Quote icon */}
        <span className="text-4xl font-serif leading-none text-orange-400/70 dark:text-orange-400/50 select-none self-start -mt-1">
          &#8220;
        </span>
      </div>

      {/* ── BOTTOM: Star rating ── */}
      <div className="relative pt-1 border-t border-slate-100 dark:border-slate-700/50">
        <StarRating rating={rating} />
      </div>

      {/* ── MIDDLE: Comment ── */}
      <p className="relative text-sm leading-7 text-slate-600 dark:text-slate-300 flex-1 mb-5">
        {comment}
      </p>

      
    </div>
  )
}

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#6F4E37] dark:bg-[#a67b5b]"></div>
    </div>
  )
}

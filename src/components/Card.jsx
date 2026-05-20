export default function Card({ className = '', children }) {
  return (
    <div className={`rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft ${className}`}>
      {children}
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function BackNav({ to = '/projects', label = 'Back to Projects' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 
        text-text-muted text-label uppercase tracking-widest
        hover:text-primary transition-colors duration-200 
        mb-8 group"
    >
      <span className="material-symbols-outlined text-sm
        group-hover:-translate-x-1 transition-transform duration-200"
      >
        arrow_back
      </span>
      {label}
    </Link>
  )
}
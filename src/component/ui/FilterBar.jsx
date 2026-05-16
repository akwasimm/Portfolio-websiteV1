// src/components/ui/FilterBar.jsx
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Full Stack', value: 'fullstack' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex flex-wrap items-center gap-2 p-1 
        bg-surface-card rounded-full border border-border-dark"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onChange(filter.value)}
            className={`px-5 py-2 rounded-full text-label 
              uppercase tracking-widest font-bold
              transition-all duration-200
              ${
                active === filter.value
                  ? 'bg-primary text-on-primary shadow-neon-sm'
                  : 'text-text-muted border border-transparent hover:text-primary hover:border-primary/30'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
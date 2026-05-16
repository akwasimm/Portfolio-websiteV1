// src/components/ui/QuickInfoCard.jsx
export default function QuickInfoCard({ project }) {
  const rows = [
    { label: 'Project Type', value: project.type },
    { label: 'Status',       value: project.status },
    { label: 'Duration',     value: project.duration },
    { label: 'Role',         value: project.role },
    { label: 'Year',         value: project.year },
  ]

  return (
    <div className="bg-surface-dark border border-border-dark 
      rounded-lg p-7 relative overflow-hidden group h-fit"
    >
      {/* Corner Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 
        bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 
        group-hover:bg-primary/10 transition-all 
        pointer-events-none"
      />

      {/* Title */}
      <h3 className="text-label text-text-main uppercase 
        tracking-widest border-b border-border-dark pb-4 mb-6"
      >
        Quick Info
      </h3>

      {/* Rows */}
      <div className="space-y-5">
        {rows.map((row, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-label text-text-muted uppercase">
                {row.label}
              </span>
              <span className="text-body-sm text-primary font-medium">
                {row.value}
              </span>
            </div>
            {index < rows.length - 1 && (
              <div className="h-px bg-border-dark mt-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
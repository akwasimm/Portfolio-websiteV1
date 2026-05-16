// src/components/ui/StepCard.jsx
export default function StepCard({ number, title, description }) {
  return (
    <div className="flex gap-6 group">
      
      {/* Step Number */}
      <div className="text-4xl font-bold text-border-mid 
        group-hover:text-primary transition-colors 
        duration-200 shrink-0 w-12 leading-tight"
      >
        {number}
      </div>

      {/* Step Content */}
      <div className="flex-1 bg-surface-card/30 border 
        border-border-dark p-6 rounded-md
        group-hover:border-primary/50 
        transition-all duration-200"
      >
        <h4 className="text-body font-bold text-text-main mb-2">
          {title}
        </h4>
        <p className="text-body-sm text-text-subtle leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
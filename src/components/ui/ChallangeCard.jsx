// src/components/ui/ChallengeCard.jsx
export default function ChallengeCard({ icon, title, description }) {
  return (
    <div className="p-7 bg-surface-dark border-l-2 
      border-primary rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 text-primary">
        <span className="material-symbols-outlined text-xl">
          {icon}
        </span>
        <h4 className="text-body font-bold uppercase tracking-wide">
          {title}
        </h4>
      </div>

      {/* Description */}
      <p className="text-body-sm text-text-subtle leading-relaxed">
        {description}
      </p>
    </div>
  )
}
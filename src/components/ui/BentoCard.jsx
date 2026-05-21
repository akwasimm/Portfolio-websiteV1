// src/components/ui/BentoCard.jsx
import { useRef } from 'react'
import PillTag from './PillTag'

export default function BentoCard({ title, icon, skills, note, fullWidth }) {

  const cardRef = useRef(null)

  // Mouse tracking glow effect
  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.backgroundImage = `radial-gradient(400px circle at ${x}px ${y}px, rgba(13, 219, 242, 0.08), transparent 40%)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.backgroundImage = 'none'
    }
  }

  return (
    <section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-card flex flex-col ${
        fullWidth ? 'md:col-span-2' : ''
      }`}
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          {icon}
        </span>
        <h2 className="text-subtitle text-text-main font-semibold">
          {title}
        </h2>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border-mid/30 mb-6" />

      {/* Skills Pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <PillTag
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>

      {/* Optional Note */}
      {note && (
        <div className="mt-auto pt-5">
          <p className="text-body-sm italic text-text-muted opacity-80 
            border-l-2 border-primary/40 pl-3"
          >
            {note}
          </p>
        </div>
      )}
    </section>
  )
}
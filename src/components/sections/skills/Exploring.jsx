// src/components/sections/skills/Exploring.jsx
import PillTag from '../../ui/PillTag'
import skillsData from '../../../data/skills.json'

export default function Exploring() {
  return (
    <section className="relative">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 rounded-full bg-primary/10 
          border border-primary/20"
        >
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            rocket_launch
          </span>
        </div>
        <h2 className="text-title text-text-main font-bold">
          Currently Exploring
        </h2>
      </div>

      {/* Dashed Container */}
      <div className="bg-surface-card/50 border border-dashed 
        border-border-mid p-8 rounded-xl"
      >
        {/* Exploring Pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {skillsData.exploring.map((item) => (
            <PillTag
              key={item.name}
              name={item.name}
              icon={item.icon}
              variant="explore"
            />
          ))}
        </div>

        {/* Note */}
        <p className="text-body-sm text-text-muted max-w-xl">
          These are not yet in my stack but actively being learned through
          projects and specialized courses to expand my architectural capabilities.
        </p>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute -z-10 top-0 right-0 w-64 h-64 
        bg-primary/5 blur-[120px] rounded-full pointer-events-none"
      />
    </section>
  )
}
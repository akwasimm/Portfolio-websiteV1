// src/components/sections/home/TechDock.jsx
import personal from '../../../data/personal.json'

export default function TechDock() {
  return (
    <div className="w-full bg-surface-dark border-t border-border-dark 
      py-4 z-30"
    >
      <div className="max-w-container mx-auto px-6 lg:px-12 
        flex items-center justify-center md:justify-evenly 
        gap-6 md:gap-8 overflow-x-auto no-scrollbar"
      >
        {personal.techDock.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 text-text-muted 
              hover:text-primary transition-colors group 
              cursor-default shrink-0"
          >
            <span className="material-symbols-outlined text-xl 
              group-hover:drop-shadow-[0_0_8px_rgba(13,219,242,0.5)]"
            >
              {tech.icon}
            </span>
            <span className="hidden md:inline text-label-sm 
              uppercase tracking-widest font-bold"
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
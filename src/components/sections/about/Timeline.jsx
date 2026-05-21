// src/components/sections/about/Timeline.jsx
import timeline from '../../../data/timeline.json'

export default function Timeline() {
  return (
    <section className="mb-24">
      <h2 className="text-subtitle font-semibold text-text-main mb-12">
        Experience_Log
      </h2>

      {/* Timeline Container */}
      <div className="relative ml-4 md:ml-8 
        border-l border-border-mid/40 pl-8 space-y-12"
      >
        {timeline.map((item, index) => {
          const isActive = item.active
          const isFaded = !isActive

          // Opacity gets lower as index increases
          const opacityMap = [
            'opacity-100',
            'opacity-90',
            'opacity-70',
            'opacity-50',
            'opacity-40',
            'opacity-30',
          ]
          const opacity = opacityMap[index] || 'opacity-30'

          return (
            <div
              key={item.id}
              className={`relative transition-opacity duration-300 
                ${isFaded ? `${opacity} hover:opacity-100` : ''}`}
            >
              {/* Timeline Dot */}
              {isActive ? (
                /* Active → Large glowing dot */
                <div className="absolute -left-[41px] top-0 
                  w-[17px] h-[17px] bg-background-dark 
                  border-2 border-primary rounded-full z-10 
                  flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full 
                    pulse-dot shadow-neon-sm"
                  />
                </div>
              ) : (
                /* Inactive → Small muted dot */
                <div className="absolute -left-[37px] top-1 
                  w-[9px] h-[9px] bg-border-mid 
                  rounded-full z-10"
                />
              )}

              {/* Period Label + Active Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-primary text-body-sm">
                  {item.period}
                </span>
                {isActive && (
                  <span className="bg-accent-green/10 text-accent-green 
                    text-label-sm px-2 py-0.5 rounded-full 
                    border border-accent-green/20 font-bold uppercase"
                  >
                    Currently Active
                  </span>
                )}
              </div>

              {/* Title */}
              <h4 className="text-body-lg font-bold text-text-main mb-1">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-body-sm text-text-muted">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
// src/components/sections/about/Education.jsx
export default function Education() {
  return (
    <section className="mb-24">
      <h2 className="text-subtitle font-semibold text-text-main mb-8">
        Education
      </h2>

      <div className="glass-card p-7 max-w-3xl border 
        border-border-mid/40"
      >
        <div className="flex items-start gap-5">
          
          {/* Icon */}
          <div className="p-3 bg-primary/10 rounded-md 
            text-primary shrink-0"
          >
            <span className="material-symbols-outlined text-3xl">
              school
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-body-lg font-bold text-text-main mb-1">
              Bachelor of Technology
            </h3>
            <p className="text-body text-primary font-medium mb-1">
              Computer Science Engineering
            </p>
            <p className="text-body-sm text-text-muted font-mono mb-5">
              Silicon Valley Institute of Tech · 2020 - 2024
            </p>

            {/* Coursework Pills */}
            <div className="flex flex-wrap gap-2">
              {['DSA', 'DBMS', 'Machine Learning', 'OS', 'Networks'].map(
                (course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-surface-card 
                      border border-border-mid/30 
                      text-primary text-label-sm 
                      uppercase tracking-widest 
                      font-bold rounded-full"
                  >
                    {course}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// src/components/ui/ProjectNav.jsx
import { Link } from 'react-router-dom'
import projects from '../../data/projects.json'

export default function ProjectNav({ currentSlug }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === currentSlug
  )

  const prevProject = currentIndex > 0
    ? projects[currentIndex - 1]
    : null

  const nextProject = currentIndex < projects.length - 1
    ? projects[currentIndex + 1]
    : null

  return (
    <div className="border-t border-border-dark pt-12 mt-16
      flex justify-between items-start gap-4"
    >
      {/* Previous */}
      {prevProject ? (
        <Link
          to={`/projects/${prevProject.slug}`}
          className="group max-w-[45%]"
        >
          <div className="flex items-center gap-2 
            text-text-muted text-label uppercase tracking-widest 
            mb-2 group-hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm
              group-hover:-translate-x-1 transition-transform"
            >
              arrow_back
            </span>
            Previous Project
          </div>
          <div className="text-body-lg font-bold text-text-main 
            group-hover:text-primary transition-colors"
          >
            {prevProject.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next */}
      {nextProject ? (
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group max-w-[45%] text-right ml-auto"
        >
          <div className="flex items-center justify-end gap-2 
            text-text-muted text-label uppercase tracking-widest 
            mb-2 group-hover:text-primary transition-colors"
          >
            Next Project
            <span className="material-symbols-outlined text-sm
              group-hover:translate-x-1 transition-transform"
            >
              arrow_forward
            </span>
          </div>
          <div className="text-body-lg font-bold text-text-main 
            group-hover:text-primary transition-colors"
          >
            {nextProject.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
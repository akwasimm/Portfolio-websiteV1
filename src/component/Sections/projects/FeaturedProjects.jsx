// src/components/sections/projects/FeaturedProject.jsx
import { Link } from 'react-router-dom'

export default function FeaturedProject({ project }) {
  return (
    <div className="relative group rounded-xl bg-surface-dark 
      border border-primary/20 overflow-hidden flex flex-col 
      lg:flex-row mb-16
      shadow-neon
      hover:shadow-neon-md hover:border-primary/40 
      transition-all duration-300"
    >
      {/* Inner Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 
        bg-primary/10 blur-[100px] pointer-events-none"
      />

      {/* Left → Image */}
      <div className="lg:w-[55%] h-[240px] lg:h-auto overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover 
            grayscale-[0.2] group-hover:grayscale-0 
            transition-all duration-700 group-hover:scale-105"
        />
      </div>

      {/* Right → Details */}
      <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col 
        justify-center relative z-10"
      >
        {/* Featured Label */}
        <span className="text-label text-primary tracking-[0.3em] 
          mb-3 flex items-center gap-1"
        >
          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          FEATURED PROJECT
        </span>

        {/* Title */}
        <h2 className="text-title font-bold text-text-main 
          mb-3 leading-tight"
        >
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-body-sm text-text-muted mb-6 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-surface-card 
                text-primary text-label-sm font-bold 
                rounded font-mono border border-border-mid/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="btn-primary text-sm"
          >
            View Details
            <span className="material-symbols-outlined text-sm">
              north_east
            </span>
          </Link>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            GitHub
            <span className="material-symbols-outlined text-sm">
              north_east
            </span>
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              Live Demo
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
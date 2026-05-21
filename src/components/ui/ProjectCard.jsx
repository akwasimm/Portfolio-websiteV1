// src/components/ui/ProjectCard.jsx
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card flex flex-col group">
      
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover
            grayscale-[0.5] group-hover:grayscale-0
            transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Category Tag */}
        <span className="text-primary text-label-sm 
          uppercase tracking-widest font-bold mb-2"
        >
          {project.type}
        </span>

        {/* Title */}
        <h3 className="text-body-lg font-bold text-text-main mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body-sm text-text-muted mb-4 
          flex-1 leading-relaxed line-clamp-2"
        >
          {project.shortDescription}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-surface-card 
                text-primary text-label-sm font-bold 
                rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-primary 
              text-label uppercase font-bold
              hover:gap-2 transition-all duration-200"
          >
            Details
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-text-muted 
              text-label uppercase font-bold
              hover:text-primary transition-colors duration-200"
          >
            GitHub
            <span className="material-symbols-outlined text-sm">
              north_east
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
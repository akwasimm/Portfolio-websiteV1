// src/pages/Projects.jsx
import { useState } from 'react'
import SectionHeader from '../component/ui/SectionHeader'
import FilterBar from '../component/ui/FilterBar'
import FeaturedProject from '../component/Sections/projects/FeaturedProjects'
import ProjectCard from '../component/ui/ProjectCard'
import projects from '../data/projects.json'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const featuredProject = projects.find((p) => p.featured)

  const gridProjects = projects.filter((p) => {
    if (!p.featured) {
      if (activeFilter === 'all') return true
      return p.category === activeFilter
    }
    return false
  })

  return (
    <div className="max-w-container mx-auto px-6 lg:px-12 
      pt-28 pb-section"
    >
      {/* Page Header */}
      <SectionHeader
        title="Projects"
        subtitle="Things I have built, shipped, and learned from."
      />

      {/* Filter Bar */}
      <FilterBar
        active={activeFilter}
        onChange={setActiveFilter}
      />

      {/* Featured Project */}
      {featuredProject && (
        <FeaturedProject project={featuredProject} />
      )}

      {/* Projects Grid */}
      {gridProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-text-muted text-body">
            No projects found for this category.
          </p>
        </div>
      )}
    </div>
  )
}
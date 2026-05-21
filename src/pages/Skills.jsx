// src/pages/Skills.jsx
import SectionHeader from '../components/ui/SectionHeader'
import BentoCard from '../components/ui/BentoCard'
import Exploring from '../components/sections/skills/Exploring'
import skillsData from '../data/skills.json'

export default function Skills() {
  return (
    <div className="max-w-container mx-auto px-6 lg:px-12 
      pt-28 pb-section"
    >
      {/* Page Header */}
      <SectionHeader
        title="Skills & Tech Stack"
        subtitle="Specialized in architecting high-performance backend systems and end-to-end ML pipelines. I bridge the gap between complex data processing and scalable production APIs."
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {skillsData.categories.map((category) => (
          <BentoCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            note={category.note}
            fullWidth={category.fullWidth}
          />
        ))}
      </div>

      {/* Currently Exploring */}
      <Exploring />
    </div>
  )
}
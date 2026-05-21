// src/pages/About.jsx
import SectionHeader from '../components/ui/SectionHeader'
import Story from '../components/sections/about/Story'
import Education from '../components/sections/about/Education'
import Timeline from '../components/sections/about/Timeline'
import ResumeCTA from '../components/sections/about/ResumeCTA'

export default function About() {
  return (

    <div className="max-w-container mx-auto px-6 lg:px-12 
      pt-28 pb-section"
    >
      {/* Page Header */}
      <SectionHeader
        title="About Me"
        subtitle="Turning ideas into working products through backend engineering and AI development."
      />

      {/* Story */}
      <Story />

      {/* Education */}
      <Education />

      {/* Timeline */}
      <Timeline />

      {/* Resume CTA */}
      <ResumeCTA />
    </div>
  )
}
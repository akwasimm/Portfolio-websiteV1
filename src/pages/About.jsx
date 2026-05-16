// src/pages/About.jsx
import SectionHeader from '../component/ui/SectionHeader'
import Story from '../component/sections/about/Story'
import Education from '../component/sections/about/Education'
import Timeline from '../component/sections/about/Timeline'
import ResumeCTA from '../component/sections/about/ResumeCTA'

export default function About() {
  return (
    <div className="max-w-container mx-auto px-6 lg:px-12 
      pt-28 pb-section"
    >
      {/* Page Header */}
      <SectionHeader
        title="About Me"
        subtitle="Fresh graduate who builds things that actually work — backend first, always."
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
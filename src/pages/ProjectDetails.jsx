// src/pages/ProjectDetail.jsx
import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import BackNav from '../component/ui/BackNav'
import QuickInfoCard from '../component/ui/QuickInfoCard'
import StepCard from '../component/ui/StepCard'
import ChallengeCard from '../component/ui/ChallangeCard'
import ProjectNav from '../component/ui/ProjectNav'
import SectionHeader from '../component/ui/SectionHeader'
import projects from '../data/projects.json'

export default function ProjectDetail() {
  const { id } = useParams()

  const project = projects.find((p) => p.slug === id)

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // If project not found redirect to projects page
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="cyber-grid min-h-screen">
      <div className="max-w-container mx-auto px-6 lg:px-12 
        pt-24 pb-section"
      >

        {/* ── SECTION 1 → Header ── */}
        <section className="mb-10">
          <BackNav />

          {/* Title + Buttons Row */}
          <div className="flex flex-col md:flex-row 
            md:items-start justify-between gap-6 mb-6"
          >
            {/* Title */}
            <h1 className="text-title md:text-display-sm 
              font-bold text-text-main max-w-2xl leading-tight"
            >
              {project.title}
            </h1>

            {/* Action Buttons */}
            <div className="flex gap-3 shrink-0">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
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
                  className="btn-primary"
                >
                  Live Demo
                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Animated Divider */}
          <div className="h-[3px] w-full bg-primary/20 
            mb-6 overflow-hidden rounded-full"
          >
            <div className="h-full bg-primary w-1/4 
              animate-slide rounded-full"
            />
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 border border-border-mid 
                  bg-surface-card/50 text-label text-primary 
                  rounded-full font-bold uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── SECTION 2 → Banner Image ── */}
        <section className="mb-16">
          <div className="w-full h-[300px] md:h-[420px] 
            rounded-xl overflow-hidden border border-border-dark 
            shadow-neon"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover 
                grayscale-[0.2] hover:grayscale-0 
                transition-all duration-700"
            />
          </div>
        </section>

        {/* ── SECTION 3 → Overview + Quick Info ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] 
          gap-12 mb-16"
        >
          {/* Overview */}
          <div className="space-y-5">
            <SectionHeader title="Overview" variant="detail" />
            <p className="text-body text-text-subtle leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Quick Info */}
          <QuickInfoCard project={project} />
        </section>

        {/* ── SECTION 4 → How I Built It ── */}
        <section className="mb-16">
          <SectionHeader title="How I Built It" variant="detail" />
          <div className="flex flex-col gap-4 mt-8">
            {project.steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        {/* ── SECTION 5 → Challenges & Solutions ── */}
        <section className="mb-16">
          <SectionHeader
            title="Challenges & Solutions"
            variant="detail"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 
            gap-6 mt-8"
          >
            {project.challenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
              />
            ))}
          </div>
        </section>

        {/* ── SECTION 6 → What I Learned ── */}
        <section className="mb-16 text-center">
          <SectionHeader title="What I Learned" variant="detail" />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {project.learnings.map((item) => (
              <div
                key={item}
                className="px-5 py-3 border border-primary/20 
                  bg-primary/5 rounded-xl text-primary 
                  text-label uppercase tracking-widest font-bold
                  hover:border-primary transition-all 
                  duration-200 cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7 → Project Navigation ── */}
        <ProjectNav currentSlug={project.slug} />

      </div>
    </div>
  )
}
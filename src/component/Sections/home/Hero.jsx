// src/components/sections/home/Hero.jsx
import { Link } from 'react-router-dom'
import personal from '../../../data/personal.json'

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row 
      items-center justify-center max-w-container mx-auto 
      px-6 lg:px-12 pt-20 pb-24 lg:pb-32 relative z-10"
    >
      {/* Left Column */}
      <div className="w-full lg:w-3/5 flex flex-col items-start gap-5 z-20">
        
        {/* Greeting */}
        <span className="text-primary text-body-sm font-mono tracking-wide">
          {personal.greeting}
        </span>

        {/* Name + Role */}
        <div className="flex flex-col gap-1">
          <h1 className="text-text-main text-4xl md:text-5xl lg:text-[4.5rem] 
            font-bold leading-tight tracking-tight"
          >
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold 
            gradient-text leading-tight pb-1"
          >
            {personal.role}
          </h2>
        </div>

        {/* Pitch */}
        <p className="text-text-muted text-body md:text-body-lg max-w-xl leading-relaxed">
          {personal.pitch}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-3">
          <Link to="/projects" className="btn-primary">
            View Projects
            <span className="material-symbols-outlined text-sm">north_east</span>
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact Me
            <span className="material-symbols-outlined text-sm">mail</span>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-2/5 flex justify-center 
        lg:justify-end mt-12 lg:mt-0 relative"
      >
        <div className="relative w-56 h-72 md:w-72 md:h-[360px] 
          z-20 rounded-lg overflow-hidden border border-border-dark 
          bg-surface-dark group"
        >
          {/* Glow Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 w-56 h-56 bg-primary rounded-full 
            blur-[100px] opacity-20 pointer-events-none 
            group-hover:opacity-30 transition-opacity duration-500 z-0"
          />

          {/* Portrait Image */}
          <img
            src="public\images\profile.jpeg"
            alt={personal.name}
            className="absolute inset-0 w-full h-full 
              object-cover object-top z-10"
          />

          {/* Inner Border Overlay */}
          <div className="absolute inset-0 border border-border-dark 
            z-20 pointer-events-none rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
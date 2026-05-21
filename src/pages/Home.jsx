// src/pages/Home.jsx
import Hero from '../components/sections/home/Hero'
import TechDock from '../components/sections/home/TechDock'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* Hero takes available space */}
      <div className="flex-1 flex items-center">
        <Hero />
      </div>

      {/* Tech Dock pinned at bottom */}
      <TechDock />
    </div>
  )
}
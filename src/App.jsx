import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Abstract from './components/Abstract'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection } from './hooks'

const SECTIONS = ['abstract', 'tech-stack', 'projects', 'education', 'experience', 'certifications', 'achievements', 'publications', 'contact']

function App() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container flex flex-col md:flex-row min-h-screen">
      <Sidebar activeSection={activeSection} />
      <Topbar />
      <main className="w-full md:ml-[280px] pt-[93px] md:pt-[133px] pb-12 px-4 md:px-12 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[968px] flex flex-col gap-8 md:gap-[80px]">
          <Abstract />
          <TechStack />
          <Projects />
          <Education />
          <Experience />
          <Certifications />
          <Achievements />
          <Publications />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App

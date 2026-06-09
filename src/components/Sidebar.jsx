import profileImg from '../assets/profile.jpeg'

const NAV_ITEMS = [
  { id: 'abstract', icon: 'description', label: 'Abstract' },
  { id: 'experience', icon: 'work', label: 'Experience' },
  { id: 'achievements', icon: 'emoji_events', label: 'Achievements' },
  { id: 'tech-stack', icon: 'terminal', label: 'Technical Stack' },
  { id: 'contact', icon: 'mail', label: 'Contact' },
]

export default function Sidebar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed left-0 top-0 h-screen w-[280px] bg-surface text-primary border-r border-outline-variant flex-col items-center py-12 px-5 hidden md:flex z-40">
      <div className="mb-12 w-full flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border border-outline-variant">
          <img
            src={profileImg}
            alt="Wasim Akhter"
            className="w-full h-full object-cover object-[center_25%] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <h2 className="text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary text-center">Wasim Akhter</h2>
        <p className="text-[14px] leading-[1.5] text-on-surface-variant mt-1 text-center">Full Stack Developer</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1 text-[14px] font-medium leading-[1.5]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-1.5 text-left transition-colors duration-200 cursor-pointer border-none bg-transparent text-[14px] font-medium leading-[1.5] ${
                  activeSection === item.id
                    ? 'text-primary font-semibold border-r-2 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant flex flex-col gap-4">
        <a
          href="/resume.pdf"
          download
          className="w-full block bg-primary text-on-primary text-[14px] leading-[1.5] font-semibold py-3 px-4 border border-primary hover:opacity-80 transition-opacity duration-200 text-center no-underline"
        >
          Download CV
        </a>
        <button
          onClick={() => scrollTo('contact')}
          className="w-full flex items-center gap-3 px-3 py-1.5 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 cursor-pointer bg-transparent border-none text-[14px] font-medium leading-[1.5]"
        >
          <span className="material-symbols-outlined text-[20px]">mail</span>
          Contact Me
        </button>
      </div>
    </nav>
  )
}

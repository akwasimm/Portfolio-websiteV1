import { useState } from 'react'
import { useNavbarBlur } from '../hooks'

const NAV_LINKS = [
  { label: '.about()', target: 'about' },
  { label: '.skills()', target: 'skills' },
  { label: '.projects()', target: 'projects' },
  { label: '.experience()', target: 'experience' },
  { label: '.contact()', target: 'contact' },
]

export default function Navbar() {
  const scrolled = useNavbarBlur()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? 'glass-strong'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-sm md:text-base text-accent hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        >
          <span className="text-muted">~/</span>alex_chen
          <span className="text-accent">_</span>
          <span className="inline-block w-[3px] h-4 bg-accent ml-0.5 animate-[blink_1s_step-end_infinite]" />
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="font-mono text-xs text-muted-light hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 text-xs font-mono text-accent border border-accent/40 rounded-full hover:bg-accent/10 hover:border-accent transition-all duration-200 no-underline"
          >
            resume.pdf
          </a>
        </div>

        <button
          className="md:hidden font-mono text-xs text-muted-light bg-transparent border border-border rounded px-3 py-1.5 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'close()' : 'menu()'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 glass rounded-lg p-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="font-mono text-xs text-muted-light hover:text-accent transition-colors text-left bg-transparent border-none px-2 py-2 rounded hover:bg-dark-card cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-3 py-2 text-xs font-mono text-accent border border-accent/40 rounded-md hover:bg-accent/10 transition-all duration-200 no-underline text-center"
          >
            resume.pdf
          </a>
        </div>
      )}
    </nav>
  )
}

import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'abstract', label: 'Abstract' },
  { id: 'tech-stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Email', href: 'mailto:wasim@example.com' },
]

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] z-50 bg-surface text-primary border-b border-outline-variant md:ml-[280px]">
      <div className="flex items-center justify-between h-[77px] px-4 md:px-8">
        <button
          className="md:hidden p-2 text-on-surface-variant cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>

        <div className="hidden md:block">
          <div className="text-[20px] font-bold leading-[1.2] text-primary">Wasim Akhter</div>
          <div className="text-[12px] leading-[1.5] text-on-surface-variant">Full-stack Developer</div>
        </div>

        <div className="text-[18px] font-semibold leading-[1.3] text-primary md:hidden">Wasim Akhter</div>

        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[14px] leading-[1.4] tracking-[0.05em] text-on-surface-variant underline-offset-4 hover:underline hover:text-secondary hover:font-bold transition-all no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-surface border border-outline-variant text-primary text-[13px] leading-[1.5] py-1.5 px-4 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer font-mono"
          >
            Contact
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant p-4 flex flex-col gap-1 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer bg-transparent border-none text-[14px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

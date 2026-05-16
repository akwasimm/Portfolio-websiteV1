// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-16 flex items-center 
        justify-between px-6 lg:px-12 backdrop-blur-md transition-all 
        duration-300 ${
          scrolled
            ? 'border-b border-border-dark bg-background-dark/85 shadow-neon'
            : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-5 h-5 text-primary">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="text-text-main text-xl font-bold tracking-tight">
          &lt;RS/&gt;
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`nav-link ${
              location.pathname === link.path ? 'nav-link-active' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Resume Button + Mobile Toggle */}
      <div className="flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume hidden md:flex"
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-16 left-0 w-full 
            bg-background-dark/95 backdrop-blur-lg 
            border-b border-border-dark
            flex flex-col items-center gap-6 py-8 
            md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-base ${
                location.pathname === link.path ? 'nav-link-active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
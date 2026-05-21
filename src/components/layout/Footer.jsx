// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'code',
    url: 'https://github.com/akwasimm',
  },
  {
    name: 'LinkedIn',
    icon: 'link',
    url: 'https://www.linkedin.com/in/akhterwasim',
  },
  {
    name: 'LeetCode',
    icon: 'terminal',
    url: 'https://leetcode.com/akwasim',
  },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-dark bg-background-dark">
      {/* Main Footer */}
      <div className="max-w-container mx-auto px-6 lg:px-12 py-12">
        <div
          className="flex flex-col md:flex-row justify-between 
            items-center gap-8"
        >
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-primary text-2xl font-bold">
              &lt;WASIM/&gt;
            </Link>
            <p className="text-label text-text-muted uppercase mt-1">
              Backend & ML Engineer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-label text-text-muted uppercase 
                  hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center 
                  border border-border-dark rounded-md
                  text-text-muted
                  hover:border-primary hover:text-primary 
                  transition-all duration-200"
                title={social.name}
              >
                <span className="material-symbols-outlined text-lg">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border-dark py-6">
        <p className="text-center text-label-sm text-text-muted tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Wasim Akhter. Designed & Built by WASIM
        </p>
      </div>
    </footer>
  )
}
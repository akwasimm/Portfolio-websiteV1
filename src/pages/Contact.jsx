// src/pages/Contact.jsx
import SectionHeader from '../components/ui/SectionHeader'
import ContactForm from '../components/sections/contact/ContactForm'
import personal from '../data/personal.json'

const contactItems = [
  {
    icon: 'mail',
    label: 'Email',
    value: personal.email,
    link: `mailto:${personal.email}`,
  },
  {
    icon: 'link',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    link: personal.linkedin,
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: 'github.com/yourname',
    link: personal.github,
  },
  {
    icon: 'terminal',
    label: 'LeetCode',
    value: 'leetcode.com/yourname',
    link: personal.leetcode,
  },
]

export default function Contact() {
  return (
    <div className="max-w-container mx-auto px-6 lg:px-12 
      pt-28 pb-section"
    >
      {/* Page Header */}
      <SectionHeader
        title="Contact"
        subtitle="Have an opportunity or just want to say hello? My inbox is always open."
      />

      {/* Availability Badge */}
      <div className="mb-12">
        <div className="inline-flex items-center px-4 py-2 
          border border-primary/30 bg-primary/5 rounded-full"
        >
          <span className="active-dot text-body-sm 
            font-medium text-primary"
          >
            Open to Backend & ML Opportunities
          </span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] 
        gap-10 lg:gap-14"
      >

        {/* Left Column → Info */}
        <div className="space-y-7">

          {/* Get In Touch */}
          <div>
            <h2 className="text-label text-primary mb-4 
              uppercase tracking-widest"
            >
              Get In Touch
            </h2>
            <p className="text-body text-text-subtle leading-relaxed">
              I am currently looking for backend and machine learning
              internships and full time roles. Whether you have a project,
              an opportunity, or just want to connect — feel free
              to reach out.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target={item.label === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-card"
              >
                {/* Icon */}
                <div className="bg-primary/10 p-3 rounded-md 
                  text-primary shrink-0 group-hover:bg-primary 
                  group-hover:text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <div className="text-label-sm text-text-muted 
                    uppercase tracking-widest"
                  >
                    {item.label}
                  </div>
                  <div className="text-body-sm text-text-main 
                    font-medium"
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column → Form */}
        <ContactForm />
      </div>
    </div>
  )
}
// src/components/sections/about/ResumeCTA.jsx
export default function ResumeCTA() {
  return (
    <section className="relative bg-surface-card py-14 px-8 
      rounded-xl border border-border-dark overflow-hidden text-center"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-56 h-56 
        bg-primary/5 blur-[100px] rounded-full pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 w-56 h-56 
        bg-primary/5 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-title font-bold text-text-main mb-7">
          Want to know more about my work?
        </h2>

        <a
          href="public/Wasim_Fulltime.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mx-auto w-fit mb-6"
        >
          Download My Resume
          <span className="material-symbols-outlined text-sm">
            download
          </span>
        </a>

        <p className="text-body-sm text-text-muted mt-6">
          Or reach me directly at{' '}
          <a
            href="mailto:akhterwasim797@gmail.com"
            className="text-primary underline decoration-primary/30 
              underline-offset-4 hover:decoration-primary 
              transition-all"
          >
            Akhterwasim797@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
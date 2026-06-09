export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low px-4 md:px-12 mt-8 md:mt-[80px]">
      <div className="max-w-[968px] mx-auto w-full py-8 md:py-12 flex flex-col items-center gap-2">
        <div className="flex gap-4 font-mono text-[11px] leading-[1.4] tracking-[0.05em] text-on-surface-variant">
          <a href="#" className="underline-offset-4 hover:underline hover:text-secondary transition-colors no-underline">LinkedIn</a>
          <a href="#" className="underline-offset-4 hover:underline hover:text-secondary transition-colors no-underline">GitHub</a>
          <a href="#" className="underline-offset-4 hover:underline hover:text-secondary transition-colors no-underline">Email</a>
        </div>
        <p className="font-mono text-[11px] leading-[1.4] tracking-[0.05em] text-on-surface-variant mt-2">
          © 2026 Wasim Akhter. Built with passion, code, and continuous learning.
        </p>
      </div>
    </footer>
  )
}

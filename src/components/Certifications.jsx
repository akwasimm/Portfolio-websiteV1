export default function Certifications() {
  const certs = [
    { icon: 'H', title: 'HackerRank Certified', sub: 'Advanced SQL' }
  ]

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="certifications">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">06.</span>
          Certifications
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.title} className="border border-outline-variant p-4 text-center flex flex-col items-center justify-center bg-surface">
            <span className="material-symbols-outlined text-[32px] text-outline mb-2">{c.icon}</span>
            <div className="font-mono text-[13px] font-medium leading-[1.5] text-primary">{c.title}</div>
            <div className="font-mono text-[11px] leading-[1.4] tracking-[0.05em] text-on-surface-variant">{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

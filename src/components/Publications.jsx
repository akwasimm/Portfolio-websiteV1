export default function Publications() {
  const pubs = [
    {
      authors: (
        <>
          <span className="text-primary font-bold">Doe, J.</span>, Smith, A., &amp; Lee, K. (2023).
        </>
      ),
      title: 'Efficient Routing in Mixture-of-Experts Architectures.',
      journal: 'Journal of Machine Learning Research (JMLR), 24(1), 112-145.',
    },
    {
      authors: (
        <>
          <span className="text-primary font-bold">Doe, J.</span>, &amp; Turing, A. (2021).
        </>
      ),
      title: 'Decentralized Gradient Descent with Asynchronous Updates.',
      journal: 'Conference on Neural Information Processing Systems (NeurIPS).',
    },
  ]

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="publications">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">08.</span>
          Open Source / Publications
        </h2>
      </header>
      <div className="space-y-4 text-[14px] leading-[1.5] text-on-surface-variant">
        {pubs.map((pub, idx) => (
          <div key={idx} className="p-4 border border-outline-variant bg-surface-container-low group hover:bg-surface transition-colors cursor-pointer">
            <div className="mb-2">
              {pub.authors}{' '}
              <span className="text-secondary cursor-pointer border-b border-transparent group-hover:border-secondary transition-colors">
                &ldquo;{pub.title}&rdquo;
              </span>{' '}
              <em>{pub.journal}</em>
            </div>
            <div className="flex gap-4 font-mono text-[11px] leading-[1.4] tracking-[0.05em] uppercase text-outline">
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 no-underline">
                <span className="material-symbols-outlined text-[14px]">link</span> PDF
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 no-underline">
                <span className="material-symbols-outlined text-[14px]">code</span> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

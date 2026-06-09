export default function Projects() {
  const projects = [
    {
      title: 'Distributed LLM Inference',
      icon: 'hub',
      desc: 'Architected a custom inference engine using C++ and CUDA to serve billion-parameter models across multi-GPU setups with dynamic batching.',
      tags: ['CUDA', 'C++', 'gRPC'],
      live: '#',
      github: '#',
    },
    {
      title: 'Federated Learning Sandbox',
      icon: 'security',
      desc: 'An open-source platform for simulating secure, privacy-preserving machine learning training protocols across hundreds of edge nodes.',
      tags: ['Python', 'PySyft'],
      live: null,
      github: '#',
    },
    {
      title: 'Neural Network Quantizer',
      icon: 'compress',
      desc: 'A toolkit for post-training quantization and pruning of vision models, achieving 4x memory reduction with <1% accuracy drop.',
      tags: ['PyTorch', 'ONNX'],
      live: '#',
      github: null,
    },
  ]

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="projects">
      <header className="mb-6 border-b border-outline-variant pb-2 flex justify-between items-end">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">03.</span>
          Projects
        </h2>
        <span className="font-mono text-[11px] leading-[1.4] tracking-[0.05em] text-outline uppercase">Scroll →</span>
      </header>
      <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
        {projects.map((p) => (
          <div
            key={p.title}
            className="min-w-[260px] md:min-w-[400px] border border-outline-variant p-4 md:p-6 bg-surface snap-start hover:bg-surface-container-low transition-colors duration-200 cursor-pointer flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[18px] font-semibold leading-[1.4] text-primary">{p.title}</h3>
              <span className="material-symbols-outlined text-outline">{p.icon}</span>
            </div>
            <p className="text-[14px] leading-[1.5] text-on-surface-variant mb-4 flex-1">
              {p.desc}
            </p>
            <div className="flex items-center gap-3 mb-3">
              {p.live ? (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary font-mono text-[11px] leading-[1.4] tracking-[0.05em] font-semibold py-1.5 px-3 border border-primary hover:opacity-80 transition-opacity no-underline"
                >
                  Live
                </a>
              ) : (
                <span className="bg-surface border border-outline-variant text-on-surface-variant font-mono text-[11px] leading-[1.4] tracking-[0.05em] py-1.5 px-3 cursor-default">Live</span>
              )}
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-outline-variant text-primary font-mono text-[11px] leading-[1.4] tracking-[0.05em] py-1.5 px-3 hover:bg-surface-container-low transition-colors no-underline"
                >
                  GitHub
                </a>
              ) : (
                <span className="bg-surface border border-outline-variant text-on-surface-variant font-mono text-[11px] leading-[1.4] tracking-[0.05em] py-1.5 px-3 cursor-default">GitHub</span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-surface-container-high border border-outline-variant font-mono text-[11px] leading-[1.4] tracking-[0.05em] text-on-surface"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function TechStack() {
  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="tech-stack">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">02.</span>
          Technical Stack
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-[18px] font-semibold leading-[1.4] text-primary mb-4">Core Languages</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>Python</span>
                <span>95%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '95%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>C++</span>
                <span>80%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '80%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>Rust</span>
                <span>65%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[18px] font-semibold leading-[1.4] text-primary mb-4">ML Frameworks</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>PyTorch</span>
                <span>90%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>JAX</span>
                <span>75%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[13px] font-medium leading-[1.5] text-on-surface-variant mb-1">
                <span>TensorRT</span>
                <span>70%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

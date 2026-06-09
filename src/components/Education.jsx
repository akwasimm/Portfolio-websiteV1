export default function Education() {
  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="education">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">
            04.
          </span>
          Education
        </h2>
      </header>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
          <div className="w-32 font-mono text-[13px] font-medium leading-[1.5] text-outline shrink-0">
            2022-2026
          </div>
          <div>
            <h3 className="text-[18px] font-semibold leading-[1.4] text-primary">
              B.Tech in Computer Science & Engineering
            </h3>

            <div className="text-[14px] leading-[1.5] text-on-surface-variant mb-2">
              Greater Noida Institute of Technology, AKTU (CGPA: 7.5/10)
            </div>

            <p className="text-[14px] leading-[1.5] text-on-surface-variant">
              Focused on Software Development, Data Science, Machine Learning,
              Artificial Intelligence, and Data Structures & Algorithms.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 border-t border-surface-container-high pt-6">
          <div className="w-32 font-mono text-[13px] font-medium leading-[1.5] text-outline shrink-0">
            2019 — 2021
          </div>
          <div>
            <h3 className="text-[18px] font-semibold leading-[1.4] text-primary">
             Intermediate in Science
            </h3>
            <div className="text-[14px] leading-[1.5] text-on-surface-variant mb-2">
             Urdu College , Gopalganj (Percentage: 78.9%)
            </div>
            <p className="text-[14px] leading-[1.5] text-on-surface-variant">
              Focused on Physics, Chemistry, Mathematics, and Computer Science.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 border-t border-surface-container-high pt-6">
          <div className="w-32 font-mono text-[13px] font-medium leading-[1.5] text-outline shrink-0">
            2018 — 2019
          </div>
          <div>
            <h3 className="text-[18px] font-semibold leading-[1.4] text-primary">
             Matriculation (10th Grade)
            </h3>
            <div className="text-[14px] leading-[1.5] text-on-surface-variant mb-2">
             S.S Public School , Gopalganj (Percentage: 75.2%)
            </div>
            <p className="text-[14px] leading-[1.5] text-on-surface-variant">
              Focused on foundational subjects including Mathematics, Science, Social Studies, and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Experience() {
  const experiences = [
    {
      period: "2025 — Present",
      role: "Personal Projects & Independent Development",
      company: "Self-Directed Learning",
      points: [
        "Built full-stack web applications using Python, Flask, React, and SQL.",
        "Developed machine learning and data analysis projects using Pandas, NumPy, Matplotlib, and Scikit-learn.",
        "Solved data structures and algorithms problems regularly to strengthen problem-solving skills.",
      ],
    },
  ];

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="experience">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">
            05.
          </span>
          Experience
        </h2>
      </header>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={
              idx === 0
                ? "relative pl-6 md:pl-0"
                : "relative pl-6 md:pl-0 border-t border-surface-container-high pt-12"
            }
          >
            {idx < experiences.length - 1 && (
              <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-outline-variant md:hidden" />
            )}
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <div
                className={`w-32 font-mono text-[13px] font-medium leading-[1.5] shrink-0 relative ${idx === 0 ? "text-primary" : "text-outline"}`}
              >
                <span
                  className={`absolute -left-[29px] top-1.5 w-2 h-2 rounded-full md:hidden ${idx === 0 ? "bg-primary" : "bg-outline-variant"}`}
                />
                {exp.period}
              </div>
              <div>
                <h3 className="text-[18px] font-semibold leading-[1.4] text-primary">
                  {exp.role}
                </h3>
                <div className="text-[14px] leading-[1.5] text-on-surface-variant mb-3">
                  {exp.company}
                </div>
                <ul className="list-disc list-inside text-[14px] leading-[1.5] text-on-surface-variant space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

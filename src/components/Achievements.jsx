export default function Achievements() {
  const items = [
    { icon: 'emoji_events', text: <><strong>Leetcode top 20%</strong> Solved more than 400+ leetcode problems and have leetcode ratingg 1611 (Present).</> },
    { icon: 'emoji_events', text: <><strong>Top 10% Ranked Contributor</strong> on Kaggle (Competitions Tier), specifically in Natural Language Processing challenges.</> },
    { icon: 'military_tech', text: <><strong>Chess tournament-winner</strong> Won intercollege chess tournament.</> },
     { icon: 'military_tech', text: <><strong>Bgmi - Runner up</strong> Participated in the Bgmi tournament in My College.</> },
  ]

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="achievements">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">07.</span>
          Achievements
        </h2>
      </header>
      <ul className="text-[14px] leading-[1.5] text-on-surface-variant space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[16px] mt-0.5 text-primary">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

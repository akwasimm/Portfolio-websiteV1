// src/components/ui/SectionHeader.jsx
export default function SectionHeader({ title, subtitle, variant = "default" }) {

  // variant "default" → About, Skills, Projects, Contact pages
  // variant "detail"  → Project Detail page (accent line + uppercase)

  if (variant === "detail") {
    return (
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-primary" />
        <h2 className="text-title text-primary uppercase tracking-wider">
          {title}
        </h2>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <h1 className="text-display-sm md:text-display text-text-main font-bold mb-4">
        {title}
      </h1>
      <div className="section-divider" />
      {subtitle && (
        <p className="text-body-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
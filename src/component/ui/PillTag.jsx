// src/components/ui/PillTag.jsx
export default function PillTag({ name, icon, variant = "default" }) {

  const baseClass = variant === "explore" ? "pill-explore" : "pill"

  return (
    <span className={baseClass}>
      {icon && (
        <span className="material-symbols-outlined text-sm">
          {icon}
        </span>
      )}
      {name}
    </span>
  )
}
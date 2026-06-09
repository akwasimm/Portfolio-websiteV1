import { useTypingAnimation } from '../hooks'

const ROLES = [
  'Full Stack Developer',
  'ML Engineer',
  'Data Analyst',
  'Backend Developer',
  'Python Developer',
]

export default function Hero() {
  const typedRole = useTypingAnimation(ROLES, 90, 50, 2000)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass rounded-xl overflow-hidden border border-border">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-muted ml-3">portfolio — bash — 80x24</span>
          </div>

          <div className="p-6 md:p-10">
            <div className="font-mono text-sm text-muted-light mb-6">
              <span className="text-accent">➜</span>{' '}
              <span className="text-blue-400">~/portfolio</span>{' '}
              <span className="text-muted">cat intro.txt</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 font-sans">
              Alex Chen
            </h1>

            <div className="font-mono text-lg md:text-xl text-accent h-8 mb-4">
              <span>{typedRole}</span>
              <span className="inline-block w-[2px] h-5 bg-accent ml-0.5 animate-[blink_1s_step-end_infinite]" />
            </div>

            <p className="font-sans text-muted-light text-sm md:text-base leading-relaxed max-w-lg mb-8">
              Building robust backend systems, training intelligent models, and crafting
              meaningful data stories. Code is my craft.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="font-mono text-sm px-5 py-2.5 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all duration-200 cursor-pointer"
              >
                → view_projects()
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="font-mono text-sm px-5 py-2.5 rounded-lg bg-transparent text-muted-light border border-border hover:text-white hover:border-muted transition-all duration-200 cursor-pointer"
              >
                → init_contact()
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

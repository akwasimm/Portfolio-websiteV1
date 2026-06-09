import { useScrollObserver } from '../hooks'

const PERSONAL_INFO = {
  name: 'Wasim Akhter',
  location: 'Greater Noida , UP',
  education: 'B.Tech Computer Science , GNIOT',
  languages: ['Python', 'JavaScript', 'SQL',],
  interests: ['Backend Architecture', 'Machine Learning', 'Data Engineering', 'System Design'],
  currently_learning: 'Docker , Kubernetes and Machine Learning',
  fun_fact: 'I built a personal website using React and Tailwind CSS to showcase my projects and blog posts.',
}

function SyntaxJSON({ data }) {
  const entries = Object.entries(data)

  return (
    <pre className="font-mono text-sm leading-relaxed">
      <span className="json-bracket">{'{'}</span>
      {entries.map(([key, value], i) => (
        <div key={key} className="ml-4">
          <span className="json-key">"{key}"</span>
          <span className="json-colon">: </span>
          {Array.isArray(value) ? (
            <>
              <span className="json-bracket">[</span>
              <span className="json-string">
                "{value.join('", "')}"
              </span>
              <span className="json-bracket">]</span>
            </>
          ) : typeof value === 'string' ? (
            <span className="json-string">"{value}"</span>
          ) : (
            <span className="json-number">{value}</span>
          )}
          {i < entries.length - 1 && <span className="json-comma">,</span>}
        </div>
      ))}
      <span className="json-bracket">{'}'}</span>
    </pre>
  )
}

export default function About() {
  const visibleSections = useScrollObserver()
  const isVisible = visibleSections['about']

  return (
    <section
      id="about"
      data-section="about"
      className={`relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-muted">01.</span>
        <h2 className="font-mono text-lg md:text-xl text-white font-semibold">about.json</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <div className="glass rounded-xl p-5 md:p-6 overflow-x-auto">
            <SyntaxJSON data={PERSONAL_INFO} />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 text-sm md:text-base text-muted-light leading-relaxed font-sans">
          <p>
            I'm a passionate Software Developer and aspiring Data Scientist who enjoys building real-world applications that solve meaningful problems. My interests span Full Stack Development, Artificial Intelligence, Machine Learning, and Data Analytics, and I'm constantly exploring new technologies to expand my skill set.
          </p>
          <p>
            My journey began with Python programming and web development, gradually evolving into data science, machine learning, and AI-powered applications. I enjoy transforming ideas into functional products, whether it's developing intelligent career guidance platforms, job discovery systems, analytics dashboards, or automation tools.
          </p>
          <p>
            Beyond coding, I'm focused on continuous learning through projects, problem-solving, and technical content creation. I actively work on improving my development skills, data science expertise, and software engineering fundamentals while preparing for a career in technology. My goal is to build impactful products, contribute to innovative solutions, and grow into a versatile engineer capable of bridging software development and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}

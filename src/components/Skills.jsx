import { useScrollObserver } from '../hooks'

const PIPELINE = [
  {
    stage: 'INGEST',
    subtitle: 'Languages & Core',
    tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Go', 'REST APIs', 'WebSockets'],
  },
  {
    stage: 'PROCESS',
    subtitle: 'Data & Pipelines',
    tags: ['Pandas', 'NumPy', 'Apache Spark', 'Airflow', 'Kafka', 'PostgreSQL'],
  },
  {
    stage: 'ANALYZE',
    subtitle: 'ML & AI',
    tags: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Jupyter', 'LangChain', 'NLP'],
  },
  {
    stage: 'VISUALIZE',
    subtitle: 'Dashboards & Reports',
    tags: ['Matplotlib', 'Plotly', 'Tableau', 'D3.js', 'Streamlit', 'Grafana'],
  },
  {
    stage: 'DEPLOY',
    subtitle: 'DevOps & Cloud',
    tags: ['Docker', 'AWS', 'FastAPI', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
]

export default function Skills() {
  const visibleSections = useScrollObserver()
  const isVisible = visibleSections['skills']

  return (
    <section
      id="skills"
      data-section="skills"
      className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-muted">02.</span>
        <h2 className="font-mono text-lg md:text-xl text-white font-semibold">skill_pipeline</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="relative pl-8">
        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent/60 via-accent/30 to-accent/10" />

        {PIPELINE.map((item) => (
          <div key={item.stage} className="relative mb-8 last:mb-0">
            <div className="card-hover glass rounded-xl p-5 ml-4 border-border">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent shrink-0 mt-1.5 shadow-[0_0_8px_rgba(0,255,136,0.4)]" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs font-bold text-accent tracking-widest">
                      {item.stage}
                    </span>
                    <span className="font-mono text-xs text-muted">|</span>
                    <span className="font-mono text-xs text-muted">{item.subtitle}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md border border-border text-muted-light bg-dark-card hover:border-accent/30 hover:text-accent transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-muted mt-10 text-center">
        <span className="text-accent">data_in</span> → ingest → process → analyze →
        visualize → deploy{' '}
        <span className="text-accent">🚀</span>
      </p>
    </section>
  )
}

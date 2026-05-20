// src/components/sections/about/Story.jsx
export default function Story() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[40%_60%] 
      gap-12 items-start mb-24"
    >
      {/* Left → Photo */}
      <div className="relative group w-fit">
        {/* Glow behind image */}
        <div className="absolute -inset-1 bg-primary/20 blur 
          opacity-30 group-hover:opacity-70 
          transition duration-700 rounded-lg"
        />

        {/* Image Frame */}
        <div className="relative w-64 h-80 md:w-72 md:h-[340px] 
          overflow-hidden rounded-lg border border-border-mid/40
          shadow-neon"
        >
          <img
            src="public\images\profile.jpeg"
            alt="Rahul Sharma"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Right → Story Text */}
      <div className="space-y-5">
        <h2 className="text-subtitle text-primary font-semibold">
          Who I Am
        </h2>

        <div className="space-y-5 text-body text-text-subtle 
          leading-relaxed"
        >
          <p>
            I’m a Computer Science student focused on backend development, AI-powered applications, and building products that solve real problems. Most of my work revolves around Python, Flask/FastAPI, React, databases, and machine learning systems — not just tutorials, but projects designed with actual users and scalability in mind.
          </p>
          <p>
            Over time, I moved from writing simple scripts to building full-stack and AI-driven platforms like career recommendation systems, job aggregation tools, and adaptive learning applications. I enjoy thinking deeply about system architecture, APIs, data flow, and how to turn an idea into something usable and production-ready.
          </p>
          <p>
            Right now, I’m sharpening my skills in backend engineering, data science, and machine learning while actively building projects, solving problems, and documenting my journey publicly. My goal is simple: become the kind of engineer who can build meaningful products from scratch and keep improving fast through execution.
          </p>
        </div>
      </div>
    </section>
  )
}
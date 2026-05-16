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
            I am a recent Computer Science graduate passionate about
            building scalable backend systems and intelligent ML pipelines.
            I thrive at the intersection of clean architecture and
            data driven problem solving.
          </p>
          <p>
            My journey into backend engineering started with Python and
            grew into building REST APIs, managing databases, and deploying
            machine learning models as production ready services.
          </p>
          <p>
            I am actively looking for backend and ML engineering
            internships and jobs where I can contribute, grow fast,
            and build things that matter.
          </p>
        </div>
      </div>
    </section>
  )
}
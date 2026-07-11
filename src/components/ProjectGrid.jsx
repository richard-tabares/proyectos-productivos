import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  return (
    <section id="proyectos" className="bg-surface px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Proyectos destacados
          </h2>
          <p className="mt-2 text-muted">
            Conoce el trabajo de nuestros estudiantes
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { ExternalLink, GitFork, Users } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-1 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-text-primary">{project.nombre}</h3>
        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          #{project.id}
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted">{project.descripcion}</p>

      <div className="mb-5 flex items-center gap-2 text-sm text-muted">
        <Users size={16} />
        <span>{project.integrantes.join(', ')}</span>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border pt-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light"
        >
          <ExternalLink size={16} />
          Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface"
        >
          <GitFork size={16} />
          Código
        </a>
      </div>
    </article>
  )
}

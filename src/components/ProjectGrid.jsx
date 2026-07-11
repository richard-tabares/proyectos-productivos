import { useState, useMemo } from 'react'
import ProjectCard from './ProjectCard'
import FilterBar from './FilterBar'

export default function ProjectGrid({ projects, categorias, anios }) {
  const [filtro, setFiltro] = useState({ categoria: null, anio: null })

  const filtrados = useMemo(() => {
    return projects.filter((p) => {
      if (filtro.categoria && p.categoria !== filtro.categoria) return false
      if (filtro.anio && p.anio !== filtro.anio) return false
      return true
    })
  }, [projects, filtro])

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

        <FilterBar
          categorias={categorias}
          anios={anios}
          filtro={filtro}
          onFilterChange={setFiltro}
        />

        {filtrados.length === 0 ? (
          <p className="py-20 text-center text-muted">
            No hay proyectos con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

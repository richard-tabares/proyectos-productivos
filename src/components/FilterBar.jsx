export default function FilterBar({ categorias, anios, filtro, onFilterChange }) {
  return (
    <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onFilterChange({ ...filtro, categoria: null })}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            !filtro.categoria
              ? 'bg-primary text-white'
              : 'bg-surface text-muted hover:bg-border'
          }`}
        >
          Todas
        </button>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange({ ...filtro, categoria: cat })}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filtro.categoria === cat
                ? 'bg-primary text-white'
                : 'bg-surface text-muted hover:bg-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <span className="hidden text-muted sm:inline">|</span>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onFilterChange({ ...filtro, anio: null })}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            !filtro.anio
              ? 'bg-primary text-white'
              : 'bg-surface text-muted hover:bg-border'
          }`}
        >
          Todos
        </button>
        {anios.map((a) => (
          <button
            key={a}
            onClick={() => onFilterChange({ ...filtro, anio: a })}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filtro.anio === a
                ? 'bg-primary text-white'
                : 'bg-surface text-muted hover:bg-border'
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  )
}

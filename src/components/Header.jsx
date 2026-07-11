export default function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-primary">Proyectos Web</h1>
          <p className="text-sm text-muted">Desarrollo de Software & Tecnología</p>
        </div>
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#proyectos" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            Proyectos
          </a>
        </nav>
      </div>
    </header>
  )
}

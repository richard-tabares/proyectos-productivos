export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white px-6 py-8">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted">
        <p>&copy; {year} Técnica laboral en Desarrollo de Software</p>
        <p className="mt-1 text-xs">Proyectos realizados por estudiantes de la <a href="https://uco.edu.co/"><strong>Universidad Católica del Oriente</strong></a></p>
      </div>
    </footer>
  )
}

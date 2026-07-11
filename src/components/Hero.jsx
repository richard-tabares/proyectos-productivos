export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl">
          Transformando ideas en software
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Explora los proyectos desarrollados por nuestros estudiantes. Cada uno
          representa el esfuerzo, la creatividad y las habilidades técnicas
          adquiridas durante el curso.
        </p>
        <div className="mt-8">
          <a
            href="#proyectos"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary shadow-sm transition-all hover:bg-white/90 hover:shadow-md"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  )
}

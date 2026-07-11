import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState({ projects: [], categoriasDisponibles: [], aniosDisponibles: [] })

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((d) =>
        setData({
          projects: d.projects,
          categoriasDisponibles: d.categoriasDisponibles,
          aniosDisponibles: d.aniosDisponibles,
        })
      )
      .catch((err) => console.error('Error loading projects:', err))
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <Header />
      <Hero />
      <ProjectGrid
        projects={data.projects}
        categorias={data.categoriasDisponibles}
        anios={data.aniosDisponibles}
      />
      <Footer />
    </div>
  )
}

export default App

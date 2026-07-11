import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error('Error loading projects:', err))
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <Header />
      <Hero />
      <ProjectGrid projects={projects} />
      <Footer />
    </div>
  )
}

export default App

import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Layout from '../components/Layout.jsx'
import Key from '../components/Key.jsx'
import { projects } from '../data/projects.js'

const ROOMS = ['All', 'Kitchen', 'Dining', 'Bedroom', 'Living', 'Full house']
const CITIES = ['All', 'Mumbai', 'Pune', 'Bengaluru', 'Delhi']
const TYPES = ['All', 'Apartment', 'Family house', 'Second home']

export default function Products() {
  const [activeRoom, setActiveRoom] = useState('All')
  const [activeCity, setActiveCity] = useState('All')
  const [activeType, setActiveType] = useState('All')
  const [isFading, setIsFading] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilterChange = (setter, value) => {
    if (isFading) return;
    setIsFading(true);
    setter(value);
  }

  useEffect(() => {
    // Wait for the fade out to finish before changing data, then fade back in
    const timer = setTimeout(() => {
      const filtered = projects.filter(p => {
        const matchRoom = activeRoom === 'All' || p.room === activeRoom
        const matchCity = activeCity === 'All' || p.city === activeCity
        const matchType = activeType === 'All' || p.type === activeType
        return matchRoom && matchCity && matchType
      })
      setFilteredProjects(filtered)
      setIsFading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [activeRoom, activeCity, activeType])

  const featuredProject = useMemo(() => projects.find(p => p.is_featured), [])

  return (
    <Layout>
      <Seo 
        title="Portfolio & Work — Houses as chapters" 
        description="Explore our portfolio of premium interior design projects across Mumbai, Pune, Bengaluru, and Delhi. Filter by room, city, and property type." 
        url="https://dsinterior.in/products"
      />
      <main className="portfolio-page">
        {/* HERO & FILTERS */}
        <section className="portfolio-hero wrap inner-section" style={{paddingBottom: '40px'}}>
          <div className="section-head inner-hero-frame">
            <div>
              <div className="kicker">WORK</div>
              <h1 className="editorial-headline" style={{fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: '16px'}}>Houses, as chapters.</h1>
              <p className="lead-copy">Residences we refused to dilute.</p>
            </div>
          </div>

          <div className="portfolio-filters">
            <div className="filter-group">
              {ROOMS.map(r => (
                <button 
                  key={r} 
                  className={`filter-chip ${activeRoom === r ? 'active' : ''}`}
                  onClick={() => handleFilterChange(setActiveRoom, r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="filter-group">
              {CITIES.map(c => (
                <button 
                  key={c} 
                  className={`filter-chip ${activeCity === c ? 'active' : ''}`}
                  onClick={() => handleFilterChange(setActiveCity, c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="filter-group">
              {TYPES.map(t => (
                <button 
                  key={t} 
                  className={`filter-chip ${activeType === t ? 'active' : ''}`}
                  onClick={() => handleFilterChange(setActiveType, t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="result-count">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'house' : 'houses'}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        {featuredProject && activeRoom === 'All' && activeCity === 'All' && activeType === 'All' && (
          <section className="featured-project-section wrap">
            <div className="kicker" style={{marginBottom: '16px'}}>FEATURED PROJECT</div>
            <Link to={`/products/${featuredProject.slug}`} className="featured-card">
              <div className="featured-info">
                <h2>{featuredProject.title}</h2>
                <div className="meta-line">
                  {featuredProject.city.toUpperCase()}
                  <span className="line-sep"></span>
                </div>
                <p>{featuredProject.case_study.problem_brief.split('.')[0]}.</p>
                <span className="product-action" style={{marginTop: '24px'}}>Read the brief &rarr;</span>
              </div>
              <div className="featured-photo">
                <img src={featuredProject.featured_image} alt={featuredProject.title} />
              </div>
            </Link>
          </section>
        )}

        {/* GRID */}
        <section className={`portfolio-grid-section wrap ${isFading ? 'fading' : ''}`}>
          <div className="kicker" style={{marginBottom: '24px'}}>
            {(activeRoom !== 'All' || activeCity !== 'All' || activeType !== 'All') ? 'FILTERED PROJECTS' : 'MORE PROJECTS'}
          </div>
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <Link to={`/products/${project.slug}`} className="portfolio-card hover-revolve" key={project.slug}>
                <div className="portfolio-photo">
                  <img src={project.featured_image} alt={project.title} />
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <div className="portfolio-meta">
                    {project.city.toUpperCase()} &middot; {project.room.toUpperCase()} &middot; {project.year}
                  </div>
                  <div className="constraint-line">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21l18-18v18H3z"/></svg>
                    <span>{project.constraint_line}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      <Key />
    </Layout>
  )
}

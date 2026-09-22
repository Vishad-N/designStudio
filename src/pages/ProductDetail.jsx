import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Layout from '../components/Layout.jsx'
import Key from '../components/Key.jsx'
import { projects } from '../data/projects.js'

export default function ProductDetail() {
  const { slug } = useParams()
  
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const project = projects[currentIndex]
  
  if (!project) {
    return (
      <Layout>
        <div className="wrap inner-section text-center" style={{paddingTop: '160px'}}>
          <h2>Project not found.</h2>
          <Link to="/products" className="product-action" style={{justifyContent: 'center', marginTop: '24px'}}>Return to portfolio</Link>
        </div>
      </Layout>
    )
  }

  const { case_study } = project
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "image": `https://dsinterior.in${project.featured_image}`,
    "author": {
      "@type": "Person",
      "name": "Design Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Design Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dsinterior.in/assets/logo.png"
      }
    },
    "description": case_study.problem_brief.split('.')[0] + "."
  };

  return (
    <Layout>
      <Seo 
        title={`${project.title} — ${project.city} Interior Design`}
        description={articleSchema.description}
        url={`https://dsinterior.in/products/${project.slug}`}
        image={`https://dsinterior.in${project.featured_image}`}
        type="article"
        schema={articleSchema}
      />
      <article className="case-study-page">
        {/* COVER */}
        <header className="cs-cover">
          <img src={project.featured_image} alt={project.title} className="cs-cover-img" />
          <div className="cs-cover-overlay">
            <div className="wrap">
              <h1 className="editorial-headline">{project.title}</h1>
              <div className="cs-meta">
                <span>{project.city}</span>
                <span className="dot">&middot;</span>
                <span>{project.sqft}</span>
                <span className="dot">&middot;</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </header>

        {/* THE PROBLEM */}
        <section className="cs-problem wrap inner-section">
          <div className="cs-problem-grid">
            <div className="cs-before-photo">
              <img src={case_study.before_image} alt="Before" />
              <span className="caption-label">BEFORE</span>
            </div>
            <div className="cs-brief">
              <h2 className="editorial-headline" style={{fontSize: '32px'}}>The problem</h2>
              <p className="cs-text">{case_study.problem_brief}</p>
            </div>
          </div>
        </section>

        {/* DESIGN STRATEGY */}
        <section className="cs-strategy wrap inner-section">
          <div className="kicker text-center" style={{marginBottom: '48px'}}>DESIGN STRATEGY</div>
          <div className="cs-strategy-grid">
            <div className="strategy-card">
              <div className="strategy-img-wrap">
                <img src={case_study.design_strategy.floor_plan.img} alt="Floor Plan" />
              </div>
              <h4>FLOOR PLAN</h4>
              <p>{case_study.design_strategy.floor_plan.caption}</p>
            </div>
            <div className="strategy-card">
              <div className="strategy-img-wrap">
                <img src={case_study.design_strategy.material_palette.img} alt="Material Palette" />
              </div>
              <h4>MATERIAL PALETTE</h4>
              <p>{case_study.design_strategy.material_palette.caption}</p>
            </div>
            <div className="strategy-card">
              <div className="strategy-img-wrap">
                <img src={case_study.design_strategy.furniture_edit.img} alt="Furniture Edit" />
                {case_study.design_strategy.furniture_edit.is_rejected && (
                  <div className="red-cross-overlay">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="10" y1="10" x2="90" y2="90" stroke="#dc2626" strokeWidth="2" />
                      <line x1="90" y1="10" x2="10" y2="90" stroke="#dc2626" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
              <h4>FURNITURE EDIT</h4>
              <p>{case_study.design_strategy.furniture_edit.caption}</p>
            </div>
            <div className="strategy-card">
              <div className="strategy-img-wrap">
                <img src={case_study.design_strategy.finished_space.img} alt="Finished Space" />
              </div>
              <h4>FINISHED SPACE</h4>
              <p>{case_study.design_strategy.finished_space.caption}</p>
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <section className="cs-rooms wrap inner-section">
          {case_study.rooms.map((room, i) => (
            <figure className="cs-room-figure" key={i}>
              <img src={room.img} alt={`Room detail ${i+1}`} />
              <figcaption>{room.caption}</figcaption>
            </figure>
          ))}
        </section>

        {/* DETAILS (Materials, Facts, Residue) */}
        <section className="cs-details wrap inner-section">
          <div className="cs-details-grid">
            <div className="cs-materials">
              <div className="kicker">MATERIALS</div>
              <div className="materials-list">
                {case_study.materials.map(m => (
                  <div className="mat-chip" key={m.name}>
                    <span className="mat-dot"></span>
                    {m.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-facts">
              <div className="kicker">FACTS</div>
              <ul className="facts-list">
                {case_study.facts.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="cs-residue">
              <div className="kicker">RESIDUE</div>
              <blockquote className="residue-quote">
                {case_study.residue_quote}
              </blockquote>
            </div>
          </div>
        </section>

        {/* NEXT HOUSE NAV */}
        <section className="cs-nav wrap inner-section">
          <div className="cs-nav-grid">
            {prevProject ? (
              <Link to={`/products/${prevProject.slug}`} className="nav-card">
                <span className="nav-label">&larr; Previous</span>
                <h3>{prevProject.title}</h3>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link to={`/products/${nextProject.slug}`} className="nav-card text-right">
                <span className="nav-label">Next &rarr;</span>
                <h3>{nextProject.title}</h3>
              </Link>
            ) : <div />}
          </div>
        </section>
      </article>

      <Key />
    </Layout>
  )
}

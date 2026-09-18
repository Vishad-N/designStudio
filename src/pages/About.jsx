import { useState, useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import Key from '../components/Key.jsx'
import Process from '../components/Process.jsx'
import { Link } from 'react-router-dom'
import { useParallaxOffset } from '../hooks/useParallaxOffset.js'

function Parallax({ children, className = 'parallax-slow', style }) {
  const ref = useParallaxOffset();
  return <div ref={ref} className={className} style={style}>{children}</div>;
}

const CITIES = [
  { name: 'Mumbai', desc: 'Working with coastal light and vertical living.' },
  { name: 'Pune', desc: 'Expansive plots and cooler evening palettes.' },
  { name: 'Bengaluru', desc: 'Indoor-outdoor flow and natural ventilation.' },
  { name: 'Delhi', desc: 'Layered textures for extreme seasonal shifts.' },
]

const TYPEWRITER_TEXTS = [
  "We start on the plot, not on Pinterest.",
  "One object should set the room.",
  "We hold the contractors when you want the house finished, not just drawn.",
  "We design for living, not just looking."
];

function TypewriterHeading() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPEWRITER_TEXTS[textIndex];
    let timeout;
    
    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), 20); // Fast delete
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), 50); // Type speed
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500); // Wait before delete
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '500px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '0 24px', paddingTop: '160px', boxSizing: 'border-box', overflow: 'hidden', zIndex: 0 }}>
      {/* Blueprint background elements for central attraction effect */}
      <img src="/floor_plan.jpg" alt="" style={{
        position: 'absolute',
        top: '-50%',
        left: '-20%',
        width: '120vw',
        minWidth: '1000px',
        opacity: 0.07,
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        transform: 'rotate(12deg)',
        filter: 'contrast(1.2)'
      }} />
      <img src="/floor_plan.jpg" alt="" style={{
        position: 'absolute',
        bottom: '-60%',
        right: '-20%',
        width: '130vw',
        minWidth: '1200px',
        opacity: 0.07,
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        transform: 'rotate(-18deg)',
        filter: 'contrast(1.2)'
      }} />
      <img src="/floor_plan.jpg" alt="" style={{
        position: 'absolute',
        top: '-40%',
        right: '-10%',
        width: '110vw',
        minWidth: '900px',
        opacity: 0.05,
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        transform: 'rotate(65deg)',
        filter: 'contrast(1.2)'
      }} />

      <h2 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(28px, 4vw, 56px)', textAlign: 'center', margin: 0, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: '1000px', wordBreak: 'break-word' }}>
        {TYPEWRITER_TEXTS[textIndex].substring(0, charIndex)}
        <span style={{ borderRight: '4px solid #fff', marginLeft: '4px' }} className="cursor-blink"></span>
      </h2>
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      <main className="about-page">
        <section className="wrap inner-section" style={{ position: 'relative' }}>
          <TypewriterHeading />
          <div className="about-hero-wrapper" style={{ position: 'relative', marginTop: '120px', zIndex: 1 }}>

            <div className="about-hero inner-hero-frame" style={{ marginTop: 0 }}>
              <div className="about-hero-grid">
              <div className="about-hero-left">
                <span className="kicker">STUDIO</span>
                <h1 className="editorial-headline">Form first.<br/>Then feeling.</h1>
                <p className="lead-copy">
                  We compose interiors you can touch — plan, material, light, and one object that sets the room. Homes in Mumbai, Pune, Bengaluru, Delhi.
                </p>
                <div className="stats-pills">
                  <span>240+ homes</span>
                  <span>11 years</span>
                  <span>4 cities</span>
                </div>
              </div>
              <div className="about-hero-right">
                <Parallax className="parallax-slow">
                  <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80" alt="Studio samples and plans" className="studio-photo" />
                </Parallax>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* STUDIO GALLERY */}
        <section className="gallery wrap">
          <div className="section-head">
            <div>
              <div className="kicker">THE STUDIO</div>
              <h2>Where we draw.</h2>
            </div>
          </div>
          <Parallax className="parallax-slow">
            <div className="gallery-grid">
              <div className="gallery-item hover-revolve">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Studio architecture" />
              </div>
              <div className="gallery-grid-right">
                <div className="gallery-item hover-revolve">
                  <img src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80" alt="Materials and concrete" />
                </div>
                <div className="gallery-item hover-revolve">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Architectural sketch" />
                </div>
              </div>
            </div>
          </Parallax>
        </section>

        {/* TIMELINE */}
        <section className="timeline wrap">
          <div className="section-head">
            <div>
              <div className="kicker">SINCE 2015</div>
              <h2>How the studio was built.</h2>
            </div>
          </div>
          <Parallax className="parallax-slow">
            <div className="timeline-grid timeline-staircase">
              <div className="timeline-node inner-card hover-revolve">
                <div className="inner-card-content">
                  <strong>2015</strong>
                  <p>The first apartment in Bandra.</p>
                </div>
              </div>
              <div className="timeline-node inner-card hover-revolve">
                <div className="inner-card-content">
                  <strong>2017</strong>
                  <p>Opening our first dedicated kitchen workshop.</p>
                </div>
              </div>
              <div className="timeline-node inner-card hover-revolve">
                <div className="inner-card-content">
                  <strong>2019</strong>
                  <p>The first house built entirely from the ground up outside the city.</p>
                </div>
              </div>
              <div className="timeline-node inner-card hover-revolve">
                <div className="inner-card-content">
                  <strong>2022</strong>
                  <p>The year we stopped accepting moodboard-only work.</p>
                </div>
              </div>
            </div>
          </Parallax>
        </section>


        {/* PROCESS */}
        <div className="wrap">
          <Process />
        </div>

        {/* CITIES */}
        <section className="cities wrap">
          <div className="section-head">
            <div>
              <div className="kicker">LOCATIONS</div>
              <h2>Where we work.</h2>
            </div>
          </div>
          <div className="city-grid">
            {CITIES.map(city => (
              <Link to={`/products?city=${city.name.toLowerCase()}`} className="city-card-link inner-card" key={city.name}>
                <div className="inner-card-content">
                  <h3>{city.name}</h3>
                  <p>{city.desc}</p>
                  <span className="product-action" style={{marginTop: '24px'}}>View projects &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* REFUSALS */}
        <section className="refusals wrap">
          <div className="inner-card">
            <div className="inner-card-content refusals-content">
              <h2>What we will not do.</h2>
              <ul className="refusal-list">
                <li>Moodboard-only packages</li>
                <li>Full-house styling in a weekend</li>
                <li>Work we cannot visit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <Key />
      </main>
    </Layout>
  )
}

import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Header from './Header'

const COLORS = [
  { id: 0, hex: '#16a34a', img: '/assets/chair-green.png' },
  { id: 1, hex: '#0f766e', img: '/assets/chair-blue.png' },
  { id: 2, hex: '#7c3aed', img: '/assets/chair-purple.png' },
  { id: 3, hex: '#dc2626', img: '/assets/chair-red.png' },
]

const DEFAULT_CHAIR = '/assets/chair-blue.png'

export default function Hero({ activeColor, setActiveColor }) {
  const [revealRef, isRevealed] = useReveal(0.1)
  
  const chair = activeColor === null || activeColor === undefined
    ? DEFAULT_CHAIR
    : COLORS[activeColor]?.img || DEFAULT_CHAIR

  return (
    <section className={`hero-stage ${isRevealed ? 'is-revealed' : ''}`} id="home" ref={revealRef}>
      <div className="hero-frame">
        <div className="hero-bg-layer" />
        <Header />

        <button className="side-arrow left reveal-label stagger-1" aria-label="Previous product">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button className="side-arrow right reveal-label stagger-1" aria-label="Next product">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 6l6 6-6 6" /></svg>
        </button>

        <div className="hero-canvas">
          {/* Desktop Wordmark (hidden on mobile) */}
          <div className="wordmark hide-on-mobile" aria-hidden="true">
            <span className="wm-left reveal-headline stagger-1">
              <span className="hover-letter">d</span>
              <span className="hover-letter">e</span>
              <span className="hover-letter">s</span>
            </span>
            <span className="wm-studio reveal-headline stagger-2">studio.</span>
            <span className="wm-right reveal-headline stagger-1">
              <span className="hover-letter">i</span>
              <span className="hover-letter">g</span>
              <span className="hover-letter">n</span>
            </span>
          </div>
          
          <div className="chair-stage">
            <img src={chair} alt="Signature sculptural lounge chair" />
            <button className="hotspot hs-a hide-on-mobile" aria-label="Material detail" />
            <button className="hotspot hs-b hide-on-mobile" aria-label="Upholstery detail" />
            <button className="hotspot hs-c hide-on-mobile" aria-label="Base detail" />
            <div className="tooltip hide-on-mobile">
              Premium microfiber upholstery: soft, durable, and easy to care for
            </div>
            <span className="since hide-on-mobile">Since 2015</span>
          </div>

          {/* Desktop Text (hidden on mobile) */}
          <p className="hero-copy hide-on-mobile reveal-headline stagger-2">
            We create designer interiors that don’t just
            complement a home — they become its accent.
            Each project is a combination of architectural
            form, tactile pleasure and visual harmony.
          </p>

          {/* Mobile Text (hidden on desktop) */}
          <div className="hero-copy hero-m-copy mobile-only reveal-headline stagger-2">
            <h1 className="hero-m-title">
              Design interiors<br />that hold a life.
            </h1>
            <p className="hero-m-sub">
              We compose rooms you can<br />touch — plan, material, light.
            </p>
          </div>

          <div className="hero-cta-row" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
            <a className="cta-pill reveal-headline stagger-3" href="#spaces" style={{ flex: '1 1 auto', justifyContent: 'center' }}>
              View all collections
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{marginLeft: 8}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Mobile Footer (hidden on desktop) */}
          <div className="hero-since mobile-only reveal-headline stagger-3">
            Since 2015 · Mumbai, Pune, Bengaluru, Delhi
          </div>

          <div className="swatches reveal-media stagger-3" data-parallax="hero-fast">
            <span>Choose your color</span>
            <div className="dots">
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  className={`dot ${activeColor === c.id ? 'on' : ''}`}
                  style={{ background: c.hex }}
                  onClick={() => setActiveColor(c.id)}
                  aria-label={`Select finish ${c.id + 1}`}
                />
              ))}
            </div>
          </div>

          <aside className="consult hover-revolve reveal-media stagger-4" data-parallax="hero-fast">
            <div className="consult-copy">
              <h4>Get a Free Consultation</h4>
              <p>I’ll set the form and our specialists will compose your interior to help with your request.</p>
              <button type="button" className="request-call-btn">
                <svg className="phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Request a Call</span>
              </button>
            </div>
            <img src="/assets/consultant.jpg" alt="Lead designer" />
          </aside>
        </div>

        <div className="socials reveal-label stagger-1" data-parallax="hero-fast">
          <a href="#facebook" aria-label="Facebook">f</a>
          <a href="#instagram" aria-label="Instagram">◎</a>
          <a href="#x" aria-label="X">𝕏</a>
        </div>
      </div>
      <a className="scroll-cue reveal-label stagger-1" href="#spaces" aria-label="Scroll">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
      </a>
    </section>
  )
}

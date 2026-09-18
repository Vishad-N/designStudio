import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const getNavClass = (path) => {
    // Exact match for home, startsWith for others (like /products/slug)
    if (path === '/') return location.pathname === '/' ? "nav-pill active" : ""
    return location.pathname.startsWith(path) ? "nav-pill active" : ""
  }

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-left">
        <Link viewTransition className={getNavClass('/')} to="/">home</Link>
        <Link viewTransition className={getNavClass('/about-us')} to="/about-us">about us</Link>
        <Link viewTransition className={getNavClass('/faqs')} to="/faqs">faqs</Link>
        <Link viewTransition className={getNavClass('/products')} to="/products">products</Link>
      </nav>

      <Link viewTransition className="logo" to="/"><span>design studio.</span></Link>

      <div className="nav-right">
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Account">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="3.2" /><path d="M5 19c1.5-3.2 4-4.8 7-4.8S17.5 15.8 19 19" />
            </svg>
          </button>
          <Link className="contact-btn" to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  )
}

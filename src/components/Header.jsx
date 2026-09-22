import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])
  
  const getNavClass = (path) => {
    if (path === '/') return location.pathname === '/' ? "nav-pill active" : ""
    return location.pathname.startsWith(path) ? "nav-pill active" : ""
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <nav className="nav-left hide-on-mobile">
          <Link viewTransition className={getNavClass('/')} to="/">home</Link>
          <Link viewTransition className={getNavClass('/about-us')} to="/about-us">about us</Link>
          <Link viewTransition className={getNavClass('/faqs')} to="/faqs">faqs</Link>
          <Link viewTransition className={getNavClass('/products')} to="/products">products</Link>
        </nav>

        <button 
          className="icon-btn mobile-only menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ minWidth: '44px', minHeight: '44px', padding: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link viewTransition className="logo" to="/"><span>design studio.</span></Link>

        <div className="nav-right">
          <div className="nav-actions">
            <Link className="contact-btn" to="/contact" style={{ margin: 0 }}>Contact</Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer — portaled to <body> so it isn't trapped inside the hero frame's containing block */}
      {createPortal(
        <div className={`mobile-menu-drawer hide-on-desktop ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <button
            className="icon-btn drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/contact" className="mobile-contact-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}

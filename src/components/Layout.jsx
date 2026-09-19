import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MobileNavbar from './MobileNavbar.jsx'

export default function Layout({ children }) {
  useEffect(() => {
    let rafId;
    const updateScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
      rafId = requestAnimationFrame(updateScroll);
    };
    
    rafId = requestAnimationFrame(updateScroll);
    
    return () => {
      cancelAnimationFrame(rafId);
    }
  }, [])

  return (
    <div className="page inner-page">
      <Header />
      <main className="inner-main">
        {children}
      </main>
      <Footer />
      <MobileNavbar />
    </div>
  )
}

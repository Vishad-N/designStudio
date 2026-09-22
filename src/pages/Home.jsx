import { useState, useEffect, useRef } from 'react'
import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import Audience from '../components/Audience.jsx'
import Reels from '../components/Reels.jsx'
import Spaces from '../components/Spaces.jsx'
import TwoStates from '../components/TwoStates.jsx'
import Brief from '../components/Brief.jsx'
import Chapters from '../components/Chapters.jsx'
import Geography from '../components/Geography.jsx'
import Materials from '../components/Materials.jsx'
import Offer from '../components/Offer.jsx'
import Fee from '../components/Fee.jsx'
import Philosophy from '../components/Philosophy.jsx'
import Process from '../components/Process.jsx'
import Site from '../components/Site.jsx'
import Press from '../components/Press.jsx'
import Voices from '../components/Voices.jsx'
import Bench from '../components/Bench.jsx'
import Quiet from '../components/Quiet.jsx'
import Key from '../components/Key.jsx'
import Footer from '../components/Footer.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import MobileNavbar from '../components/MobileNavbar.jsx'

export default function Home() {
  const [activeColor, setActiveColor] = useState(1)
  const [showChat, setShowChat] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    let rafId;
    const updateScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
      rafId = requestAnimationFrame(updateScroll);
    };
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches && window.innerWidth > 900) {
      updateScroll();
    }
    return () => cancelAnimationFrame(rafId);
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show chat only when hero is not intersecting (disappeared from screen)
        setShowChat(!entry.isIntersecting)
      },
      { threshold: 0.1 } // trigger when 10% of hero is visible
    )
    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    "name": "Design Studio",
    "image": "https://dsinterior.in/assets/chair-hero.jpg",
    "url": "https://dsinterior.in",
    "telephone": "+919131676785",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "description": "Premium interior design services based in Mumbai, Pune, Bengaluru, and Delhi. We create designer interiors that don’t just complement a home — they become its accent.",
    "priceRange": "$$$$"
  };

  return (
    <div className="page">
      <Seo 
        url="https://dsinterior.in/" 
        schema={localBusinessSchema} 
      />
      <div ref={heroRef}>
        <Hero activeColor={activeColor} setActiveColor={setActiveColor} />
      </div>
      <Audience />
      <Reels />
      <Spaces />
      <TwoStates />
      <Brief />
      <Chapters />
      <Geography />
      <Materials />
      <Offer />
      <Fee />
      <Philosophy />
      <Process />
      <Site />
      <Press />
      <Voices />
      <Bench />
      <Quiet />
      <Key />
      <Footer />
      <ChatWidget visible={showChat} />
      <MobileNavbar />
    </div>
  )
}

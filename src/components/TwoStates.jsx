import { useState, useRef, useEffect } from 'react'

export default function TwoStates() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const [hasNudged, setHasNudged] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasNudged) {
        setHasNudged(true)
        setTimeout(() => {
          setSliderPos(58)
          setTimeout(() => setSliderPos(50), 600)
        }, 500)
      }
    }, { threshold: 0.5 })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [hasNudged])

  const handleMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let x = (e.clientX - rect.left) / rect.width
    x = Math.max(0, Math.min(1, x))
    setSliderPos(x * 100)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return
      handleMove(e)
    }
    
    const handleTouchMove = (e) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="two-states wrap" id="transformation">
      <div className="section-head text-center">
        <div className="kicker">Transformation</div>
        <h2>One room. Two states.</h2>
        <p>A 12-foot kitchen in Pune. No extra window. One island.</p>
      </div>
      
      <div className="slider-wrapper">
        <div 
          className="slider-container" 
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true)
            handleMove(e)
          }}
          onTouchStart={(e) => {
            setIsDragging(true)
            handleMove(e.touches[0])
          }}
        >
          {/* AFTER Image (Background) */}
          <img 
            src="/assets/kitchen_after.jpg" 
            alt="Kitchen after renovation" 
            className="slider-img" 
            draggable="false"
          />
          
          {/* BEFORE Image (Foreground clipped) */}
          <img 
            src="/assets/kitchen_before.jpg" 
            alt="Kitchen before renovation" 
            className="slider-img" 
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            draggable="false"
          />
          
          {/* Slider Handle */}
          <div 
            className="slider-handle"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="slider-grip">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 17L3 12l5-5M16 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="slider-meta">
          <span>PUNE</span>
          <span className="dot">·</span>
          <span>180 SQ FT</span>
          <span className="dot">·</span>
          <span>11 WEEKS</span>
          <span className="dot">·</span>
          <span>KITCHEN</span>
        </div>
      </div>
    </section>
  )
}

import { useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useReveal } from '../hooks/useReveal'

export default function Philosophy() {
  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const [countRef1, count1] = useCounter(240)
  const [countRef2, count2] = useCounter(11)
  const [countRef3, count3] = useCounter(18)
  const [revealRef, isRevealed] = useReveal()

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const maxTilt = 12; // Maximum rotation in degrees
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setTilt({ x: rotateX, y: rotateY });
  }

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section className={`philosophy ${isRevealed ? 'is-revealed' : ''}`} id="about" ref={revealRef}>
      <div className="philosophy-grid">
        <div className="philosophy-content">
          <div className="kicker reveal-label">STUDIO</div>
          <h2 className="reveal-headline stagger-1">Form first.<br />Then feeling.</h2>
          <p className="reveal-headline stagger-2">
            We design interiors with intention.<br/>
            Spaces that are crafted to elevate how you live.
          </p>
          <div className="stats-pills reveal-media stagger-3">
            <div className="stat-pill" ref={countRef1}><b>{count1}+</b><span>PROJECTS</span></div>
            <div className="stat-pill" ref={countRef2}><b>{count2}</b><span>YEARS</span></div>
            <div className="stat-pill" ref={countRef3}><b>{count3}</b><span>CITIES</span></div>
          </div>
        </div>
        
        <div 
          className="video-card" 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <button className="v-btn play-btn" onClick={togglePlay} aria-label="Play/Pause">
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <button className="v-btn mute-btn" onClick={toggleMute} aria-label="Mute/Unmute">
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              )}
            </button>
          </div>
          <div className="video-caption">
            House of Blue Hours — 28s
          </div>
        </div>
      </div>
    </section>
  )
}

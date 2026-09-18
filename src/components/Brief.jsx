import { useParallaxOffset } from '../hooks/useParallaxOffset.js'

export default function Brief() {
  const ref = useParallaxOffset()

  return (
    <section className="brief wrap" id="process-start" ref={ref}>
      <div className="brief-card">
        <div className="brief-content">
          <div className="kicker">The Process</div>
          <h2>We don't start with moodboards.</h2>
          <p>
            We start with a wall of tracing paper, a plan of your Delhi plot, 
            and a long conversation about how you make your coffee.
          </p>
        </div>
        <div className="brief-photo">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
            alt="Studio wall with architectural sketches"
            data-parallax="brief-img"
          />
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'

const progress = [
  { day: 'MON', label: 'measure the existing kitchen', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
  { day: 'TUE', label: 'contractor walk, ceiling marked', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { day: 'WED', label: 'samples on the wall in real light', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80' },
  { day: 'THU', label: 'joinery shop, shutter sample', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80' },
  { day: 'FRI', label: 'first furniture drop', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
]

export default function Site() {
  const scrollRef = useRef(null)

  return (
    <section className="site-log" id="execution">
      <div className="wrap">
        <div className="site-header">
          <div className="kicker">ON SITE UPDATE</div>
          <h2>A week on site.</h2>
        </div>
        <hr className="site-divider" />
        
        <div className="site-scroller" ref={scrollRef}>
          <div className="site-track">
            {progress.map((p) => (
              <figure className="site-frame" key={p.day}>
                <div className="site-photo-wrapper">
                  <img src={p.img} alt={p.label} loading="lazy" />
                  <span className="date-chip">{p.day}</span>
                </div>
                <figcaption>{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

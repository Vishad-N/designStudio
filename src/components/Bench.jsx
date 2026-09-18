const people = [
  { name: 'Maya Rao', role: 'Principal', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Arun Seth', role: 'Project architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Leela V.', role: 'Styling', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
]

import { useParallaxOffset } from '../hooks/useParallaxOffset.js'

export default function Bench() {
  const ref = useParallaxOffset()

  return (
    <section className="bench" id="team" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Studio bench</div>
            <h2>The people in the drawing.</h2>
          </div>
        </div>
        <div className="bench-grid">
          {people.map((p, i) => (
            <figure className="person" key={p.name} data-parallax={`bench-img-${(i % 3) + 1}`}>
              <img src={p.img} alt={p.name} />
              <figcaption>
                <strong>{p.name}</strong>
                <span>{p.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

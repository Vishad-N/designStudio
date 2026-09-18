const chapters = [
  {
    n: '01',
    title: 'House of Blue Hours',
    where: 'Alibaug · 4,200 sq ft',
    line: 'A monsoon house that turns down the volume after six.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '02',
    title: 'The Long Kitchen',
    where: 'Bengaluru · apartment',
    line: 'One twelve-metre run of stone. Dinner happens on it.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '03',
    title: 'Quiet Wing',
    where: 'Pune · family home',
    line: 'Bedrooms as galleries. Light as the only ornament.',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
  },
]

import { useParallaxOffset } from '../hooks/useParallaxOffset.js'

export default function Chapters() {
  const ref = useParallaxOffset()

  return (
    <section className="chapters" id="projects" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Monograph</div>
            <h2>Houses,<br />as chapters.</h2>
          </div>
          <p>Not a grid of pretty rooms. Three residences, each with one decisive idea we refused to dilute.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((c, i) => (
            <a className="chapter hover-revolve" href={`#${c.n}`} key={c.n}>
              <span className="chapter-n">{c.n}</span>
              <div className="chapter-photo">
                <img src={c.img} alt={c.title} data-parallax={`chapter-img-${(i % 3) + 1}`} />
              </div>
              <div className="chapter-copy" data-parallax="chapter-copy">
                <em>{c.where}</em>
                <h3>{c.title}</h3>
                <p>{c.line}</p>
                <span className="read">Read the brief →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

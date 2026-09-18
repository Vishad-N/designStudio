const offers = [
  { tag: '01', title: 'Compose', body: 'Full-home interiors — plan, material, light, and the one object that sets the room.', time: '10–16 weeks' },
  { tag: '02', title: 'Kitchen', body: 'Stone, storage, and a working island. The room the house actually lives in.', time: '6–10 weeks' },
  { tag: '03', title: 'Quiet rooms', body: 'Bedrooms and studies designed for rest, not display.', time: '4–8 weeks' },
  { tag: '04', title: 'Turnkey', body: 'We hold the contractors. You arrive to a house that already knows you.', time: 'by scope' },
]

export default function Offer() {
  return (
    <section className="offer" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Retainer</div>
            <h2>How you hire us.</h2>
          </div>
          <p>Four ways in. Same language of form, touch, and light.</p>
        </div>
        <div className="offer-grid">
          {offers.map((o) => (
            <article className="offer-card" key={o.tag}>
              <span>{o.tag}</span>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              <em>{o.time}</em>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

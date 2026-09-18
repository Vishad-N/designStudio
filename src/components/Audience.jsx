export default function Audience() {
  const cards = [
    {
      title: 'The monsoon apartment',
      text: 'Tight frontage. Hard light. Rooms that must stay quiet after six.',
      img: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'The everyday house',
      text: 'A plan that survives school mornings and still holds a dinner.',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'The other house',
      text: 'A weekend chapter. Not a hotel suite with better cushions.',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section className="audience wrap" id="audience">
      <div className="section-head text-center">
        <div className="kicker">Clients</div>
        <h2>Who the house is for.</h2>
        <p>Three situations we take on. If none of these is your house, we are probably not the studio.</p>
      </div>
      
      <div className="audience-grid">
        {cards.map((c, i) => (
          <article className="audience-card hover-revolve" key={i}>
            <div className="audience-photo">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="audience-content">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

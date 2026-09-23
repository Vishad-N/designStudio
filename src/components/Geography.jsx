const cities = [
  { name: 'Indore', desc: 'Teak & Basalt' },
  { name: 'Pune', desc: 'Exposed Brick & Brass' },
  { name: 'Bengaluru', desc: 'Granite & Glass' },
  { name: 'Delhi', desc: 'Marble & Sandstone' },
]

export default function Geography() {
  return (
    <section className="geography wrap" id="cities">
      <div className="section-head text-center">
        <div className="kicker">Geography</div>
        <h2>Where we lay stone.</h2>
        <p>We understand the light in Pune, the dust in Delhi, the rain in Indore, and the stone in Bengaluru.</p>
      </div>
      
      <div className="city-grid">
        {cities.map((city) => (
          <div className="city-card-parent" key={city.name}>
            <div className="city-card-3d">
              <div className="city-content-box">
                <h3 className="city-card-title">{city.name}</h3>
                <div className="city-card-desc">{city.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

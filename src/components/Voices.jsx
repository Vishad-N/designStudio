const voices = [
  { room: 'Living', quote: 'Guests sit down and stop looking for the television.', who: 'A. Mehra · Mumbai' },
  { room: 'Kitchen', quote: 'The island became the only table we use.', who: 'R. Iyer · Bengaluru' },
  { room: 'Bedroom', quote: 'It is the first room that made the city feel quiet.', who: 'S. Kapoor · Delhi' },
]

export default function Voices() {
  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <div className="kicker">Heard in the rooms</div>
        <h2 className="voices-title">Not reviews. Residues.</h2>
        <div className="voice-grid">
          {voices.map((v) => (
            <article className="voice hover-revolve" key={v.room}>
              <span>{v.room}</span>
              <p>“{v.quote}”</p>
              <cite>{v.who}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

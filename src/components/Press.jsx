export default function Press() {
  const logos = ["AD India", "Elle Decor", "Vogue Living", "ArchDaily", "Dezeen"];
  
  return (
    <section className="press wrap" id="press" aria-label="Press and Recognition">
      <div className="press-kicker">Recognition</div>
      <h2 className="sr-only">Recognition</h2>
      
      <div className="press-track-container">
        <div className="press-track">
          {logos.map((logo, i) => (
            <span key={`a-${i}`} className="press-logo">{logo}</span>
          ))}
          {logos.map((logo, i) => (
            <span key={`b-${i}`} className="press-logo">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

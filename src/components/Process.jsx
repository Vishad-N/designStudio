const steps = [
  { n: '01', title: 'Listen', copy: 'Site visit, brief, and a palette that already belongs to the house.' },
  { n: '02', title: 'Compose', copy: 'Plans, materials, and one hero piece that sets the room’s accent.' },
  { n: '03', title: 'Make', copy: 'Custom joinery and furniture built with our workshop partners.' },
  { n: '04', title: 'Settle', copy: 'Styling, lighting, and a walkthrough until the space feels inevitable.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="kicker">Method</div>
      <h2>How a room arrives.</h2>
      <div className="steps">
        {steps.map((s) => (
          <article className="step" key={s.n}>
            <em>{s.n}</em>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

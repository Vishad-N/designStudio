const fees = [
  { title: 'Design', items: ['Spatial planning', 'Custom millwork design', 'Material & finishes selection', 'Lighting concepts'] },
  { title: 'Procurement', items: ['Direct-to-trade pricing', 'Order management', 'Quality control at source', 'Shipping logistics'] },
  { title: 'Project Management', items: ['Site supervision', 'Contractor coordination', 'Timeline management', 'Final styling & handover'] },
]

export default function Fee() {
  return (
    <section className="fee wrap" id="transparency">
      <div className="section-head text-center">
        <div className="kicker">Transparency</div>
        <h2>What the fee covers.</h2>
        <p>No hidden percentages. We charge a flat design fee and manage procurement at cost.</p>
      </div>
      
      <div className="fee-grid">
        {fees.map((f) => (
          <div className="fee-card" key={f.title}>
            <h3>{f.title}</h3>
            <ul>
              {f.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

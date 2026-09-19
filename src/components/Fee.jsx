import { useState } from 'react'

const fees = [
  { title: 'Design', items: ['Spatial planning', 'Custom millwork design', 'Material & finishes selection', 'Lighting concepts'] },
  { title: 'Procurement', items: ['Direct-to-trade pricing', 'Order management', 'Quality control at source', 'Shipping logistics'] },
  { title: 'Project Management', items: ['Site supervision', 'Contractor coordination', 'Timeline management', 'Final styling & handover'] },
]

export default function Fee() {
  // Accordion state only takes effect on mobile (CSS keys off .is-open there); desktop always shows every card.
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="fee wrap" id="transparency">
      <div className="section-head text-center">
        <div className="kicker">Transparency</div>
        <h2>What the fee covers.</h2>
        <p>No hidden percentages. We charge a flat design fee and manage procurement at cost.</p>
      </div>
      
      <div className="fee-grid">
        {fees.map((f, i) => (
          <div className={`fee-card ${openIndex === i ? 'is-open' : ''}`} key={f.title}>
            <h3
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenIndex(openIndex === i ? -1 : i) } }}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
            >
              {f.title}
            </h3>
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

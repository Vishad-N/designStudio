import { useState } from 'react'

const faqs = [
  ['Where do you work?', 'From our studio in the city, and on site anywhere we can fly in a week. Most homes are in Mumbai, Pune, Bengaluru, Delhi.'],
  ['Do you only do furniture?', 'No. Furniture is the accent. We compose the room around it — joinery, light, stone, and the plan.'],
  ['What does a first conversation cost?', 'Nothing. A thirty-minute call to see if the house and the studio should meet.'],
  ['Who builds it?', 'Our workshop partners. You have one studio lead; we hold the contractors.'],
]

export default function Quiet() {
  const [open, setOpen] = useState(0)
  return (
    <section className="quiet" id="faqs">
      <div className="wrap quiet-grid">
        <div>
          <div className="kicker">Quiet questions</div>
          <h2>Before you write.</h2>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <div className={`faq ${open === i ? 'open' : ''}`} key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>{q}</button>
              {open === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

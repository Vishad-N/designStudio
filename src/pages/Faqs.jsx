import { useState, useEffect } from 'react'
import Seo from '../components/Seo.jsx'
import Layout from '../components/Layout.jsx'
import Key from '../components/Key.jsx'

const FAQ_GROUPS = [
  {
    id: 'working-together',
    label: 'Working together',
    items: [
      { q: 'How do we work together?', a: 'Site visit, brief, and a palette that already belongs to the house. Then plans, materials, and custom joinery.' },
      { q: 'Do you only do furniture?', a: 'No. Furniture is the accent. We compose the room around it — joinery, light, stone, and the plan.' },
      { q: 'What does a first conversation cost?', a: 'Nothing. A thirty-minute call to see if the house and the studio should meet.' },
      { q: 'Do I need a finished plan before we talk?', a: 'Not necessarily. We can start from raw spaces or existing layouts and develop the architectural form.' }
    ]
  },
  {
    id: 'money',
    label: 'Money',
    items: [
      { q: 'What is your fee structure?', a: 'Fees are based on the scope of design, procurement, and project management required for your specific property.' },
      { q: 'Do you charge for design procurement and project management?', a: 'Yes. Design procurement and project management are charged on a transparent fee basis, either as a percentage of the procurement value or as a fixed project fee. This covers sourcing, vetting, ordering, tracking, and coordinating the delivery and installation of furnishings and finishes, as well as overseeing the project timeline, trades, and communications to keep things moving smoothly. The exact approach is outlined in the proposal so expectations are clear from the start.' },
      { q: 'When do we pay?', a: 'Payments are scheduled transparently along project milestones.' },
      { q: 'Do you mark up furniture and contractors?', a: 'No. We pass on trade discounts to you. Our fee is strictly for design and management.' }
    ]
  },
  {
    id: 'time',
    label: 'Time',
    items: [
      { q: 'How long does a typical project take?', a: 'Design phases take 4-6 weeks. Turnkey execution depends on the scale, usually 4-8 months.' },
      { q: 'Can we live in the house during the work?', a: 'It is highly discouraged. Dust, noise, and safety hazards make it impractical for full renovations.' },
      { q: 'What slows a kitchen in Mumbai or Pune?', a: 'Monsoons, society working hours, and custom material procurement times.' }
    ]
  },
  {
    id: 'building',
    label: 'Building',
    items: [
      { q: 'Do you hold the contractors?', a: 'Yes. We hold our workshop partners accountable for quality and timelines.' },
      { q: 'What if I already have a civil team?', a: 'We prefer to work with our vetted teams to ensure finish quality, but we can review your team.' },
      { q: 'Who is on site each week?', a: 'The project architect visits weekly to ensure design fidelity.' }
    ]
  },
  {
    id: 'furniture',
    label: 'Furniture',
    items: [
      { q: 'Can we use pieces we already own?', a: 'Yes, if they fit the new spatial narrative. We will tell you honestly if they do not.' },
      { q: 'Do you design custom joinery only?', a: 'We design custom joinery and source standalone furniture that acts as the room’s accent.' }
    ]
  },
  {
    id: 'cities',
    label: 'Cities',
    items: [
      { q: 'Do you work outside the city?', a: 'Yes, for the right project. We can fly in a week.' },
      { q: 'Where do you work?', a: 'Most homes are in Mumbai, Pune, Bengaluru, Delhi.' },
      { q: 'What is the best way to prepare for our first conversation?', a: 'Bring floor plans if you have them, and an understanding of how you want the space to feel.' }
    ]
  }
];

export default function Faqs() {
  const [activeGroup, setActiveGroup] = useState(FAQ_GROUPS[0].id)
  const [openItems, setOpenItems] = useState(() => {
    const initial = {}
    FAQ_GROUPS.forEach(g => {
      initial[g.id] = 0 // First item open in each group
    })
    return initial
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setActiveGroup(entry.target.id)
        }
      })
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 })

    FAQ_GROUPS.forEach(g => {
      const el = document.getElementById(g.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleItem = (groupId, index) => {
    setOpenItems(prev => ({
      ...prev,
      [groupId]: prev[groupId] === index ? -1 : index
    }))
  }

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_GROUPS.flatMap(g => g.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    })))
  }

  return (
    <Layout>
      <Seo 
        title="FAQs — Quiet questions answered" 
        description="Frequently asked questions about working with Design Studio, our fee structure, timelines, and locations." 
        url="https://dsinterior.in/faqs"
        schema={schema}
      />
      <main className="faqs-page wrap inner-section">
        <div className="faq-hero text-center inner-hero-frame">
          <div className="kicker">QUIET QUESTIONS</div>
          <h1 className="editorial-headline">Before you write.</h1>
          <p className="lead-copy" style={{maxWidth: '600px', margin: '0 auto 40px'}}>
            If the answer is here, send the brief anyway. The house still has to be seen.
          </p>
        </div>

        <nav className="jump-chips">
          {FAQ_GROUPS.map(g => (
            <a 
              key={g.id} 
              href={`#${g.id}`} 
              className={`chip ${activeGroup === g.id ? 'active' : ''}`}
            >
              {g.label}
            </a>
          ))}
        </nav>

        <div className="faqs-content">
          {FAQ_GROUPS.map(group => (
            <div key={group.id} id={group.id} className="faq-group-section">
              {group.items.map((item, i) => (
                <div className={`faq-item ${openItems[group.id] === i ? 'open' : ''}`} key={i}>
                  <button onClick={() => toggleItem(group.id, i)} aria-expanded={openItems[group.id] === i}>
                    {item.q}
                    <span className="faq-icon">+</span>
                  </button>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <aside className="quiet-aside inner-card">
          <div className="quiet-aside-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7a99" strokeWidth="2"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
            <div>
              <strong>We do not quote a full house from photographs.</strong>
              <p>We provide accurate pricing and scope recommendations after an initial consultation and site visit. This ensures the proposal reflects the home, the goals, and the level of finish—without assumptions.</p>
            </div>
          </div>
        </aside>

        <div className="faqs-actions text-center">
          <button className="cta-pill" style={{marginRight: '16px'}}>Book a 30-minute site review</button>
          <a href="#contact" className="contact-btn">Send the brief &rarr;</a>
        </div>
      </main>

      <Key />
    </Layout>
  )
}

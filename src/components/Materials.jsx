import { useState } from 'react'

const MATERIALS = [
  {
    id: 'linen',
    name: 'Belgian linen',
    color: '#cfc6b3',
    photo: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'brass',
    name: 'Aged brass',
    color: '#b0893a',
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'indigo',
    name: 'Indigo limewash',
    color: '#243e7a',
    photo: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'verde',
    name: 'Verde Guatemala',
    color: '#1f4a3a',
    photo: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'microcement',
    name: 'Microcement',
    color: '#b7b3ab',
    photo: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    color: '#b85a38',
    photo: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function Materials() {
  const [activeId, setActiveId] = useState('linen')

  return (
    <section className="materials wrap" id="materials">
      <div className="section-head text-center">
        <div className="kicker" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '11px', color: '#8b97b0', marginBottom: '16px' }}>Materials & Finishes</div>
        <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: '48px' }}>What the house is made of.</h2>
      </div>
      
      <div className="materials-gallery">
        <div className="materials-chips">
          {MATERIALS.map((mat) => (
            <button
              key={mat.id}
              className={`material-chip ${activeId === mat.id ? 'active' : ''}`}
              onClick={() => setActiveId(mat.id)}
            >
              <div 
                className="chip-texture" 
                style={{ background: mat.color }}
              >
                <div className="noise-overlay"></div>
              </div>
              <span>{mat.name}</span>
            </button>
          ))}
        </div>
        
        <div className="materials-stage">
          {MATERIALS.map((mat) => (
            <img
              key={mat.id}
              src={mat.photo}
              alt={mat.name}
              className={`materials-photo ${activeId === mat.id ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

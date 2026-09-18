import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'

export default function Contact() {
  const [activePath, setActivePath] = useState('brief')
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    city: '',
    room: '',
    timeline: '',
    budget: '',
    about: '',
    replyVia: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePillSelect = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate honeypot / rate limit / API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <Layout>
      <main className="contact-page wrap inner-section">
        {/* HERO */}
        <div className="contact-hero text-center inner-hero-frame">
          <div className="kicker">START</div>
          <h1 className="editorial-headline">Begin with the house,<br/>not the inbox.</h1>
          <p className="lead-copy" style={{maxWidth: '600px', margin: '0 auto'}}>
            We reply within two working days. Most first conversations are a site or plan review, not a pitch.
          </p>
        </div>

        {/* TWO PATH CARDS */}
        <div className="path-cards-grid">
          <div 
            className={`path-card ${activePath === 'review' ? 'active' : ''}`}
            onClick={() => setActivePath('review')}
          >
            <h3>Book a 30-minute site review</h3>
            <p>On the plot, or on a video call with plans. Best if the house already exists.</p>
          </div>
          <div 
            className={`path-card ${activePath === 'brief' ? 'active' : ''}`}
            onClick={() => setActivePath('brief')}
          >
            <h3>Send the brief</h3>
            <p>Write first. We will say if we are the right studio.</p>
          </div>
        </div>

        {/* WHITE FORM CARD */}
        <div className="contact-form-card">
          <div className="contact-form-grid">
            {/* LEFT COLUMN */}
            <div className="contact-info-col">
              <h3>What happens next</h3>
              <ul className="next-steps-list">
                <li>We read the brief in two working days</li>
                <li>If it is our kind of house, we set a site or plan review</li>
                <li>After the visit, we confirm scope and fee band</li>
              </ul>
              <div className="quote-aside">
                We do not quote a full house from photographs.
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="contact-fields-col">
              {isSuccess ? (
                <div className="success-state">
                  <h3>The brief is in. We will write within two working days.</h3>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="contact-btn">Message on WhatsApp &rarr;</a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="custom-form">
                  <div className="input-group">
                    <label>Name</label>
                    <input type="text" required onChange={e => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div className="input-group">
                    <label>Email or phone</label>
                    <input type="text" required onChange={e => setFormState({...formState, email: e.target.value})} />
                  </div>
                  <div className="input-group">
                    <label>City</label>
                    <input type="text" placeholder="Mumbai / Pune / Bengaluru / Delhi" onChange={e => setFormState({...formState, city: e.target.value})} />
                  </div>
                  <div className="input-group">
                    <label>The room that needs us</label>
                    <select className="minimal-select" onChange={e => setFormState({...formState, room: e.target.value})}>
                      <option value="">Select...</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Living">Living</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Dining">Dining</option>
                      <option value="Full house">Full house</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="input-group">
                    <label>Timeline</label>
                    <div className="pill-group">
                      {['0–3 months', '3–6 months', '6+ months'].map(opt => (
                        <button type="button" key={opt} className={`form-pill ${formState.timeline === opt ? 'selected' : ''}`} onClick={() => handlePillSelect('timeline', opt)}>{opt}</button>
                      ))}
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Budget <span className="optional">(optional)</span></label>
                    <div className="pill-group">
                      {['Talk after site visit', 'A single room', 'A full home'].map(opt => (
                        <button type="button" key={opt} className={`form-pill ${formState.budget === opt ? 'selected' : ''}`} onClick={() => handlePillSelect('budget', opt)}>{opt}</button>
                      ))}
                    </div>
                  </div>

                  {activePath === 'brief' && (
                    <div className="input-group slide-down">
                      <label>A sentence about the house</label>
                      <textarea rows="3" onChange={e => setFormState({...formState, about: e.target.value})}></textarea>
                    </div>
                  )}

                  <div className="input-group">
                    <label>Plans or room photos <span className="optional">(optional, jpg/pdf, max 10MB)</span></label>
                    <div className="file-upload-box">
                      <input type="file" id="file" className="file-input" accept=".jpg,.jpeg,.png,.pdf" />
                      <label htmlFor="file" className="file-label">Click to attach</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>How should we reply</label>
                    <div className="pill-group">
                      {['Email', 'Phone', 'WhatsApp'].map(opt => (
                        <button type="button" key={opt} className={`form-pill ${formState.replyVia === opt ? 'selected' : ''}`} onClick={() => handlePillSelect('replyVia', opt)}>{opt}</button>
                      ))}
                    </div>
                  </div>

                  {/* Honeypot hidden field */}
                  <input type="text" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />

                  <div className="contact-form-actions">
                    <button type="submit" className="submit-btn full-width type1" disabled={isSubmitting}>
                      <span className="btn-txt">{isSubmitting ? 'Sending...' : (activePath === 'review' ? 'Request a review' : 'Send the brief')}</span>
                    </button>
                    <p className="helper-text text-center" style={{marginTop: '16px'}}>No commitment until we agree on the scope.</p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* STUDIO STRIP */}
          <div className="studio-strip">
            <div className="strip-item">
              <strong>Studio</strong>
              <span>by appointment</span>
            </div>
            <div className="strip-item strip-cities">
              <span>Mumbai</span><span className="dot">&middot;</span>
              <span>Pune</span><span className="dot">&middot;</span>
              <span>Bengaluru</span><span className="dot">&middot;</span>
              <span>Delhi</span>
            </div>
            <div className="strip-item strip-contact text-right">
              <a href="mailto:hello@designstudio.studio">hello@designstudio.studio</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span>WhatsApp for site photos</span>
            </div>
          </div>
        </div>

        {/* MINI FAQ */}
        <div className="mini-faq">
          <Link to="/faqs#money" className="mini-faq-link">What does a first conversation cost?</Link>
          <Link to="/faqs#working-together" className="mini-faq-link">Do you only do furniture?</Link>
          <Link to="/faqs#building" className="mini-faq-link">Who builds it?</Link>
          <Link to="/faqs" className="mini-faq-all">All quiet questions &rarr;</Link>
        </div>
      </main>
    </Layout>
  )
}

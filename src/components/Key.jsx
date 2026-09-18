import { useState } from 'react'

export default function Key() {
  const [activeTimeline, setActiveTimeline] = useState('ASAP')

  return (
    <section className="start-section" id="contact">
      <div className="wrap">
        <div className="start-card">
          <div className="start-left">
            <h2 className="start-headline">Begin with<br/>the house,<br/>not the inbox.</h2>
            <hr className="start-divider" />
            <div className="start-booking">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <div>
                Book a 30-minute<br/>
                <em>site review</em>
              </div>
            </div>
            <hr className="start-divider-light" />
          </div>

          <form className="start-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>NAME</label>
              <input type="text" placeholder="Your name" required />
            </div>
            
            <div className="form-group">
              <label>CITY</label>
              <input type="text" placeholder="Your city" required />
            </div>

            <div className="form-group">
              <label>THE ROOM THAT NEEDS US</label>
              <select defaultValue="" required>
                <option value="" disabled>Select the room</option>
                <option value="kitchen">Kitchen</option>
                <option value="living">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="full">Full House</option>
              </select>
            </div>

            <div className="form-group">
              <label>TIMELINE</label>
              <div className="timeline-pills">
                {['ASAP', '1-2 Months', '3-6 Months', '6+ Months'].map(label => (
                  <button 
                    key={label}
                    type="button" 
                    className={`timeline-btn ${activeTimeline === label ? 'active' : ''}`}
                    onClick={() => setActiveTimeline(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="submit-btn type1">
              <span className="btn-txt">Send the brief</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div>
          <div className="brand" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logo.png" alt="Design Studio Logo" style={{ height: '32px', marginRight: '12px', objectFit: 'contain' }} />
            <div>design <span>studio.</span></div>
          </div>
          <p>Interiors with architectural form — since 2015.</p>
        </div>
        <div>
          <p>dsaraogi8283@gmail.com</p>
          <p>+91 91316 76785</p>
        </div>
        <nav>
          <a href="#home">Home</a> · <a href="#spaces">Spaces</a> · <a href="#process">Process</a>
        </nav>
      </div>
    </footer>
  )
}

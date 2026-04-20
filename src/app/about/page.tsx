export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem' }}>☯</div>
          <h1 style={{ fontSize: '2rem', color: '#1a4d2e', margin: 0 }}>About Dao Yuan</h1>
        </div>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1a4d2e', marginTop: 0 }}>Our Mission</h2>
          <p style={{ color: '#666', lineHeight: 1.7 }}>
            Dao Yuan is dedicated to preserving and sharing Taoist wisdom with the global community. 
            We provide authentic prayer services and Bazi destiny analysis for overseas Chinese and Eastern culture enthusiasts.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1a4d2e', marginTop: 0 }}>Our Services</h2>
          <div style={{ marginBottom: '1rem' }}>
            <strong>🕯️ Taoist Prayer Rituals</strong>
            <p style={{ color: '#666', margin: '0.5rem 0' }}>Authentic ceremonies by ordained priests with photo/video confirmation.</p>
          </div>
          <div>
            <strong>☯️ Bazi Destiny Analysis</strong>
            <p style={{ color: '#666', margin: '0.5rem 0' }}>AI-powered interpretation based on traditional Chinese metaphysics.</p>
          </div>
        </div>

        <div style={{ background: '#fef3c7', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', border: '2px solid #c9a227' }}>
          <h2 style={{ color: '#92400e', marginTop: 0 }}>⚠️ Disclaimer</h2>
          <p style={{ color: '#92400e', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Our services are for spiritual guidance purposes only. Results may vary. We encourage rational thinking and personal responsibility.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://wa.me/8615607671586" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#1a4d2e', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>💬 Contact via WhatsApp</a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}

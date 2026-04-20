import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f5f0e6, #ebe5d8)' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>☯</div>
        <h1 style={{ fontSize: '4rem', color: '#1a4d2e', margin: '0 0 0.5rem 0', fontFamily: 'Georgia, serif' }}>道 缘</h1>
        <p style={{ fontSize: '1.5rem', color: '#c9a227', margin: '0 0 0.5rem 0' }}>DAO YUAN</p>
        <p style={{ color: '#5a8f7b' }}>Your Gateway to Taoist Wisdom</p>
      </section>

      {/* Services */}
      <section style={{ padding: '3rem 1rem', maxWidth: '60rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#1a4d2e', textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <Link href="/bazi" style={{ background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', display: 'block', borderTop: '3px solid #c9a227' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>☯</div>
            <h3 style={{ fontSize: '1.5rem', color: '#1a4d2e', marginBottom: '0.5rem' }}>八字命理</h3>
            <p style={{ color: '#5a8f7b', marginBottom: '0.5rem' }}>Bazi Destiny Analysis</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Discover your life path through the ancient Chinese art of Bazi.</p>
            <span style={{ color: '#c9a227' }}>Free Analysis →</span>
          </Link>
          
          <Link href="/prayer" style={{ background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', display: 'block', borderTop: '3px solid #c9a227' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>🕯️</div>
            <h3 style={{ fontSize: '1.5rem', color: '#1a4d2e', marginBottom: '0.5rem' }}>祈福法事</h3>
            <p style={{ color: '#5a8f7b', marginBottom: '0.5rem' }}>Taoist Prayer Services</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Authentic prayer rituals by ordained Taoist priests.</p>
            <span style={{ color: '#c9a227' }}>Explore →</span>
          </Link>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: '3rem 1rem', background: 'rgba(26,77,46,0.05)' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1a4d2e', textAlign: 'center', marginBottom: '2rem' }}>Why Choose Dao Yuan?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem' }}>🏛️</div>
              <h3 style={{ color: '#1a4d2e', margin: '0.5rem 0' }}>Authentic Temples</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Rituals at legitimate Taoist temples</p>
            </div>
            <div>
              <div style={{ fontSize: '2rem' }}>📷</div>
              <h3 style={{ color: '#1a4d2e', margin: '0.5rem 0' }}>Photo Confirmation</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Receive photos and videos</p>
            </div>
            <div>
              <div style={{ fontSize: '2rem' }}>🌍</div>
              <h3 style={{ color: '#1a4d2e', margin: '0.5rem 0' }}>Global Service</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Serving seekers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', maxWidth: '40rem', margin: '0 auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1a4d2e', marginBottom: '1rem' }}>Begin Your Spiritual Journey</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bazi" style={{ background: '#1a4d2e', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>☯ Free Bazi Analysis</Link>
            <Link href="/prayer" style={{ background: '#c9a227', color: '#1a1a1a', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>🕯️ Prayer Services</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a4d2e', color: 'white', padding: '2rem 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>☯ 道 缘 ☯</p>
        <p style={{ color: '#c9a227', fontSize: '0.9rem' }}>© 2026 Dao Yuan</p>
      </footer>
    </div>
  )
}

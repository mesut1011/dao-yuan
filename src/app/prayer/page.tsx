export default function PrayerPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6' }}>
      <div style={{ background: '#1a4d2e', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>🕯️</div>
        <h1 style={{ fontSize: '2.5rem', color: 'white', margin: '0.5rem 0' }}>祈福法事</h1>
        <p style={{ color: '#c9a227' }}>Taoist Prayer Services</p>
      </div>

      <div style={{ background: '#c9a227', padding: '1rem', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#1a4d2e' }}>All Services: <strong style={{ fontSize: '1.5rem' }}>$299</strong></p>
      </div>

      <div style={{ padding: '2rem 1rem', maxWidth: '50rem', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a4d2e' }}>Select Your Prayer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {[
            { icon: '💚', title: 'Health', cn: '健康祈福' },
            { icon: '💼', title: 'Career', cn: '事业祈福' },
            { icon: '💰', title: 'Wealth', cn: '财运祈福' },
            { icon: '💕', title: 'Love', cn: '姻缘祈福' },
            { icon: '📚', title: 'Academic', cn: '学业祈福' },
            { icon: '🕊️', title: 'Peace', cn: '平安祈福' },
            { icon: '🕯️', title: 'Ancestor', cn: '祭祖超度' },
            { icon: '🙏', title: 'Custom', cn: '定制法事' },
          ].map(p => (
            <a key={p.title} href={`https://wa.me/8615607671586?text=Prayer Request: ${p.title} (${p.cn})`} target="_blank" rel="noopener noreferrer" style={{ background: 'white', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center', textDecoration: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{p.icon}</div>
              <div style={{ fontWeight: 'bold', color: '#1a4d2e', fontSize: '0.9rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>{p.cn}</div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ padding: '2rem 1rem', maxWidth: '40rem', margin: '0 auto' }}>
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1a4d2e', textAlign: 'center' }}>🙏 How It Works</h3>
          <ol style={{ color: '#666', lineHeight: 2 }}>
            <li>Click a prayer type above to contact us via WhatsApp</li>
            <li>Provide your name, birth date, and prayer request</li>
            <li>Confirm payment ($299)</li>
            <li>Receive photos/videos after the ritual</li>
          </ol>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
      </div>
    </div>
  )
}

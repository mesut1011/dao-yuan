const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

function calculateBazi(year: number, month: number, day: number, hour: number) {
  return {
    year: { gan: tianGan[(year - 4) % 10], zhi: diZhi[(year - 4) % 12] },
    month: { gan: tianGan[(year * 12 + month + 3) % 10], zhi: diZhi[(month + 1) % 12] },
    day: { gan: tianGan[(year * 365 + month * 30 + day) % 10], zhi: diZhi[(year * 365 + month * 30 + day) % 12] },
    hour: { gan: tianGan[(year * 365 + month * 30 + day) % 10], zhi: diZhi[Math.floor((hour + 1) / 2) % 12] },
  }
}

export default async function ResultPage({ searchParams }: { searchParams: Promise<{ name?: string; birthDate?: string; birthHour?: string }> }) {
  const params = await searchParams
  const birthDate = params.birthDate || '2000-01-01'
  const birthHour = params.birthHour || '12'
  
  const [year, month, day] = birthDate.split('-').map(Number)
  const hour = parseInt(birthHour) || 12
  const bazi = calculateBazi(year, month, day, hour)

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#1a4d2e' }}>Your Bazi Chart</h1>
        
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', margin: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
            {['Year', 'Month', 'Day', 'Hour'].map((label, i) => {
              const pillar = [bazi.year, bazi.month, bazi.day, bazi.hour][i]
              return (
                <div key={label}>
                  <div style={{ background: '#1a4d2e', color: 'white', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}>{label}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', padding: '0.5rem' }}>{pillar.gan}</div>
                  <div style={{ padding: '0.25rem' }}>{pillar.zhi}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', margin: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1a4d2e', marginTop: 0 }}>Basic Analysis</h2>
          <p style={{ lineHeight: 1.7, color: '#666' }}>
            Your Day Master is <strong>{bazi.day.gan}</strong>, representing your core personality. 
            The combination of Heavenly Stems and Earthly Branches in your chart reveals your unique destiny pattern.
          </p>
          <p style={{ lineHeight: 1.7, color: '#666' }}>
            For a detailed analysis covering career, wealth, and relationships, please contact us via WhatsApp.
          </p>
        </div>

        <div style={{ background: '#fef3c7', borderRadius: '1rem', padding: '2rem', textAlign: 'center', border: '2px solid #c9a227' }}>
          <p style={{ color: '#1a4d2e', marginBottom: '1rem' }}>Want detailed analysis?</p>
          <a href="https://wa.me/8615607671586?text=Hi, I want a detailed Bazi report." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>💬 Chat on WhatsApp</a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}

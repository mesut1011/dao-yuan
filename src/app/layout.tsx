import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '道缘 Dao Yuan - Taoist Prayer & Destiny Analysis',
  description: 'Authentic Taoist prayer services and Bazi destiny analysis for overseas Chinese and Eastern culture enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh' }}>
        {/* Navigation */}
        <nav style={{ 
          background: 'linear-gradient(135deg, #1a4d2e 0%, #2d5a4a 100%)',
          padding: '1rem',
          borderBottom: '3px solid #c9a227'
        }}>
          <div style={{ 
            maxWidth: '72rem', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem' }}>☯</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', fontFamily: 'Georgia, serif' }}>
                道<span style={{ color: '#c9a227' }}>缘</span>
              </span>
            </a>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="/bazi" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.color = '#c9a227'}
                onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}>
                ☯ Bazi
              </a>
              <a href="/prayer" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.color = '#c9a227'}
                onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}>
                🕯️ Prayer
              </a>
              <a href="/about" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.color = '#c9a227'}
                onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}>
                About
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

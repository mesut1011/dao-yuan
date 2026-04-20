import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dao Yuan - Taoist Prayer & Destiny Analysis',
  description: 'Authentic Taoist prayer services and Bazi destiny analysis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ background: '#1a4d2e', padding: '1rem', borderBottom: '3px solid #c9a227' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
              ☯ <span style={{ color: '#c9a227' }}>道缘</span>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/bazi" style={{ color: '#d1d5db', textDecoration: 'none' }}>Bazi</a>
              <a href="/prayer" style={{ color: '#d1d5db', textDecoration: 'none' }}>Prayer</a>
              <a href="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

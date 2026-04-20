import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dao Yuan 道缘 - Taoist Prayer & Destiny Analysis',
  description: 'Authentic Taoist prayer services and Bazi destiny analysis for overseas Chinese and Eastern culture enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <nav style={{ backgroundColor: '#1a4d2e', padding: '1rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              道缘 <span style={{ color: '#c9a227' }}>Dao Yuan</span>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/bazi" style={{ color: '#d1d5db', textDecoration: 'none' }}>Bazi Analysis</a>
              <a href="/prayer" style={{ color: '#d1d5db', textDecoration: 'none' }}>Prayer Services</a>
              <a href="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <nav className="site-nav">
          <div className="container nav-inner">
            <Link href="/" className="brand">
              <span className="brand-mark">AI</span>
              <span>{siteConfig.shortName}</span>
            </Link>
            <div className="nav-links">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

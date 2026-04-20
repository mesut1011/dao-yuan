import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '道缘 Dao Yuan - 传承道教文化，指引人生方向',
  description: '道缘是一个专业的道教命理平台，提供八字命理分析和祈福服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-dao-green text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">☯</span>
                <span className="text-xl font-serif font-bold">道缘</span>
                <span className="text-dao-gold text-sm">Dao Yuan</span>
              </Link>
              
              {/* Nav Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="hover:text-dao-gold transition-colors">首页</Link>
                <Link href="/bazi" className="hover:text-dao-gold transition-colors">八字命理</Link>
                <Link href="/prayer" className="hover:text-dao-gold transition-colors">祈福服务</Link>
                <Link href="/about" className="hover:text-dao-gold transition-colors">关于</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-dao-dark text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-4">
              <span className="text-2xl">☯</span>
            </div>
            <p className="text-dao-gold font-serif">道缘 Dao Yuan</p>
            <p className="text-sm text-gray-400 mt-2">
              传承道教文化，指引人生方向
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © 2024 道缘. 命理测算仅供参考。
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-dao-green via-dao-dark to-dao-green"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(201, 162, 39, 0.1) 0%, transparent 50%)'
        }}
      >
        <div className="text-center text-white px-4">
          <div className="text-6xl mb-6">☯</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            <span className="text-dao-gold">道</span>缘
          </h1>
          <p className="text-xl md:text-2xl text-dao-gold mb-2">Dao Yuan</p>
          <p className="text-lg md:text-xl text-gray-300 mt-6">
            传承道教文化，指引人生方向
          </p>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-20 h-px bg-dao-gold"></div>
            <div className="w-3 h-3 border-2 border-dao-gold rotate-45"></div>
            <div className="w-20 h-px bg-dao-gold"></div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-center font-serif text-dao-green mb-12">
          命理服务
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 八字命理 Card */}
          <Link href="/bazi" className="group">
            <div className="card-dao text-center hover:border-dao-gold transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🎴
              </div>
              <h3 className="text-2xl font-serif text-dao-green mb-3">
                八字命理
              </h3>
              <p className="text-gray-600 mb-4">
                基于中国传统八字命理，通过出生时间推算命盘，
                解读人生运势、性格特点与命运走向
              </p>
              <div className="text-dao-gold font-semibold group-hover:translate-x-2 transition-transform inline-block">
                开始测算 →
              </div>
            </div>
          </Link>

          {/* 祈福服务 Card */}
          <Link href="/prayer" className="group">
            <div className="card-dao text-center hover:border-dao-gold transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🕯️
              </div>
              <h3 className="text-2xl font-serif text-dao-green mb-3">
                祈福服务
              </h3>
              <p className="text-gray-600 mb-4">
                为您提供在线祈福，祈求平安、健康、姻缘、财运，
                传承千年道教祈福文化
              </p>
              <div className="text-dao-gold font-semibold group-hover:translate-x-2 transition-transform inline-block">
                前往祈福 →
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-dao-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-center font-serif text-dao-green mb-12">
            道缘特色
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl text-dao-green mb-2">传承经典</h3>
              <p className="text-gray-600">遵循传统命理典籍，融合千年智慧</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl text-dao-green mb-2">AI 解读</h3>
              <p className="text-gray-600">智能分析，深度解读命盘玄机</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl text-dao-green mb-2">隐私保护</h3>
              <p className="text-gray-600">您的信息仅用于本次测算</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

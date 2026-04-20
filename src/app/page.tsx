import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen ink-wash-bg cloud-pattern">
      {/* Hero Section with Taiji */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 yin-yang-spin">☯</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-5">卦</div>
        <div className="absolute top-1/4 right-20 text-4xl opacity-10">道</div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Taiji Symbol */}
          <div className="flex justify-center mb-8">
            <div className="taiji yin-yang-spin"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl title-brush text-[#1a4d2e] mb-4">
            道 缘
          </h1>
          <p className="text-2xl text-[#c9a227] mb-2 tracking-widest">DAO YUAN</p>
          <p className="text-xl text-[#5a8f7b] mb-8 tracking-wide">
            Your Gateway to Taoist Wisdom
          </p>
          
          {/* Ink stroke decoration */}
          <div className="ink-stroke inline-block mb-8">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              道法自然，天人合一<br/>
              Authentic Taoist prayer services and destiny analysis for seekers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section divider */}
          <div className="section-divider text-2xl text-[#c9a227] mb-12">☯</div>
          
          <h2 className="text-3xl title-brush text-center text-[#1a4d2e] mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bazi Card */}
            <Link href="/bazi" className="tao-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="text-6xl yin-yang-spin">☯</div>
                <div className="flex-1">
                  <h3 className="text-2xl title-brush text-[#1a4d2e] mb-2 group-hover:text-[#c9a227] transition-colors">
                    八字命理
                  </h3>
                  <p className="text-lg text-[#5a8f7b] mb-1">Bazi Destiny Analysis</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover your life path through the ancient Chinese art of Bazi (Four Pillars). 
                    Understand your personality, career potential, relationships, and destiny.
                  </p>
                  <span className="inline-block mt-4 text-[#c9a227] font-medium">
                    Free Analysis →
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Prayer Card */}
            <Link href="/prayer" className="tao-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="text-6xl">🕯️</div>
                <div className="flex-1">
                  <h3 className="text-2xl title-brush text-[#1a4d2e] mb-2 group-hover:text-[#c9a227] transition-colors">
                    祈福法事
                  </h3>
                  <p className="text-lg text-[#5a8f7b] mb-1">Taoist Prayer Services</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Authentic prayer rituals performed by ordained Taoist priests. 
                    Health, wealth, career, love, ancestor memorials, and more.
                  </p>
                  <span className="inline-block mt-4 text-[#c9a227] font-medium">
                    Explore Services →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-[#1a4d2e]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider text-2xl text-[#c9a227] mb-12">☰</div>
          
          <h2 className="text-3xl title-brush text-center text-[#1a4d2e] mb-12">Why Choose Dao Yuan?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="tao-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-[#1a4d2e] mb-2">正 观 法 脉</h3>
              <p className="text-sm text-gray-600">Authentic Temples</p>
              <p className="text-gray-500 text-sm mt-2">All rituals at legitimate Taoist temples by ordained priests</p>
            </div>
            
            <div className="tao-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📷</div>
              <h3 className="font-bold text-[#1a4d2e] mb-2">实 况 反 馈</h3>
              <p className="text-sm text-gray-600">Photo Confirmation</p>
              <p className="text-gray-500 text-sm mt-2">Receive photos and videos of your completed ceremony</p>
            </div>
            
            <div className="tao-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-[#1a4d2e] mb-2">遍 及 海 外</h3>
              <p className="text-sm text-gray-600">Global Service</p>
              <p className="text-gray-500 text-sm mt-2">Serving overseas Chinese and Eastern culture enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-container rounded-2xl p-8">
            <p className="text-2xl title-brush text-[#1a4d2e] mb-4">
              「道可道，非常道」
            </p>
            <p className="text-gray-600 italic">
              "The Tao that can be told is not the eternal Tao."
            </p>
            <p className="text-sm text-[#5a8f7b] mt-2">— Tao Te Ching, Chapter 1</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="tao-card rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4 yin-yang-spin inline-block">☯</div>
            <h2 className="text-3xl title-brush text-[#1a4d2e] mb-4">
              Begin Your Spiritual Journey
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Whether you seek guidance through destiny analysis or blessings through traditional prayer rituals, 
              Dao Yuan is here to serve you with authenticity and sincerity.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/bazi" className="btn-tao">
                ☯ Free Bazi Analysis
              </Link>
              <Link href="/prayer" className="btn-tao btn-gold">
                🕯️ Prayer Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d2e] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-3xl mb-4">☯ 道 缘 ☯</div>
          <p className="text-[#c9a227] mb-4">心诚则灵 · 天道酬勤</p>
          <p className="text-sm text-green-200 opacity-80">
            © 2026 Dao Yuan. For spiritual guidance purposes only. Sincere faith brings blessings.
          </p>
        </div>
      </footer>
    </div>
  )
}

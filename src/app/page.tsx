import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Hero */}
      <section className="bg-green-700 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">道缘 Dao Yuan</h1>
        <p className="text-xl text-amber-300 mb-2">Your Gateway to Taoist Wisdom</p>
        <p className="text-green-200 max-w-2xl mx-auto">
          Authentic Taoist prayer services and destiny analysis for the global Chinese community and seekers of Eastern wisdom.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/bazi" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition group">
            <div className="text-5xl mb-4">☯️</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-amber-600">Bazi Destiny Analysis</h3>
            <p className="text-gray-600 mb-4">
              Discover your life path through the ancient Chinese art of Bazi (Four Pillars). 
              Understand your personality, career potential, relationships, and destiny.
            </p>
            <span className="text-green-600 font-medium">Try Free Analysis →</span>
          </Link>
          
          <Link href="/prayer" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition group">
            <div className="text-5xl mb-4">🕯️</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-amber-600">Taoist Prayer Services</h3>
            <p className="text-gray-600 mb-4">
              Authentic prayer rituals performed by ordained Taoist priests. 
              Health, wealth, career, love, ancestor memorials, and more.
            </p>
            <span className="text-green-600 font-medium">Explore Services →</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Why Choose Dao Yuan?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-green-800 mb-2">Authentic Temples</h3>
              <p className="text-gray-600 text-sm">All rituals performed at legitimate Taoist temples by ordained priests</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-green-800 mb-2">Photo Confirmation</h3>
              <p className="text-gray-600 text-sm">Receive photos and videos of your completed ceremony</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-green-800 mb-2">Global Service</h3>
              <p className="text-gray-600 text-sm">Serving overseas Chinese and Eastern culture enthusiasts worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey</h2>
        <p className="text-green-200 mb-8 max-w-2xl mx-auto">
          Whether you seek guidance through destiny analysis or blessings through traditional prayer rituals, 
          Dao Yuan is here to serve you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/bazi" className="px-8 py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-amber-100 transition">
            Free Bazi Analysis
          </Link>
          <Link href="/prayer" className="px-8 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition">
            Prayer Services
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-200 py-8 px-4 text-center text-sm">
        <p>© 2026 Dao Yuan. For spiritual guidance purposes. Sincere faith brings blessings.</p>
      </footer>
    </div>
  )
}

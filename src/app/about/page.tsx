export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">☯️</div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">About Dao Yuan</h1>
          <p className="text-gray-600">Your Gateway to Taoist Wisdom</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dao Yuan (道缘) is dedicated to preserving and sharing the profound wisdom of Taoist culture 
            with the global community. We serve overseas Chinese communities and anyone interested in 
            traditional Chinese philosophy and spirituality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our platform bridges ancient Taoist practices with modern technology, making authentic 
            prayer rituals and destiny analysis accessible to seekers worldwide, regardless of location.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Our Services</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl">🕯️</div>
              <div>
                <h3 className="font-bold text-green-700">Taoist Prayer Rituals</h3>
                <p className="text-gray-600 text-sm">Authentic ceremonies performed by ordained Taoist priests at legitimate temples. Receive photo/video confirmation of your ritual.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">☯️</div>
              <div>
                <h3 className="font-bold text-green-700">Bazi Destiny Analysis</h3>
                <p className="text-gray-600 text-sm">AI-powered interpretation of your Four Pillars (八字) based on traditional Chinese metaphysics. Understand your personality, career path, and life destiny.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Authenticity Guarantee</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>All rituals performed by certified Taoist priests</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Ceremonies conducted at registered Taoist temples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Photo and video documentation provided for every service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Transparent pricing with no hidden fees</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">⚠️ Disclaimer</h2>
          <p className="text-amber-700 text-sm leading-relaxed">
            Dao Yuan's services are intended for spiritual guidance and cultural education purposes only. 
            Our Bazi analysis and prayer services are based on traditional Chinese philosophy and should 
            not be considered as medical, legal, or financial advice. Results may vary and are influenced 
            by personal effort and circumstances. We encourage rational thinking and personal responsibility 
            in all life decisions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For inquiries about our services or to schedule a consultation:
          </p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-green-800 font-medium">📱 WhatsApp</p>
            <p className="text-gray-600">Available for chat support</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-green-700 hover:text-amber-600">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}

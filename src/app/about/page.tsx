export default function AboutPage() {
  return (
    <div className="min-h-screen ink-wash-bg py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 yin-yang-spin inline-block">☯</div>
          <h1 className="text-4xl title-brush text-[#1a4d2e] mb-2">关于道缘</h1>
          <p className="text-xl text-[#5a8f7b]">About Dao Yuan</p>
        </div>

        {/* Mission */}
        <div className="tao-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">☯</span>
            <h2 className="text-xl title-brush text-[#1a4d2e]">道法自然 Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            道缘（Dao Yuan）致力于传承和弘扬道教文化，为海外华人及对东方文化感兴趣的人士提供便捷、专业的线上祈福和命理分析服务。
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dao Yuan is dedicated to preserving and sharing the profound wisdom of Taoist culture 
            with the global community. We bridge ancient Taoist practices with modern technology, 
            making authentic prayer rituals and destiny analysis accessible worldwide.
          </p>
        </div>

        {/* Services */}
        <div className="tao-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">☰</span>
            <h2 className="text-xl title-brush text-[#1a4d2e]">服务项目 Our Services</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="text-3xl">🕯️</div>
              <div>
                <h3 className="font-bold text-[#1a4d2e] text-lg">祈福法事 Prayer Rituals</h3>
                <p className="text-gray-600 text-sm mt-1">
                  正观道长主持，真实法事，照片视频反馈。<br/>
                  Authentic ceremonies performed by ordained Taoist priests with photo/video confirmation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-3xl">☯</div>
              <div>
                <h3 className="font-bold text-[#1a4d2e] text-lg">八字命理 Bazi Analysis</h3>
                <p className="text-gray-600 text-sm mt-1">
                  AI 智能排盘，结合传统命理学解读。<br/>
                  AI-powered interpretation based on traditional Chinese metaphysics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Authenticity */}
        <div className="tao-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏛️</span>
            <h2 className="text-xl title-brush text-[#1a4d2e]">真实保障 Authenticity Guarantee</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227]">✓</span>
              <span>正规道观，认证道长 / Certified Taoist priests at registered temples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227]">✓</span>
              <span>法事全程拍照录像 / Full photo and video documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227]">✓</span>
              <span>专人疏文撰写 / Personalized prayer scrolls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227]">✓</span>
              <span>透明定价，无隐藏费用 / Transparent pricing, no hidden fees</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="scroll-container rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⚠️</span>
            <h2 className="text-xl title-brush text-amber-800">免责声明 Disclaimer</h2>
          </div>
          <p className="text-amber-700 text-sm leading-relaxed">
            本站服务旨在弘扬道教文化，仅供信仰参考。命理分析基于传统易学理论，不构成医疗、法律或投资建议。
            结果因人而异，受个人努力和环境影响。我们鼓励理性思考，命运掌握在自己手中。
          </p>
          <p className="text-amber-600 text-sm mt-3 italic">
            Dao Yuan's services are intended for spiritual guidance and cultural education purposes only.
            Results may vary. We encourage rational thinking and personal responsibility.
          </p>
        </div>

        {/* Contact */}
        <div className="tao-card rounded-2xl p-8 mb-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-xl title-brush text-[#1a4d2e] mb-4">联系我们 Contact Us</h2>
          <p className="text-gray-600 mb-4">
            有任何疑问或需要咨询，欢迎通过 WhatsApp 联系我们
          </p>
          <a 
            href="https://wa.me/8615607671586" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-tao btn-gold"
          >
            <span className="text-xl">💬</span> Chat on WhatsApp
          </a>
        </div>

        {/* Quote */}
        <div className="text-center mb-8">
          <p className="text-2xl title-brush text-[#1a4d2e]">「道法自然，天人合一」</p>
          <p className="text-gray-500 mt-2 italic">"The Tao follows its own natural way."</p>
        </div>

        {/* Back */}
        <div className="text-center">
          <a href="/" className="text-[#1a4d2e] hover:text-[#c9a227] transition">← 返回首页 Back to Home</a>
        </div>
      </div>
    </div>
  )
}

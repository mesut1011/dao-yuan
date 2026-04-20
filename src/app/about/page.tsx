import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dao-cream to-dao-light">
      {/* Header */}
      <div className="bg-dao-green py-12 text-center">
        <h1 className="text-4xl font-serif text-white mb-2">☯ 关于道缘</h1>
        <p className="text-dao-gold">传承千年道教文化</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="card-dao mb-8">
          <h2 className="text-2xl text-dao-green font-serif mb-4">平台简介</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            道缘（Dao Yuan）是一个致力于传承和发扬中国传统道教文化的命理平台。
            我们融合古老的八字命理智慧与现代科技，为用户提供专业的命理分析服务。
          </p>
          <p className="text-gray-700 leading-relaxed">
            平台名称取自「道法自然，缘分天定」之意，寓意帮助有缘人探寻人生方向，
            指引命运之路。
          </p>
        </section>

        {/* Services */}
        <section className="card-dao mb-8">
          <h2 className="text-2xl text-dao-green font-serif mb-4">服务内容</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-dao-gold mr-3">☯</span>
              <div>
                <strong className="text-dao-green">八字命理</strong>
                <p className="text-gray-600 text-sm">
                  通过出生时间推算命盘，分析性格、事业、感情、健康等人生各方面
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-dao-gold mr-3">🕯️</span>
              <div>
                <strong className="text-dao-green">祈福服务</strong>
                <p className="text-gray-600 text-sm">
                  提供多种祈福类型，祈求平安、健康、姻缘、财运等
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Philosophy */}
        <section className="card-dao mb-8">
          <h2 className="text-2xl text-dao-green font-serif mb-4">文化理念</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-dao-gold pl-4 italic text-gray-700">
              「道法自然，天人合一」
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              道教文化强调人与自然的和谐统一，认为人应该顺应自然规律生活。
              我们希望通过命理服务，帮助用户更好地认识自己，顺势而为，创造美好人生。
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="card-dao bg-red-50 border border-red-200">
          <h2 className="text-xl text-red-700 font-serif mb-4">重要声明</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• 本平台提供的命理分析仅供娱乐参考</li>
            <li>• 命运掌握在自己手中，不应过分依赖命理结果</li>
            <li>• 祈福服务是一种心理寄托，不能替代实际努力</li>
            <li>• 我们鼓励用户积极面对生活，创造自己的命运</li>
          </ul>
        </section>
      </div>

      {/* Back Link */}
      <div className="text-center pb-12">
        <Link href="/" className="text-dao-green hover:text-dao-gold transition-colors">
          ← 返回首页
        </Link>
      </div>
    </div>
  )
}

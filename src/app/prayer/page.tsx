import Link from 'next/link'

export default function PrayerPage() {
  const prayerTypes = [
    {
      id: 'health',
      icon: '💚',
      title: '健康祈福',
      description: '祈求身体健康、疾病痊愈',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'career',
      icon: '💼',
      title: '事业祈福',
      description: '祈求事业顺利、升职加薪',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'love',
      icon: '💕',
      title: '姻缘祈福',
      description: '祈求姻缘美满、感情和睦',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'wealth',
      icon: '💰',
      title: '财运祈福',
      description: '祈求财源广进、富足安康',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 'academic',
      icon: '📚',
      title: '学业祈福',
      description: '祈求学业进步、金榜题名',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'peace',
      icon: '🕊️',
      title: '平安祈福',
      description: '祈求出入平安、一切顺遂',
      color: 'from-gray-400 to-gray-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dao-cream to-dao-light">
      {/* Header */}
      <div className="bg-dao-green py-12 text-center">
        <h1 className="text-4xl font-serif text-white mb-2">🕯️ 祈福服务</h1>
        <p className="text-dao-gold">心诚则灵，心想事成</p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 leading-relaxed">
          道教祈福源远流长，是中华民族祈求平安、吉祥的重要传统。
          在此诚心祈福，愿诸天神明庇佑，心想事成。
        </p>
      </div>

      {/* Prayer Types */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayerTypes.map((type) => (
            <div key={type.id} className="card-dao group cursor-pointer hover:scale-105 transition-transform">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${type.color} 
                            flex items-center justify-center text-3xl mb-4 mx-auto
                            group-hover:animate-pulse`}>
                {type.icon}
              </div>
              <h3 className="text-xl text-dao-green font-serif text-center mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {type.description}
              </p>
              <div className="mt-4 text-center">
                <button className="px-6 py-2 bg-dao-gold/20 text-dao-green rounded-full
                                 hover:bg-dao-gold hover:text-white transition-all">
                  诚心祈福
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-dao-light rounded-xl p-6 text-center">
          <h3 className="text-lg text-dao-green font-serif mb-3">祈福须知</h3>
          <ul className="text-gray-600 text-sm space-y-2 text-left max-w-md mx-auto">
            <li>• 祈福需心诚意正，方能感应天地</li>
            <li>• 祈福结果仅供参考，信而不迷</li>
            <li>• 命运掌握在自己手中，努力方能改变命运</li>
          </ul>
        </div>
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

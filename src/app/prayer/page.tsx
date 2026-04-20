'use client'

import { useState } from 'react'
import Link from 'next/link'

const prayerTypes = [
  { id: 'health', icon: '💚', title: '健康祈福', titleEn: 'Health & Wellness', desc: '祈求身体健康、疾病痊愈' },
  { id: 'career', icon: '💼', title: '事业祈福', titleEn: 'Career Success', desc: '祈求事业顺利、升职加薪' },
  { id: 'wealth', icon: '💰', title: '财运祈福', titleEn: 'Wealth & Prosperity', desc: '祈求财源广进、富足安康' },
  { id: 'love', icon: '💕', title: '姻缘祈福', titleEn: 'Love & Marriage', desc: '祈求姻缘美满、感情和睦' },
  { id: 'academic', icon: '📚', title: '学业祈福', titleEn: 'Academic Success', desc: '祈求学业进步、金榜题名' },
  { id: 'peace', icon: '🕊️', title: '平安祈福', titleEn: 'Peace & Protection', desc: '祈求出入平安、一切顺遂' },
  { id: 'ancestor', icon: '🕯️', title: '祭祖超度', titleEn: 'Ancestor Memorial', desc: '为逝者祈福、超度亡灵' },
  { id: 'custom', icon: '🙏', title: '定制法事', titleEn: 'Custom Prayer', desc: '特殊需求、个性化仪式' },
]

export default function PrayerPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    request: '',
  })

  const whatsappNumber = '8615607671586'
  const selectedPrayer = prayerTypes.find(p => p.id === selected)

  const generateWhatsAppLink = () => {
    const message = `🙏 道缘祈福服务%0A%0A姓名: ${form.name}%0A出生日期: ${form.birthDate}%0A祈福类型: ${selectedPrayer?.title} (${selectedPrayer?.titleEn})%0A%0A祈福需求:%0A${form.request}`
    return `https://wa.me/${whatsappNumber}?text=${message}`
  }

  return (
    <div className="min-h-screen ink-wash-bg">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a4d2e] to-[#2d5a4a] py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 text-6xl">道</div>
          <div className="absolute top-10 right-20 text-5xl">法</div>
          <div className="absolute bottom-10 left-20 text-4xl">自</div>
          <div className="absolute bottom-5 right-10 text-5xl">然</div>
        </div>
        <div className="relative z-10">
          <div className="text-5xl mb-3">🕯️</div>
          <h1 className="text-4xl title-brush text-white mb-2">祈福法事</h1>
          <p className="text-xl text-[#c9a227]">Taoist Prayer Services</p>
          <p className="text-green-200 mt-2 italic">"心诚则灵，天道酬勤"</p>
        </div>
      </div>

      {/* Pricing Banner */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227] to-[#c9a227]/20 py-5 text-center border-y-2 border-[#c9a227]/30">
        <p className="text-[#1a4d2e]">
          ✨ 统一功德金 <span className="text-3xl font-bold text-[#c9a227] ml-2">$299</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">All Prayer Services - $299 USD</p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-600 leading-relaxed">
          道教祈福源远流长，是中华民族祈求平安、吉祥的重要传统。<br/>
          Taoist prayer rituals have been practiced for thousands of years, 
          bringing blessings and protection to sincere seekers.
        </p>
      </div>

      {/* Prayer Types */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="section-divider text-xl text-[#c9a227] mb-8">☰</div>
        <h2 className="text-2xl title-brush text-center text-[#1a4d2e] mb-8">选择祈福类型 Select Your Prayer</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prayerTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`tao-card rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ${selected === type.id ? 'ring-2 ring-[#c9a227] scale-[1.02]' : 'hover:scale-[1.02]'}`}
            >
              <div className="text-4xl mb-2">{type.icon}</div>
              <h3 className="font-bold text-[#1a4d2e] text-lg">{type.title}</h3>
              <p className="text-sm text-[#5a8f7b]">{type.titleEn}</p>
              <p className="text-xs text-gray-500 mt-2">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Request Form */}
      {selected && (
        <div className="max-w-xl mx-auto px-4 pb-12">
          <div className="tao-card rounded-2xl p-8">
            <div className="text-center mb-6">
              <span className="text-3xl">{selectedPrayer?.icon}</span>
              <h3 className="text-xl title-brush text-[#1a4d2e] mt-2">{selectedPrayer?.title}</h3>
              <p className="text-[#c9a227] font-bold">$299</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                  姓名 Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                  placeholder="用于撰写疏文"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                  出生日期 Birth Date *
                </label>
                <input
                  type="date"
                  value={form.birthDate}
                  onChange={e => setForm({...form, birthDate: e.target.value})}
                  className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                  祈福需求 Your Prayer Request *
                </label>
                <textarea
                  value={form.request}
                  onChange={e => setForm({...form, request: e.target.value})}
                  className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                  rows={4}
                  placeholder="请详细描述您的祈福需求、心愿事项..."
                />
              </div>

              <div className="bg-gradient-to-r from-[#1a4d2e]/5 to-[#c9a227]/5 rounded-lg p-4 text-sm">
                <p className="text-[#1a4d2e] font-medium">🙏 服务流程：</p>
                <ol className="mt-2 space-y-1 text-gray-600 list-decimal list-inside">
                  <li>提交信息，联系客服</li>
                  <li>确认祈福详情与付款</li>
                  <li>道长择吉日举行法事</li>
                  <li>接收法事照片/视频反馈</li>
                </ol>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${form.name && form.birthDate && form.request ? 'btn-tao btn-gold cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                onClick={e => {
                  if (!form.name || !form.birthDate || !form.request) {
                    e.preventDefault()
                    alert('请填写所有必填项 / Please fill in all required fields')
                  }
                }}
              >
                <span className="text-xl">💬</span> 联系咨询 Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="tao-card rounded-xl p-6">
          <h3 className="text-lg title-brush text-[#1a4d2e] mb-4 text-center">🙏 祈福须知 Notice</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• 所有法事由正规道观道长主持，真实可靠</li>
            <li>• All rituals performed by ordained Taoist priests at authentic temples</li>
            <li>• 完成后会拍照/视频反馈，确保真实</li>
            <li>• Photo and video documentation provided for every service</li>
            <li>• 心诚则灵，信而不迷</li>
            <li>• For spiritual guidance purposes - sincere faith brings blessings</li>
          </ul>
        </div>
      </div>

      {/* Back */}
      <div className="text-center pb-12">
        <Link href="/" className="text-[#1a4d2e] hover:text-[#c9a227] transition">← 返回首页 Return Home</Link>
      </div>
    </div>
  )
}

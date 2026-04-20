'use client'

import { useState } from 'react'
import Link from 'next/link'

const prayerTypes = [
  { id: 'health', icon: '💚', title: '健康祈福', desc: '祈求身体健康、疾病痊愈', price: '¥199' },
  { id: 'career', icon: '💼', title: '事业祈福', desc: '祈求事业顺利、升职加薪', price: '¥299' },
  { id: 'wealth', icon: '💰', title: '财运祈福', desc: '祈求财源广进、富足安康', price: '¥399' },
  { id: 'love', icon: '💕', title: '姻缘祈福', desc: '祈求姻缘美满、感情和睦', price: '¥299' },
  { id: 'academic', icon: '📚', title: '学业祈福', desc: '祈求学业进步、金榜题名', price: '¥199' },
  { id: 'peace', icon: '🕊️', title: '平安祈福', desc: '祈求出入平安、一切顺遂', price: '¥199' },
  { id: 'ancestor', icon: '🕯️', title: '祭祖超度', desc: '为逝者祈福、超度亡灵', price: '¥599' },
  { id: 'tai sui', icon: '⛩️', title: '安太岁', desc: '化解太岁、趋吉避凶', price: '¥399' },
]

export default function PrayerPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    gender: '男',
    birthDate: '',
    birthTime: '',
    address: '',
    wish: '',
    contact: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedPrayer = prayerTypes.find(p => p.id === selected)

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🙏</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">祈福申请已提交</h2>
          <p className="text-gray-600 mb-6">
            感谢您的诚心祈福！道长将在吉时为您举行法事，完成后会通过微信/WhatsApp通知您。
          </p>
          <div className="bg-amber-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-600 mb-2">祈福人：<strong>{form.name}</strong></p>
            <p className="text-sm text-gray-600 mb-2">祈福类型：<strong>{selectedPrayer?.title}</strong></p>
            <p className="text-sm text-gray-600">联系方式：<strong>{form.contact}</strong></p>
          </div>
          <p className="text-sm text-amber-700 mb-6">
            💡 如需加急或有特殊要求，请添加客服微信/WhatsApp咨询
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  if (selected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8 px-4">
        <div className="max-w-lg mx-auto">
          <button onClick={() => setSelected(null)} className="text-green-700 mb-4 hover:underline">
            ← 返回选择
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-green-700 text-white p-6 text-center">
              <div className="text-4xl mb-2">{selectedPrayer?.icon}</div>
              <h1 className="text-2xl font-bold">{selectedPrayer?.title}</h1>
              <p className="text-green-200 mt-1">{selectedPrayer?.desc}</p>
              <p className="text-amber-300 mt-2 text-lg">功德金：{selectedPrayer?.price}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓名（用于撰写疏文）*</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="请输入真实姓名"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">性别*</label>
                  <select
                    value={form.gender}
                    onChange={e => setForm({...form, gender: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  >
                    <option>男</option>
                    <option>女</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">出生日期*</label>
                  <input
                    type="date"
                    required
                    value={form.birthDate}
                    onChange={e => setForm({...form, birthDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">出生时辰（可选）</label>
                <select
                  value={form.birthTime}
                  onChange={e => setForm({...form, birthTime: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">不确定</option>
                  <option>子时 (23:00-01:00)</option>
                  <option>丑时 (01:00-03:00)</option>
                  <option>寅时 (03:00-05:00)</option>
                  <option>卯时 (05:00-07:00)</option>
                  <option>辰时 (07:00-09:00)</option>
                  <option>巳时 (09:00-11:00)</option>
                  <option>午时 (11:00-13:00)</option>
                  <option>未时 (13:00-15:00)</option>
                  <option>申时 (15:00-17:00)</option>
                  <option>酉时 (17:00-19:00)</option>
                  <option>戌时 (19:00-21:00)</option>
                  <option>亥时 (21:00-23:00)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">居住地址（用于祈福方位）*</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={e => setForm({...form, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="如：北京市朝阳区xxx"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">祈福心愿（可选）</label>
                <textarea
                  value={form.wish}
                  onChange={e => setForm({...form, wish: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  rows={3}
                  placeholder="写下您的心愿，道长会在法事中为您祈愿..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">联系方式（微信/WhatsApp）*</label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={e => setForm({...form, contact: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="用于接收法事反馈"
                />
              </div>
              
              <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
                <p>⚠️ 提交后将有客服联系您确认付款及法事时间</p>
                <p className="mt-1">🙏 法事完成后，道长会拍照/视频反馈</p>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 transition"
              >
                提交祈福申请
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <div className="bg-green-700 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🕯️ 祈福服务</h1>
        <p className="text-amber-300">心诚则灵，心想事成</p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 leading-relaxed">
          道教祈福源远流长，是中华民族祈求平安、吉祥的重要传统。在此诚心祈福，愿诸天神明庇佑，心想事成。
        </p>
      </div>

      {/* Prayer Types */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prayerTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelected(type.id)}
              className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-lg font-bold text-green-800 mb-1">{type.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{type.desc}</p>
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                {type.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-800 mb-3 text-center">🙏 祈福须知</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• 祈福需心诚意正，方能感应天地</li>
            <li>• 法事由正规道观道长主持，真实可靠</li>
            <li>• 完成后会拍照/视频反馈，确保真实</li>
            <li>• 仅供信仰参考，信而不迷</li>
          </ul>
        </div>
      </div>

      {/* Back */}
      <div className="text-center pb-12">
        <Link href="/" className="text-green-700 hover:text-amber-600 transition">← 返回首页</Link>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BaziPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    gender: 'Male',
    birthDate: '',
    birthHour: '',
    birthPlace: '',
    calendar: 'solar',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      name: form.name,
      gender: form.gender,
      birthDate: form.birthDate,
      birthHour: form.birthHour || '12',
      birthPlace: form.birthPlace,
      calendar: form.calendar,
    })
    router.push(`/bazi/result?${params.toString()}`)
  }

  return (
    <div className="min-h-screen ink-wash-bg py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4 yin-yang-spin inline-block">☯</div>
          <h1 className="text-4xl title-brush text-[#1a4d2e] mb-2">八字命理</h1>
          <p className="text-xl text-[#5a8f7b]">Bazi Destiny Analysis</p>
          <p className="text-gray-600 mt-4 italic">"知命者不怨天，知己者不怨人"</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="tao-card rounded-2xl p-8">
          <div className="text-center mb-6">
            <span className="text-[#c9a227]">☰</span>
            <span className="mx-2 text-[#1a4d2e] font-bold">Enter Your Birth Details</span>
            <span className="text-[#c9a227]">☰</span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                姓名 Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                placeholder="Enter your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a4d2e] mb-1">性别 Gender</label>
                <select
                  value={form.gender}
                  onChange={e => setForm({...form, gender: e.target.value})}
                  className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                >
                  <option>Male 阳男</option>
                  <option>Female 阴女</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a4d2e] mb-1">历法 Calendar</label>
                <select
                  value={form.calendar}
                  onChange={e => setForm({...form, calendar: e.target.value})}
                  className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                >
                  <option value="solar">公历 Solar</option>
                  <option value="lunar">农历 Lunar</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                出生日期 Birth Date *
              </label>
              <input
                type="date"
                required
                value={form.birthDate}
                onChange={e => setForm({...form, birthDate: e.target.value})}
                className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                出生时辰 Birth Hour
              </label>
              <select
                value={form.birthHour}
                onChange={e => setForm({...form, birthHour: e.target.value})}
                className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
              >
                <option value="">Unknown 不详</option>
                <option value="0">子时 Rat 23:00-01:00</option>
                <option value="1">丑时 Ox 01:00-03:00</option>
                <option value="2">寅时 Tiger 03:00-05:00</option>
                <option value="3">卯时 Rabbit 05:00-07:00</option>
                <option value="4">辰时 Dragon 07:00-09:00</option>
                <option value="5">巳时 Snake 09:00-11:00</option>
                <option value="6">午时 Horse 11:00-13:00</option>
                <option value="7">未时 Goat 13:00-15:00</option>
                <option value="8">申时 Monkey 15:00-17:00</option>
                <option value="9">酉时 Rooster 17:00-19:00</option>
                <option value="10">戌时 Dog 19:00-21:00</option>
                <option value="11">亥时 Pig 21:00-23:00</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a4d2e] mb-1">
                出生地 Birth Place
              </label>
              <input
                type="text"
                value={form.birthPlace}
                onChange={e => setForm({...form, birthPlace: e.target.value})}
                className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:ring-2 focus:ring-[#c9a227] outline-none bg-white/80"
                placeholder="City, Country"
              />
            </div>

            <div className="bg-gradient-to-r from-[#1a4d2e]/5 to-[#c9a227]/5 rounded-lg p-4 text-sm">
              <p className="text-[#1a4d2e]">💡 <strong>Free Analysis</strong>: Basic personality insights</p>
              <p className="text-[#5a8f7b] mt-1">🔮 <strong>Premium Report</strong>: Career, wealth, relationships - via WhatsApp</p>
            </div>

            <button
              type="submit"
              className="w-full btn-tao text-lg"
            >
              ☯ 排盘分析 Generate Chart
            </button>
          </div>
        </form>

        <div className="text-center mt-8">
          <a href="/" className="text-[#1a4d2e] hover:text-[#c9a227] transition">← 返回首页 Back to Home</a>
        </div>
      </div>
    </div>
  )
}
